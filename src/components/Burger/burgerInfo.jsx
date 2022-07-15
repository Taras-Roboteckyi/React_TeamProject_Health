import React from 'react';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import { Burger } from './burger';
import { Button } from './burger.styled';
import { useWindowWidth } from '@react-hook/window-size';
import AuthNavLogined from '../AuthNav/AuthNavLogined';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

const modalRoot = document.querySelector('#modal-root');

export const BurgerInfo = () => {
  const windowWidth = useWindowWidth();

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return createPortal(
    <>
      <Button type="button" onClick={toggleModal}>
        {showModal ? <AiOutlineClose /> : <AiOutlineMenu />}
      </Button>
      {showModal && <Burger>{windowWidth <= 768 && <AuthNavLogined />}</Burger>}
    </>,
    modalRoot,
  );
};
