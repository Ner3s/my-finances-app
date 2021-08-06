import styled, { css } from 'styled-components/native';

import { TTitleType } from '.';

interface ITextProps {
  title?: TTitleType;
}

export const Container = styled.View`
  flex: 1;
`;

export const Text = styled.Text<ITextProps>`
  ${(props) =>
    (props.title === 'h1' &&
      css`
        font-size: ${({ theme }) => theme.font.sizes.superLarge};
        font-weight: bold;
      `) ||
    (props.title === 'h2' &&
      css`
        font-size: ${({ theme }) => theme.font.sizes.large};
        font-weight: bold;
      `) ||
    (props.title === 'h3' &&
      css`
        font-size: ${({ theme }) => theme.font.sizes.medium};
        font-weight: bold;
      `) ||
    (props.title === 'h4' &&
      css`
        font-size: ${({ theme }) => theme.font.sizes.small};
        font-weight: bold;
      `)};

  /* ${({ title }) => title === 'h1' && css``} */
`;
