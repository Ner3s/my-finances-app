import 'styled-components/native';

import themes from './themes/light';

type Theme = typeof themes;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
