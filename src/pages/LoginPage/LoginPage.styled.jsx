import styled from 'styled-components';
import login_bg_tablet from '../../images/main_bg_tablet.png';
import login_bg_desktop from '../../images/main_bg_desktop.png';

export const ImageStyled = styled.div`
  @media (min-width: 768px) {
    background: url(${login_bg_tablet}) bottom right no-repeat;
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  @media (min-width: 1280px) {
    background: url(${login_bg_desktop}) top right no-repeat;
  }
`;

export const H2 = styled.h2`
  font-family: ${({ theme: { fonts } }) => fonts.gothamPro};
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.gothamProHeight};
  text-transform: uppercase;
  color: ${({ theme: { colors } }) => colors.$orange};
`;