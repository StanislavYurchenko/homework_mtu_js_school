import styled, { css } from 'styled-components';

export const Title = styled.h2`
  font-size: 20px;

  ${props =>
    css`
      color: ${props.color};
    `}
`;
