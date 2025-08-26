import type { ReactNode } from 'react';
import { AntDProvider } from './AntDProvider';
import { ThemeProvider } from './ThemeProvider';
import { ColorsProvider } from './ColorsProvider';
import { QueryProvider } from './QueryProvider';
import { SideBarProvider } from './SideBarProvider';
import { ConfirmPopupProvider } from './ConfirmPopupProvider';
import { SuccessPopupProvider } from './SuccessPopupProvider';

export const UIProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryProvider>
      <ThemeProvider>
        <ColorsProvider>
          <AntDProvider>
            <SideBarProvider>
              <SuccessPopupProvider>
                <ConfirmPopupProvider>{children}</ConfirmPopupProvider>
              </SuccessPopupProvider>
            </SideBarProvider>
          </AntDProvider>
        </ColorsProvider>
      </ThemeProvider>
    </QueryProvider>
  );
};
