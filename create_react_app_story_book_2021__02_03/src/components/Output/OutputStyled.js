import styled, { css } from 'styled-components';

export const OutputStyled = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: #000000;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);
  color: #ffffff;
  width: 275px;
`;

export const TopBox = styled.div`
  text-align: right;
  height: 40px;
  font-size: 25px;
  line-height: 40px;
  word-wrap: break-word
    ${props =>
      props.fontSize > 18 &&
      css`
        font-size: 20px;
      `}
    ${props =>
      props.fontSize > 22 &&
      css`
        font-size: 15px;
      `}
    ${props =>
      props.fontSize > 26 &&
      css`
        font-size: 15px;
        line-height: 20px;
      `};
`;

export const BottomBox = styled.div`
  text-align: right;
  height: 60px;
  font-size: 50px;
  line-height: 60px;
  word-wrap: break-word
    ${props =>
      props.fontSize > 9 &&
      css`
        font-size: 40px;
      `}
    ${props =>
      props.fontSize > 11 &&
      css`
        font-size: 30px;
      `}
    ${props =>
      props.fontSize > 13 &&
      css`
        font-size: 20px;
        line-height: 30px;
      `};
`;
