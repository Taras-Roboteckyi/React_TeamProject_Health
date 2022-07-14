import React from 'react';
import { Overlay, ModalContent } from './burger.styled';

export const Burger = ({ children }) => {
  return (
    <Overlay>
      <ModalContent>{children}</ModalContent>
    </Overlay>
  );
};
