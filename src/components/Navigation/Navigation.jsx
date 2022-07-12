import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { Logo } from './Navigation.styled';

import LogoDesktop from '../../images/LogoDesktop.svg';
import LogoMobile from '../../images/logoMobile.svg';

const Navigation = () => {
  const windowWidth = useWindowWidth();
  return (
    <nav>
      <Logo to="/">
        {windowWidth >= 768 && <img src={LogoDesktop} alt="Logo" />}
        {windowWidth < 768 && <img src={LogoMobile} alt="Logo" />}
      </Logo>
    </nav>
  );
};

export default Navigation;
