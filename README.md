# MarketLens

MarketLens is a full-stack stock analysis and portfolio tracking application. It provides market data, stock search and analysis, portfolio management, trading tools, authentication, chat, and live price updates.

## Live Application

- **Frontend:** [https://market-lens01.netlify.app/](https://market-lens01.netlify.app/)
- **Backend API:** [https://marketlens-cj55.onrender.com](https://marketlens-cj55.onrender.com)
- **Backend health check:** [https://marketlens-cj55.onrender.com/health](https://marketlens-cj55.onrender.com/health)

## Features

- User signup and login with JWT authentication
- Stock search, quotes, history, news, and market pulse data
- Portfolio tracking and bulk holdings import
- Trading terminal with portfolio calculations
- Real-time price updates through Socket.IO
- User and admin chat
- Responsive light and dark themes

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Axios
- Recharts
- Socket.IO Client

### Backend

- Node.js
- Express
- Socket.IO
- JWT and bcrypt authentication
- Yahoo Finance and market-data APIs
- JSON data storage, with optional MongoDB configuration

## Project Structure

```text
MarketLens/
├── backend/       # Express API and Socket.IO server
├── frontend/      # React/Vite client
├── netlify.toml   # Netlify deployment configuration
└── start.bat      # Starts both local development servers
```

## Run Locally

### Requirements

- Node.js 20.19+ or Node.js 22+
- npm

### Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

### Start both applications

From the project root on Windows:

```bat
start.bat
```

Or start them separately:

```bash
# Terminal 1
cd backend
npm run dev

# Terminal 2
cd frontend
npm run dev
```

Local URLs:

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend health check: [http://localhost:3001/health](http://localhost:3001/health)

## Environment Variables

### Frontend

Create `frontend/.env` when overriding the local defaults:

```env
VITE_API_BASE_URL=http://localhost:3001
VITE_SOCKET_URL=http://localhost:3001
```

Production builds use the deployed Render backend configured in `frontend/src/config.js`.

### Backend

Configure these values in `backend/.env` or your hosting provider:

```env
PORT=3001
CORS_ORIGIN=https://market-lens01.netlify.app,https://marketlens02.netlify.app
JWT_SECRET=replace-with-a-secure-secret
FINNHUB_API_KEY=your-finnhub-key
ALPHA_VANTAGE_API_KEY=your-alphavantage-key
MONGO_DB_URI=your-mongodb-connection-string
```

Do not commit `.env` files or API keys to the repository.

## Production Deployment

### Frontend on Netlify

Use the following Netlify build settings:

- **Base directory:** `frontend`
- **Build command:** `npm run build`
- **Publish directory:** `dist`

Set:

```env
VITE_API_BASE_URL=https://marketlens-cj55.onrender.com
VITE_SOCKET_URL=https://marketlens-cj55.onrender.com
```

### Backend on Render

Deploy the `backend` directory as a Node service. Set `CORS_ORIGIN` to include every deployed frontend origin, then redeploy after changing it.

## Validation

Build the frontend:

```bash
cd frontend
npm run build
```

Run the frontend linter:

```bash
npm run lint
```
