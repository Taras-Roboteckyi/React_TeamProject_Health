// import React, { useState } from 'react';
import { Container } from '../../components/container';
import { BgImageStyled } from './MainPage.styled';
import { DailyCaloriesForm } from '../../components/dailyCaloriesForm/DailyCaloriesForm';

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
