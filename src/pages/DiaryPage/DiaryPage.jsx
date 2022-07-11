import { GoCalendar } from 'react-icons/go';
import { useState } from 'react';
// import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useWindowWidth } from '@react-hook/window-size';
import { BsPlusLg } from 'react-icons/bs';
import SideBar from '../../components/SideBar/SideBar';
import {
  Wrapper,
  CalendarStyles,
  ButtonOpenModalForm,
} from './DiaryPage.styled';
import { DiaryAddProductForm } from '../../components/diaryAddProductForm';
import { DiaryProductsList } from '../../components/diaryProductsList/DiaryProductsList';
import { ModalForDiaryPage } from '../../components/modalForDiaryPage/modalForDiaryPage';

export const DiaryPage = () => {
  const [date, setDate] = useState(new Date());
  const [isOpenModal, setIsOpenModal] = useState(false);
  const windowWidth = useWindowWidth();

  // const dateIsFormating = format(date, 'dd/MM/yyyy');
  // const isCurrentDay = dateIsFormating === format(new Date(), 'dd/MM/yyyy');

  const toggleModal = () => {
    setIsOpenModal(prevValue => !prevValue);
  };

  return (
    <main>
      <Wrapper>
        <CalendarStyles>
          <DatePicker
            locale="en"
            dateFormat="dd.MM.yyyy"
            selected={date}
            onChange={setDate}
            className={'calendar'}
          />
          <GoCalendar size={20} fill={'#9B9FAA'} className="calendar_icon" />
        </CalendarStyles>
        {windowWidth > 767 && <DiaryAddProductForm />}
        <DiaryProductsList />
        {windowWidth < 768 && (
          <ButtonOpenModalForm type="button" onClick={toggleModal}>
            <BsPlusLg size={14} />
          </ButtonOpenModalForm>
        )}

        {windowWidth < 768 && isOpenModal && (
          <ModalForDiaryPage onClose={toggleModal}>
            <DiaryAddProductForm />
          </ModalForDiaryPage>
        )}

        {/* {isCurrentDay && width > 767 && (
        <DiaryAddProductForm
          productName={productName}
          productWeight={productWeight}
          productsVariants={productsVariants}
          isSearchingProduct={isSearchingProduct}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}

      <EatenProductsList
        eatenProductsList={eatenProductsList}
        isCurrentDay={isCurrentDay}
        handleClick={handleClick}
      />

      <Button
        type="button"
        isValid={true}
        dirty={true}
        onClick={onHandleCliсk}
      ></Button>

      <CalloriesText />

      <Modal hideModal={onHandleCliсk} showModal={onHandleCliсk}>
        <div className="container">
          <DiaryAddProductForm
            productName={productName}
            productWeight={productWeight}
            productsVariants={productsVariants}
            isSearchingProduct={isSearchingProduct}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errorMsg={errorMsg}
          />
        </div>
      </Modal> */}
        <SideBar />
      </Wrapper>
    </main>
  );
};
