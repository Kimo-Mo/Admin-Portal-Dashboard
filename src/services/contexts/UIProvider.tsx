import type { ReactNode } from 'react';
import { AntDProvider } from './AntDProvider';
import { ThemeProvider } from './ThemeProvider';
import { ColorsProvider } from './ColorsProvider';
import { QueryProvider } from './QueryProvider';
import { SideBarProvider } from './SideBarProvider';

export const UIProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryProvider>
      <ThemeProvider>
        <ColorsProvider>
          <AntDProvider>
            <SideBarProvider>{children}</SideBarProvider>
          </AntDProvider>
        </ColorsProvider>
      </ThemeProvider>
    </QueryProvider>
  );
};
