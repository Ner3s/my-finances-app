import { FontSizeType, ThemeType, TypeSize } from './types';

const spacings: TypeSize = {
  small: '15px',
  medium: '30px',
  large: '50px',
  xl: '100px',
};

const fontSize: FontSizeType = {
  small: '16px',
  medium: '24px',
  large: '32px',
  superLarge: '40px',
  xl: '48px',
};

export const sizes: Pick<ThemeType, 'font' | 'spacings'> = {
  spacings,
  font: { sizes: fontSize },
};
