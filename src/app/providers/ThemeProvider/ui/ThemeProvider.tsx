import React from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

interface ThemeProviderProps {
  initialTheme?: Theme;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { initialTheme, children } = props;
  const [theme, setTheme] = React.useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = React.useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme],
  );
  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
