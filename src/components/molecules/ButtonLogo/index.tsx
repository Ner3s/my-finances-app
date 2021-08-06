import React, { ReactElement } from 'react';

import { Gradient, Logo } from '~/components/atoms';

import { Container, WrapperLogo } from './styles';

interface IButtonLogoProps {
  logoGradient?: boolean;
}

function ButtonLogo({ logoGradient }: IButtonLogoProps): ReactElement {
  return (
    <Container>
      <Gradient
        gradientStyles={{
          overflow: 'hidden',
          borderRadius: 50,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <WrapperLogo>
          <Logo logoGradient={logoGradient} />
        </WrapperLogo>
      </Gradient>
    </Container>
  );
}

export { ButtonLogo };
