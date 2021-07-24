import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from '~/router';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <Routes />
    </SafeAreaProvider>
  );
}
