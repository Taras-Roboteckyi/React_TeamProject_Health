import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Contain = styled.div`
  @media (max-width: 767px) {
    margin-top: 20px;
    display: inline;

    width: auto;
  }
  @media (min-width: 768px) {
    margin-top: 30px;
  }
`;

export const Sign = styled(NavLink)`
  @media (max-width: 767px) {
    width: 60px;
  }
  @media (max-width: 1279px) {
    margin-left: auto;
  }
  @media (min-width: 1280px) {
    margin-left: 20px;
    padding-left: 20px;
    border-left: #9b9faa solid 2px;
  }
  &.active {
    color: #212121;

    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  color: #9b9faa;
  text-decoration: none;
  text-align: right;
`;

export const Link = styled(NavLink)`
  @media (max-width: 767px) {
    width: 117px;
    height: 12px;
  }
  @media (max-width: 1279px) {
    margin-left: 16px;
  }
  @media (min-width: 1280px) {
    margin-left: 16px;
  }
  &.active {
    color: #212121;

    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  color: #9b9faa;
  text-decoration: none;
  padding-top: 20px;
`;

export const Cont = styled.div`
  @media (max-width: 767px) {
    margin-top: 20px;
    display: inline;

    width: auto;
  }
  @media (min-width: 768px) {
    margin-top: 70px;
  }
`;

export const Diary = styled(NavLink)`
  @media (max-width: 767px) {
    width: 60px;
  }
  @media (max-width: 1279px) {
    margin-left: auto;
  }
  @media (min-width: 1280px) {
    margin-left: 20px;
    padding-left: 20px;
    border-left: #9b9faa solid 2px;
  }
  &.active {
    color: #212121;

    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  color: #9b9faa;
  text-decoration: none;
  text-align: right;
`;

export const Calc = styled(NavLink)`
  @media (max-width: 767px) {
    width: 117px;
    height: 12px;
  }
  @media (max-width: 1279px) {
    margin-left: 16px;
  }
  @media (min-width: 1280px) {
    margin-left: 16px;
  }
  &.active {
    color: #212121;

    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  color: #9b9faa;
  text-decoration: none;
  padding-top: 20px;
`;
