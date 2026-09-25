import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

async function enableMocking() {
  if (process.env.NODE_ENV === 'test') return;
  // MSW só no browser (dev/prod estático). API claramente mock.
  if (typeof window === 'undefined') return;
  try {
    const { worker } = await import('./mocks/browser');
    await worker.start({
      onUnhandledRequest: 'bypass',
      serviceWorker: { url: `${process.env.PUBLIC_URL}/mockServiceWorker.js` },
      quiet: false,
    });
    // eslint-disable-next-line no-console
    console.info('[MSW] API mock ativa em /api/* — não é backend real.');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('[MSW] Worker não iniciado — app usa só Zustand/localStorage.', err);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

enableMocking().finally(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
