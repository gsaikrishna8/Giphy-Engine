# Giphy Engine

A minimal React + TypeScript + Vite app that lets you search Giphy and view results.

## Features
- Search Giphy by query and display GIFs
- Simple component structure: `Search` handles input and fetch logic, `GifList` renders results
- Uses Vite environment variable `VITE_GIPHY_API_KEY` for the API key

## Prerequisites
- Node.js 18+ (or LTS)
- npm

## Getting started

1. Install dependencies
```bash
npm install
```

2. Create a `.env` file in the project root and add your Giphy API key:
```env
VITE_GIPHY_API_KEY=your_api_key_here
```

3. Start the dev server
```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Available scripts
- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run preview` — preview production build
- `npm run lint` — run ESLint (if configured)
- `npm test` — run tests (if configured)





![alt text](image-1.png)
