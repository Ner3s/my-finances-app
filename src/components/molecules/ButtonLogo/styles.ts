import styled from 'styled-components/native';

interface IContainerProps {
  radius?: string;
}

export const Container = styled.View<IContainerProps>`
  border-radius: ${({ radius }) => radius ?? '50px'};
  width: 80px;
  height: 80px;
`;
