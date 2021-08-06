import React, { ReactElement, ReactNode } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { CSSProperties } from 'styled-components';

import { useTheme } from '~/hooks/theme';

import { Container } from './styles';

type TPercent = 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;

export type TAlignContent =
  | 'flex-start'
  | 'center'
  | 'space-bettewen'
  | 'flex-end'
  | 'space-around';
interface IGradientProps {
  children: ReactNode;
  start?: IStartEndProps;
  end?: IStartEndProps;
  justifyContent?: TAlignContent;
  alignItems?: TAlignContent;
  gradientStyles?: CSSProperties;
  containerStyles?: CSSProperties;
}

interface IStartEndProps {
  x?: TPercent;
  y?: TPercent;
}

function Gradient({
  children,
  start,
  end,
  justifyContent,
  alignItems,
  gradientStyles,
  containerStyles,
}: IGradientProps): ReactElement {
  const { currentTheme: theme } = useTheme();
  return (
    <Container
      justifyContent={justifyContent}
      alignItems={alignItems}
      style={containerStyles}
    >
      <LinearGradient
        style={gradientStyles}
        colors={[theme.colors.primary, theme.colors.secondary]}
        start={{ x: start?.x ?? 0, y: start?.y ?? 0 }}
        end={{ x: end?.x ?? 1, y: end?.y ?? 1 }}
      >
        {children}
      </LinearGradient>
    </Container>
  );
}

export { Gradient };
