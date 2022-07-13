import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// export const Link = styled(NavLink)`
//   display: inline-block;
//   color: ${props => props.theme.colors.text};
//   text-decoration: none;
//   font-size: 16px;
//   font-weight: bold;
//   padding: 15px;
//   &.active {
//     color: ${props => props.theme.colors.primary};
//     transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
//   }
//   &:hover,
//   &:focus {
//     color: ${props => props.theme.colors.primary};
//     transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
//   }
// `;

export const Con = styled.nav`
  @media (max-width: 767px) {
    width: 47px;
    height: 44px;
  }
  @media (max-width: 1279px) {
    margin-right: auto;
  }
`;

export const Logo = styled(NavLink)`
  @media (max-width: 767px) {
    height: 44px;
  }
  @media (max-width: 1279px) {
    /*  margin-left: 32px; */
    margin-right: 40px;
  }
`;
