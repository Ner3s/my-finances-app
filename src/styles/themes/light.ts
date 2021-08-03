import { sizes } from './sizes';
import { ThemeType } from './types';

const light: ThemeType = {
  colors: {
    light: '#FFFFFF',
    ice: '#FAFAFA',
    dark: '#000000',
    primary: '#76C893',
    secondary: '#1E6091',

    lightgrey: '#DDDDDD',
    darkgrey: '#555555',

    red: '#E76E61',
    yellow: '#EFCB68',
    background: '#E9EBF1',
  },
  ...sizes,
};

export default light;
