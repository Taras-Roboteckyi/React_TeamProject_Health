import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { Container } from '../../components/container';
import { DailyCaloriesForm } from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import { DailyCalorieIntake } from '../../components/DailyCalorieIntake/DailyCalorieIntake';
import Modal from '../../components/modal/Modal';
import SideBar from '../../components/SideBar/SideBar';
import { StyledWrapper, DivUserMenu } from './CalculatorPage.styled';
import { UserMenu } from '../../components/userMenu';
import { authOperations, authSelectors } from '../../redux/authorization';
import AppLoader from '../../components/Loader/Loader';

export const CalculatorPage = () => {
  const [modalData, setModalData] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const reducerSpinner = useSelector(authSelectors.getIsReducerSpinner);
  const windowWidth = useWindowWidth();

  const toggleModal = () => {
    setIsOpenModal(prevValue => !prevValue);
  };

  const onFormSubmit = async data => {
    const result = await dispatch(authOperations.fetchCalculatorUser(data));
    setModalData(result.payload);
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
      {reducerSpinner && <AppLoader />}
    </main>
  );
};
