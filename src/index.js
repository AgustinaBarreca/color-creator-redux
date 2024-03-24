import React, { StrictMode, createContext } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ColorProvider from './ColorProvider';
import ColorReduxProvider from './store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ColorReduxProvider>
      <ColorProvider>
        <App />
      </ColorProvider>
    </ColorReduxProvider>
  </StrictMode>
);
