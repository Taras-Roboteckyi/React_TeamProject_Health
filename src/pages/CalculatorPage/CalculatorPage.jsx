import React, { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { Container } from '../../components/container';
import { DailyCaloriesForm } from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import { DailyCalorieIntake } from '../../components/DailyCalorieIntake/DailyCalorieIntake';
import Modal from '../../components/modal/Modal';
import SideBar from '../../components/SideBar/SideBar';
import { StyledWrapper, DivUserMenu } from './CalculatorPage.styled';
import { UserMenu } from '../../components/userMenu';

export const CalculatorPage = () => {
  const [modalData, setModalData] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);

  const windowWidth = useWindowWidth();

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
      {windowWidth < 768 && (
        <DivUserMenu>
          <Container>
            <UserMenu />
          </Container>
        </DivUserMenu>
      )}
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
