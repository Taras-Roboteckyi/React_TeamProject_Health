// import React, { useState } from 'react';
import { Container } from '../../components/container';
import { DailyCaloriesForm } from '../../components/dailyCaloriesForm/DailyCaloriesForm';
import { BgImageStyled } from './MainPage.styled';

export const MainPage = () => {
  // const [modalData, setModalData] = useState({});
  // const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <main>
      <BgImageStyled />
      <Container>
        <DailyCaloriesForm />
        {/* <Modal /> */}
      </Container>
    </main>
  );
};
