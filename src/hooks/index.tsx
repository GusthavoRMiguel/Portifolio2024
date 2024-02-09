import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@/styles/theme';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppProvider;
