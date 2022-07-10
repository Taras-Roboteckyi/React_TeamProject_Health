import { GoCalendar } from 'react-icons/go';
import { useState } from 'react';
// import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarStyles } from './DiaryPage.styled';
import { useWindowWidth } from '@react-hook/window-size';

import SideBar from '../../components/SideBar/SideBar';
import { Wrapper } from './DiaryPage.styled';

export const DiaryPage = () => {
  const [date, setDate] = useState(new Date());
  const windowWidth = useWindowWidth();
  console.log(windowWidth);

  // const dateIsFormating = format(date, 'dd/MM/yyyy');
  // const isCurrentDay = dateIsFormating === format(new Date(), 'dd/MM/yyyy');

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

        {/* {isCurrentDay && width > 767 && (
        <ProductForm
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
          <ProductForm
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
