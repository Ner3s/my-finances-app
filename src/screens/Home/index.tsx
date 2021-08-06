import React, { ReactElement } from 'react';
import { View } from 'react-native';

import { IconWaveBackground } from '~/assets/icons';
import { Text } from '~/components/atoms';
import { ButtonLogo } from '~/components/molecules';
import { useTheme } from '~/hooks/theme';

import * as S from './styles';

function Home(): ReactElement {
  const { toggleTheme } = useTheme();

  return (
    <S.Container>
      <View
        style={{
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          left: -15,
        }}
      >
        <IconWaveBackground width={445} height={515} />
      </View>

      <View style={{ flex: 1, alignItems: 'center', marginTop: '25%' }}>
        <ButtonLogo />
        <Text title="h1">
          Minhas {'\n'}
          Finanças
        </Text>
      </View>
    </S.Container>
  );
}

export default Home;
