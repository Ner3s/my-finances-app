import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  ReactElement,
  useMemo,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from 'styled-components';

import themes from '~/styles/themes';

type ThemeState = 'light' | 'dark';

interface AppThemeContext {
  currentTheme: ThemeState;
  toggleTheme(): void;
}

const AppThemeContext = createContext({} as AppThemeContext);

const PREFIX = '@AppName';

function AppThemeProvider(children: ReactNode): ReactElement {
  const [current, setCurrent] = useState(async () => {
    const theme = (await AsyncStorage.getItem(`${PREFIX}:theme`)) as ThemeState;

    return theme ?? 'light';
  });

  const toggleTheme = (): Promise<ThemeState> => {
    console.log(themes[current]);
  };

  const value = useMemo(
    () => ({
      currentTheme: themes[current],
      toggleTheme,
    }),
    [current, toggleTheme],
  );

  return (
    <AppThemeContext.Provider value={value}>
      <ThemeProvider theme={themes[current]}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
}

function useTheme(): AppThemeContext {
  const themeContext = useContext(AppThemeContext);

  if (!themeContext) {
    throw new Error('useTheme must be used within an AppThemeProvider');
  }
  return themeContext;
}

export { AppThemeProvider };
