
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// Import types to ensure global JSX augmentation for custom elements like iconify-icon is available
import './types';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
