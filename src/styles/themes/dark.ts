import { sizes } from './sizes';
import { ThemeType } from './types';

const dark: ThemeType = {
  colors: {
    light: '#2F463F',
    dark: '#000000',
    primary: '#F4F4F4',
    secondary: '#222222',
  },
  ...sizes,
};

export default dark;
