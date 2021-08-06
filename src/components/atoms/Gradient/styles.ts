import styled, { css } from 'styled-components/native';

import { TAlignContent } from './index';

interface IAlignProps {
  justifyContent?: TAlignContent;
  alignItems?: TAlignContent;
}

export const Container = styled.View<IAlignProps>`
  width: 100%;
  height: 100%;

  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}

  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
`;
