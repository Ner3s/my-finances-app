import React, { ReactElement } from 'react';

import { Gradient, Logo } from '~/components/atoms';

import { Container } from './styles';

function ButtonLogo(): ReactElement {
  return (
    <Container>
      <Gradient>
        <Logo />
      </Gradient>
    </Container>
  );
}

export { ButtonLogo };
