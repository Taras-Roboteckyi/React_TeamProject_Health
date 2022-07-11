import styled from 'styled-components';

export const LoginBtn = styled.button`
  font-family: ${({ theme: { fonts } }) => fonts.verdana};
  font-weight: 700;
  font-size: 14px;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.verdana};
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  background: ${({ theme: { colors } }) => colors.$orange};
  color: ${({ theme: { colors } }) => colors.$white};
  box-shadow: ${({ theme: { options } }) => options.buttonShadow};
  border-radius: ${({ theme: { options } }) => options.radius};
  border: none;
  cursor: pointer;
  align-self: center;
  padding: 10px 55px;
`;

export const RegisterBtn = styled.button`
  font-family: ${({ theme: { fonts } }) => fonts.verdana};
  font-weight: 700;
  font-size: 14px;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.verdana};
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  background: ${({ theme: { colors } }) => colors.$white};
  color: ${({ theme: { colors } }) => colors.$orange};
  box-shadow: ${({ theme: { options } }) => options.buttonShadow};
  border: 2px solid #FC842D;
  border-radius: ${({ theme: { options } }) => options.radius};
  cursor: pointer;
  align-self: center;
  padding: 10px 55px;
`
