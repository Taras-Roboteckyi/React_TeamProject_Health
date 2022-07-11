import React, { useState } from 'react';
import { Container } from '../../components/container';
import { BgImageStyled } from './MainPage.styled';
import { DailyCaloriesForm } from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import { DailyCalorieIntake } from '../../components/DailyCalorieIntake/DailyCalorieIntake';
import Modal from '../../components/modal/Modal';

export const MainPage = () => {
  const [modalData, setModalData] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onFormSubmit = data => {
    const exampleData = {
      calories: 2800,
      products: ['Flour products', 'Milk', 'Red meat', 'Smoked meats'],
    };
    setModalData(exampleData);
    setIsOpenModal(true);
  };

  return (
    <main>
      <BgImageStyled />
      <Container>
        <DailyCaloriesForm onFormSubmit={onFormSubmit} />
        {isOpenModal && (
          <Modal>
            <DailyCalorieIntake data={modalData} />
          </Modal>
        )}
      </Container>
    </main>
  );
};
