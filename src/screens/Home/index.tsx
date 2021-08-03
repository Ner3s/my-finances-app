import React, { ReactElement } from 'react';
import { TouchableHighlight } from 'react-native';

import { Gradient, Logo } from '~/components/atoms';
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
      <Gradient x={1} y={1}>
        <Text style={{ height: 500 }}>TESTE</Text>
      </Gradient>
    </Container>
  );
}

export default Home;
