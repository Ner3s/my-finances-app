import React, { ReactElement, ReactNode } from 'react';

import { CSSProperties } from 'styled-components';

import * as S from './styles';

export type TTitleType = 'h1' | 'h2' | 'h3' | 'h4';
interface TextProps {
  children: ReactNode;
  title?: TTitleType;
  containerStyles?: CSSProperties;
  textStyles?: TextProps;
}

function Text({
  children,
  title,
  textStyles,
  containerStyles,
}: TextProps): ReactElement {
  return (
    <S.Container style={containerStyles}>
      <S.Text title={title} style={textStyles}>
        {children}
      </S.Text>
    </S.Container>
  );
}

export { Text };
