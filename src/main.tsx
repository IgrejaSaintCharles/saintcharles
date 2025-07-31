import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 👉 Importa a função do seu pixel.ts
import { initFacebookPixel } from './pixel.ts';

// 👉 Inicializa o pixel ANTES da renderização
initFacebookPixel();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
