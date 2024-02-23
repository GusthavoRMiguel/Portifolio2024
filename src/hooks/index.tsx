import React, { createContext, useContext, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import usePersistedState from './persistedState';
import light from '@/styles/themes/light';
import dark from '@/styles/themes/dark';
import LoadingPage from '@/components/loadingPage';

interface ThemeContextType {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  useEffect(() => {
    setTimeout(() => {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        const parsedTheme = JSON.parse(storedTheme);
        setTheme(parsedTheme);
      } else {
        setTheme(light);
      }
      setIsLoading(false);
    }, 2000);
  }, []);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppProvider;
