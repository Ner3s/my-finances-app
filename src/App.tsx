import 'react-native-gesture-handler';
import React, { ReactElement, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Updates from 'expo-updates';

import Routes from '~/router';

export default function App(): ReactElement {
  useEffect(() => {
    async function updateApp(): Promise<void> {
      if (!__DEV__) {
        const { isAvailable } = await Updates.checkForUpdateAsync();

        if (isAvailable) {
          await Updates.fetchUpdateAsync();

          await Updates.reloadAsync();
        }
      }
    }
    updateApp();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#222" />
      <Routes />
    </NavigationContainer>
  );
}
