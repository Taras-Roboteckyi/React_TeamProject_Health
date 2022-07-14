import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { Logo, Con } from './Navigation.styled';

import LogoDesktop from '../../images/logoDesktop.svg';
import LogoTablet from '../../images/logoTablet.svg';
import LogoMobile from '../../images/logoMobile.svg';

const Navigation = () => {
  const windowWidth = useWindowWidth();
  return (
    <Con>
      <Logo to="/">
        {windowWidth >= 1280 && (
          <img src={LogoDesktop} alt="Logo" width={167} height={66} />
        )}
        {windowWidth < 1280 && windowWidth > 768 && (
          <img src={LogoTablet} alt="Logo" width={167} height={66} />
        )}
        {windowWidth < 768 && (
          <img src={LogoMobile} alt="Logo" width={167} height={66} />
        )}
      </Logo>
    </Con>
  );
};

export default Navigation;
