import styled from 'styled-components';

import main_bg_desktop from '../../images/sidebar_bg_desktop.png';

export const CalendarStyles = styled.label`
  width: 202px;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  padding: 0 20px;
  .calendar {
    font-family: ${({ theme: { fonts } }) => fonts.verdana};
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    border: none;
    width: 140px;
    outline: none;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 34px;
      line-height: 41px;
      width: 220px;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 300px;
    margin-bottom: 60px;
  }
`;

export const Wrapper = styled.div`
  /* @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: block;
  } */
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
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

export const ButtonOpenModalForm = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: transparent;
  line-height: 0;
  color: ${prop => prop.theme.colors.$orange};
  border: 3px solid ${prop => prop.theme.colors.$orange};
  padding: 0;
  :hover {
    background: ${prop => prop.theme.colors.$orange};
    color: ${prop => prop.theme.colors.$white};
    border: none;
  }
`;
