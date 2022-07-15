import React, { useState } from 'react';
import { Container } from '../../components/container';
import { BgImageStyled } from './MainPage.styled';
import { DailyCaloriesForm } from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import { DailyCalorieIntake } from '../../components/DailyCalorieIntake/DailyCalorieIntake';
import Modal from '../../components/modal/Modal';

export const MainPage = () => {
  const [modalData, setModalData] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(prevValue => !prevValue);
  };

  const onFormSubmit = data => {
    const exampleData = {
      calories: 2800,
      products: ['Борошняні вироби', 'Молоко', "Червоне м'ясо", 'Копченості'],
    };
    setModalData(exampleData);
    toggleModal();
  };

  return (
    <main>
      <BgImageStyled />
      <Container>
        <DailyCaloriesForm onFormSubmit={onFormSubmit} />
        {isOpenModal && (
          <Modal onClose={toggleModal}>
            <DailyCalorieIntake data={modalData} onClose={toggleModal} />
          </Modal>
        )}
      </Container>
    </main>
  );
};
