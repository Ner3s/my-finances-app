import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
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

export const AppThemeProvider: React.FC = ({ children }) => {
  const [current, setCurrent] = useState<Promise<ThemeState>>(async () => {
    const theme = (await AsyncStorage.getItem(`${PREFIX}:theme`)) as ThemeState;

    return theme ?? 'light';
  });

  // const toggleTheme = (): Promise<ThemeState> => {
  //   return 'light'
  // }

  return (
    <AppThemeContext.Provider value={value}>
      <ThemeProvider theme={themes[currentTheme]}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};
