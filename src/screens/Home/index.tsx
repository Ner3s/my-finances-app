import React, { ReactElement } from 'react';
import { TouchableHighlight } from 'react-native';

import { Logo } from '~/components/atoms';
import { ButtonLogo } from '~/components/molecules';
import { useTheme } from '~/hooks/theme';

import { Container, Text } from './styles';

function Home(): ReactElement {
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <Logo />
      <Text>Home</Text>
      <TouchableHighlight onPress={toggleTheme}>
        <Text>Home</Text>
      </TouchableHighlight>
      <ButtonLogo />
    </Container>
  );
}

export default Home;
