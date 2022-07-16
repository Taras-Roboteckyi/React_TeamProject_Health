import React, { useState } from 'react';
import { Container } from '../../components/container';
import { DailyCaloriesForm } from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import { DailyCalorieIntake } from '../../components/DailyCalorieIntake/DailyCalorieIntake';
import Modal from '../../components/modal/Modal';
import SideBar from '../../components/SideBar/SideBar';
import { StyledWrapper } from './CalculatorPage.styled';

export const CalculatorPage = () => {
  const [modalData, setModalData] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(prevValue => !prevValue);
  };

  const onFormSubmit = data => {
    setModalData(data);
    toggleModal();
  };

  return (
    <main>
      <Container>
        <StyledWrapper>
          <DailyCaloriesForm onFormSubmit={onFormSubmit} />
          {isOpenModal && (
            <Modal onClose={toggleModal}>
              <DailyCalorieIntake data={modalData} onClose={toggleModal} />
            </Modal>
          )}
        </StyledWrapper>
      </Container>
      <SideBar />
    </main>
  );
};
