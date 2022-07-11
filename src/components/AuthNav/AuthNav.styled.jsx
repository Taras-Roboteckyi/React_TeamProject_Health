import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-top: 40px;
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
  &.active {
    color: red;

    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  :hover {
    color: blue;
  }
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
  &.active {
    color: red;

    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  :hover {
    color: blue;
  }
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
  padding-top: 20px;
  text-align: right;
  &.active {
    color: red;

    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  :hover {
    color: blue;
  }
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
  &.active {
    color: red;

    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  :hover {
    color: blue;
  }
`;
