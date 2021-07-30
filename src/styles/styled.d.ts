import 'styled-components/native';

import Theme from './themes/light';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
