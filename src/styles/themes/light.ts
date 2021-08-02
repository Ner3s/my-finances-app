import { sizes } from './sizes';
import { ThemeType } from './types';

const light: ThemeType = {
  colors: {
    light: '#F1F1F1',
    dark: '#222222',
    primary: '#F4F4F4',
    secondary: '#222222',
  },
  ...sizes,
};

export default light;
