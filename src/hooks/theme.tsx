import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  ReactElement,
  useEffect,
} from 'react';
import { useColorScheme } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from 'styled-components';

import themes from '~/styles/themes';
import { ThemeType } from '~/styles/themes/types';

type ThemeState = 'light' | 'dark';

interface AppThemeContext {
  currentTheme: ThemeType;
  toggleTheme(): void;
}

interface IAppThemeProps {
  children: ReactNode;
}

const AppThemeContext = createContext({} as AppThemeContext);

const PREFIX = '@AppName';

function AppThemeProvider({ children }: IAppThemeProps): ReactElement {
  const colorTheme = useColorScheme(); // pega o thema do celular.

  const [currentValue, setCurrentValue] = useState<ThemeState>(
    colorTheme ?? 'light',
  );

  const toggleTheme = async (): Promise<void> => {
    const sendThemeType = currentValue === 'light' ? 'dark' : 'light';
    await AsyncStorage.setItem(`${PREFIX}: theme`, sendThemeType);
    setCurrentValue(sendThemeType);
    console.log(
      `\n\n ========= \n\n Value: ${sendThemeType} \n\n`,
      themes[currentValue],
    );
  };

  const handleGetTheme = async (): Promise<void> => {
    let themeType: ThemeState = 'light';

    await AsyncStorage.getItem(`${PREFIX}: theme`).then((response?) => {
      themeType = response as ThemeState;
    });

    console.log(`\n --> ${themeType}`);
    setCurrentValue(themeType);
  };

  useEffect(() => {
    handleGetTheme();
  }, []);

  return (
    <AppThemeContext.Provider
      value={{
        currentTheme: themes[currentValue],
        toggleTheme,
      }}
    >
      <ThemeProvider theme={themes[currentValue]}>{children}</ThemeProvider>
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

export { AppThemeProvider, useTheme };
