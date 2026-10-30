import jwt from "jsonwebtoken";
// import User from "../models/userModel.js";
import { store } from "../dataStore.js";

const jwtSecret = process.env.JWT_SECRET || (
  process.env.NODE_ENV === 'production'
    ? null
    : 'marketlens-local-development-secret'
);

export const protect = async (req, res, next) => {
  let token;

  // Get token from Authorization header or HTTP-only cookie
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) return res.status(401).json({ message: "Not authorized, no token" });

  try {
    if (!jwtSecret) return res.status(500).json({ message: "JWT_SECRET is not configured" });
    const decoded = jwt.verify(token, jwtSecret);
    // req.user = await User.findById(decoded.id).select("-password");
    const user = store.users.find(u => u._id === decoded.id);
    if (!user) throw new Error("Not found");
    req.user = { ...user };
    delete req.user.password;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token failed" });
  }
};
