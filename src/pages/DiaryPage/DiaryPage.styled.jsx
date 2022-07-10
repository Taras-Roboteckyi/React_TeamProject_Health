import styled from 'styled-components';
import main_bg_desktop from '../../images/sidebar_bg_desktop.png';

export const Wrapper = styled.div`
  /* @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: block;
  } */
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
    background: url(${main_bg_desktop}) right no-repeat;

    /* background-size: 50%;
    background-repeat: no-repeat;
    background-position: right;
    background-image: url(${main_bg_desktop}); */
    width: 100%;
    height: 100%;
    /* position: absolute; */
    right: 0;
    top: 0;

    /*  z-index: 12; */
  }
`;
