import React, { ReactElement } from 'react';

import { IconLogo, IconLogoGradient } from '~/assets/icons';

interface ILogoProps {
  width?: string;
  height?: string;
  logoGradient?: boolean;
}

function Logo({ width, height, logoGradient }: ILogoProps): ReactElement {
  return !logoGradient ? (
    <IconLogo width={width ?? '44'} height={height ?? '39'} />
  ) : (
    <IconLogoGradient width={width ?? '44'} height={height ?? '39'} />
  );
}

export { Logo };
