import '@ant-design/v5-patch-for-react-19';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/assets/style/globals.css';
import { UIProvider } from '@/services/contexts';
import { DashLayout } from '@/components/layouts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UIProvider>
      <DashLayout>
        <h1 className="text-2xl font-bold">Admin Portal</h1>
      </DashLayout>
    </UIProvider>
  </StrictMode>
);
