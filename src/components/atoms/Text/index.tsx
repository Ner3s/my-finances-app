import React, { ReactNode } from 'react';

import * as S from './styles';

interface TextProps {
  children: ReactNode;
}

function Text({ children }: TextProps) {
  return (
    <S.Container>
      <S.Text>{children}</S.Text>
    </S.Container>
  );
};

export { Text };
