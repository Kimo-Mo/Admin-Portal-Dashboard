import type { ReactNode } from 'react';
import { AntDProvider } from './AntDProvider';
import { ThemeProvider } from './ThemeProvider';
import { ColorsProvider } from './ColorsProvider';
import { QueryProvider } from './QueryProvider';

export const UIProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryProvider>
      <ThemeProvider>
        <ColorsProvider>
          <AntDProvider>{children}</AntDProvider>
        </ColorsProvider>
      </ThemeProvider>
    </QueryProvider>
  );
};
