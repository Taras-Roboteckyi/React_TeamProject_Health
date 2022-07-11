import React from 'react';

import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/authorization';

import { Link, Logo } from './Navigation.styled';

import LogoDesktop from '../../images/LogoDesktop.svg';
// import LogoMobile from '../../images/logoMobile.svg';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <Logo to="/">
        <img src={LogoDesktop} alt="Logo" />
      </Logo>

      {isLoggedIn /* true */ && <Link to="diary">DiaryPage</Link>}
    </nav>
  );
};

export default Navigation;
