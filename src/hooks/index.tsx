import React, { ReactElement, ReactNode } from 'react';

import { AppThemeProvider } from './theme';

interface IAppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: IAppProviderProps): ReactElement {
  return <AppThemeProvider>{children}</AppThemeProvider>;
}

export default AppProvider;
