import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  @media (max-width: 767px) {
    margin-top: 20px;
  }
  @media (min-width: 768px) {
    margin-top: 45px;
  }
`;

export const Cont = styled.div`
  @media (max-width: 767px) {
    margin-top: 20px;
  }
  @media (min-width: 768px) {
    margin-top: 70px;
  }
`;

export const Link = styled(NavLink)`
  @media (max-width: 1279px) {
    margin-left: 16px;
  }
  @media (min-width: 1280px) {
    margin-left: 16px;
  }
  color: #9b9faa;
  text-decoration: none;
  padding-top: 20px;
`;

export const Sign = styled(NavLink)`
  @media (max-width: 1279px) {
    margin-left: auto;
  }
  @media (min-width: 1280px) {
    margin-left: 20px;
    padding-left: 20px;
    border-left: #9b9faa solid 2px;
  }

  color: #212121;
  text-decoration: none;
  text-align: right;
`;

export const Diary = styled(NavLink)`
  @media (max-width: 1279px) {
    margin-left: auto;
  }
  @media (min-width: 1280px) {
    margin-left: 20px;
    padding-left: 20px;
    border-left: #9b9faa solid 2px;
  }

  color: #212121;
  text-decoration: none;
  margin-right: 20px;
  text-align: right;
`;

export const Calc = styled(NavLink)`
  @media (max-width: 1279px) {
    margin-left: auto;
  }
  @media (min-width: 1280px) {
    padding-left: 20px;
  }
  color: #9b9faa;
  text-decoration: none;
`;
