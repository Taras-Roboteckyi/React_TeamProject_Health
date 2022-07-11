import React, { useState } from 'react';
import { Container } from '../../components/container';
import { BgImageStyled } from './MainPage.styled';
import { DailyCaloriesForm } from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import Modal from '../../components/modal/Modal';

export const MainPage = () => {
  // const [modalData, setModalData] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  console.log(isOpenModal);

  const toggleModal = () => {
    setIsOpenModal(prevValue => !prevValue);
  };

  return (
    <main>
      <BgImageStyled />
      <Container>
        <DailyCaloriesForm onOpen={toggleModal} />
        {isOpenModal && (
          <Modal onClose={toggleModal}>{/* <ModalText /> */}</Modal>
        )}
      </Container>
    </main>
  );
};
