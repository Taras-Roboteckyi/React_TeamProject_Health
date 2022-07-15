import { GoCalendar } from 'react-icons/go';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import DatePicker, { registerLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import { useDebounce } from 'use-debounce';
import 'react-datepicker/dist/react-datepicker.css';
import { fetchProductSearch } from '../../services/fetchProductSeach';
import { useWindowWidth } from '@react-hook/window-size';
import { BsPlusLg } from 'react-icons/bs';
import { UserMenu } from '../../components/userMenu';
import SideBar from '../../components/SideBar/SideBar';
import {
  Wrapper,
  CalendarStyles,
  ButtonOpenModalForm,
  DivUserMenu,
} from './DiaryPage.styled';
import { DiaryAddProductForm } from '../../components/diaryAddProductForm';
import { DiaryProductsList } from '../../components/diaryProductsList/DiaryProductsList';
import { ModalForDiaryPage } from '../../components/modalForDiaryPage/modalForDiaryPage';
import { Container } from '../../components/container/Container';

export const DiaryPage = () => {
  const [date, setDate] = useState(new Date());
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [productName, setProductName] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [debouncedErrorMsg] = useDebounce(errorMsg, 1000);
  const [isSearchingProduct, setIsSearchingProduct] = useState(false);
  const [productsVariants, setProductsVariants] = useState([]);

  const windowWidth = useWindowWidth();
  registerLocale('uk', uk); // для укр мови в календарі

  const isAlreadyInProdVariants = productsVariants.some(
    prod => prod.title.ua === productName,
  );

  const isCurrentDay =
    format(date, 'dd/MM/yyyy') === format(new Date(), 'dd/MM/yyyy');

  const toggleModal = () => {
    setIsOpenModal(prevValue => !prevValue);
  };

  useEffect(() => {
    setErrorMsg('');
    if (!productName) {
      return;
    }
    if (isAlreadyInProdVariants) {
      return;
    }
    setIsSearchingProduct(true);
    fetchProductSearch(productName).then(searchData => {
      typeof searchData === 'string'
        ? setErrorMsg(searchData)
        : setProductsVariants(searchData);
      setIsSearchingProduct(false);
      console.log(searchData);
    });
  }, [isAlreadyInProdVariants, productName]);

  useEffect(() => {
    debouncedErrorMsg && toast.error(debouncedErrorMsg);
    setErrorMsg('');
  }, [debouncedErrorMsg]);

  const handleChange = ({ name, value }) => {
    if (name === 'productWeight' && value > 99999) {
      // setErrorMsg('Значення ваги продукту має бути від 0 до 999г');
      return;
    }
    name === 'productName' && setProductName(value);
    name === 'productWeight' && setProductWeight(value);
  };

  const handleSubmit = () => {
    // const curProd = productsVariants.find(
    //   prod => prod.title.ua === productName,
    // );
    // const productId = curProd._id;
    // const weight = productWeight;
    // const dateIsFormatting = format(date, 'dd/MM/yyyy');
    // dispatch(addEatenProduct({ dateIsFormatting, productId, weight }));
    //  isModalOpen && onHandleCliсk();
  };

  return (
    <main>
      {windowWidth < 768 && (
        <DivUserMenu>
          <UserMenu />
        </DivUserMenu>
      )}
      <Wrapper>
        <Container>
          <CalendarStyles>
            <DatePicker
              locale="uk"
              dateFormat="dd.MM.yyyy"
              selected={date}
              onChange={setDate}
              className={'calendar'}
            />
            <GoCalendar size={20} fill={'#9B9FAA'} className="calendar_icon" />
          </CalendarStyles>
        </Container>

        <Container>
          {isCurrentDay && windowWidth > 767 && (
            <DiaryAddProductForm
              productName={productName}
              productWeight={productWeight}
              productsVariants={productsVariants}
              isSearchingProduct={isSearchingProduct}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}

          <DiaryProductsList isCurrentDay={isCurrentDay} />
        </Container>

        {isCurrentDay && windowWidth < 768 && (
          <ButtonOpenModalForm type="button" onClick={toggleModal}>
            <BsPlusLg size={14} />
          </ButtonOpenModalForm>
        )}

        {windowWidth < 768 && isOpenModal && (
          <ModalForDiaryPage onClose={toggleModal}>
            <DiaryAddProductForm
              productName={productName}
              productWeight={productWeight}
              productsVariants={productsVariants}
              isSearchingProduct={isSearchingProduct}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </ModalForDiaryPage>
        )}

        <SideBar />
      </Wrapper>
    </main>
  );
};
