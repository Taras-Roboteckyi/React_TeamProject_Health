import { useDispatch /* , useSelector */ } from 'react-redux';
import React, { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { Container } from '../../components/container';
import { DailyCaloriesForm } from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import { DailyCalorieIntake } from '../../components/DailyCalorieIntake/DailyCalorieIntake';
import Modal from '../../components/modal/Modal';
import SideBar from '../../components/SideBar/SideBar';
import { StyledWrapper, DivUserMenu } from './CalculatorPage.styled';
import { UserMenu } from '../../components/userMenu';
import { calcSlice } from '../../redux/calculator';

export const CalculatorPage = () => {
  const [modalData, setModalData] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const windowWidth = useWindowWidth();

  const toggleModal = () => {
    setIsOpenModal(prevValue => !prevValue);
  };

  const onFormSubmit = data => {
    setModalData(data);
    toggleModal();
    dispatch(calcSlice.fetchCalculatorUser());
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
