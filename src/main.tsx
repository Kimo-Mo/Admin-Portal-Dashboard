import '@ant-design/v5-patch-for-react-19';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/assets/style/globals.css';
import { UIProvider } from '@/services/contexts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UIProvider>
      <h1 className="text-2xl font-bold text-center text-success">Admin Portal</h1>
    </UIProvider>
  </StrictMode>
);
