
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './types.ts';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical Error: Target container 'root' not found in document.");
} else {
  console.log("Risk Solutions Dubai: Initializing Application...");
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
