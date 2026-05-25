import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './styles/globals.css';
import App from './app/App';

const container = document.getElementById('root');
if (container.hasChildNodes()) {
  hydrateRoot(
    container,
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
} else {
  const root = createRoot(container);
  root.render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}