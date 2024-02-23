import React, { createContext, useContext, useEffect } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import usePersistedState from './persistedState';
import light from '@/styles/themes/light';
import dark from '@/styles/themes/dark';

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
  const [theme, setTheme] = usePersistedState<DefaultTheme | null>(
    'theme',
    null
  );

  useEffect(() => {
    // Recuperar o tema do localStorage quando o componente for montado
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      const parsedTheme = JSON.parse(storedTheme);
      setTheme(parsedTheme);
    } else {
      // Caso não haja tema no localStorage, definir o tema padrão como light
      setTheme(light);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme?.title === 'light' ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{ theme: theme || light, toggleTheme }}>
      {theme && <ThemeProvider theme={theme}>{children}</ThemeProvider>}
    </ThemeContext.Provider>
  );
};

export default AppProvider;
