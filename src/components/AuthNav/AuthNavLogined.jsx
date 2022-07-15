import React from 'react';

import { Cont, Diary, Calc } from './AuthNav.styled';

export default function AuthNavLogined({ onClick }) {
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClick();
    }
  };

  return (
    <Cont>
      <Diary to="diary" onClick={handleBackdropClick}>
        Щоденник
      </Diary>
      <Calc to="calculator" onClick={handleBackdropClick}>
        Калькулятор
      </Calc>
    </Cont>
  );
}
