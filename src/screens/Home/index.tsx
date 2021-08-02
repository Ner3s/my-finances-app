import React, { ReactElement } from 'react';
import { TouchableHighlight } from 'react-native';

import { useTheme } from '~/hooks/theme';

import { Container, Text } from './styles';

function Home(): ReactElement {
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <Text>Home</Text>
      <TouchableHighlight onPress={toggleTheme}>
        <Text>Home</Text>
      </TouchableHighlight>
    </Container>
  );
}

export default Home;
