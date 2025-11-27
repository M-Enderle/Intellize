import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export function render(url: string) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );

  // Check if the rendered HTML contains the 404 error page
  const statusCode = html.includes('404') && html.includes('Seite nicht gefunden') ? 404 : 200;

  return { html, statusCode };
}
