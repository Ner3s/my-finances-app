import React, { ReactElement, ReactNode } from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import { useTheme } from '~/hooks/theme';

import { Container } from './styles';

type TPercent = 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;

interface IGradientProps {
  children: ReactNode;
  x?: TPercent;
  y?: TPercent;
}

function Gradient({ children, x, y }: IGradientProps): ReactElement {
  const { currentTheme: theme } = useTheme();
  return (
    <Container>
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.secondary]}
        start={{ x: x ?? 1, y: y ?? 1 }}
      >
        {children}
      </LinearGradient>
    </Container>
  );
}

export { Gradient };
