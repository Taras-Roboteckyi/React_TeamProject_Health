import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { Logo, Con } from './Navigation.styled';

import LogoDesktop from '../../images/LogoDesktop.svg';
import LogoMobile from '../../images/logoMobile.svg';

const Navigation = () => {
  const windowWidth = useWindowWidth();
  return (
    <Con>
      <Logo to="/">
        {windowWidth >= 768 && (
          <img src={LogoDesktop} alt="Logo" width={167} height={66} />
        )}
        {windowWidth < 768 && <img src={LogoMobile} alt="Logo" />}
      </Logo>
    </Con>
  );
};

export default Navigation;
