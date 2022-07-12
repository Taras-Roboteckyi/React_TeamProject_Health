import { GoCalendar } from 'react-icons/go';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { fetchProductSearch } from '../../services/fetchProductSeach';
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
  const [productName, setProductName] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSearchingProduct, setIsSearchingProduct] = useState(false);
  const [productsVariants, setProductsVariants] = useState([]);

  const windowWidth = useWindowWidth();

  const isCurrentDay =
    format(date, 'dd/MM/yyyy') === format(new Date(), 'dd/MM/yyyy');

  const toggleModal = () => {
    setIsOpenModal(prevValue => !prevValue);
  };

  useEffect(() => {
    setErrorMsg('');
    if (!productName) return;
    const isAlreadyInProdVariants = productsVariants.some(
      prod => prod.title.ru === productName,
    );
    if (isAlreadyInProdVariants) return;
    setIsSearchingProduct(true);
    fetchProductSearch(productName).then(searchData => {
      typeof searchData === 'string'
        ? setErrorMsg(searchData)
        : setProductsVariants(searchData);
      setIsSearchingProduct(false);
    });
  }, [productName, productsVariants]);

  useEffect(() => {
    errorMsg && toast.error(errorMsg);
    setErrorMsg('');
  }, [errorMsg]);

  const handleChange = ({ name, value }) => {
    if (name === 'productWeight' && value > 999) {
      setErrorMsg('Product weight value must be between 0 and 999');
      return;
    }
    name === 'productName' && setProductName(value);
    name === 'productWeight' && setProductWeight(value);
  };

  const handleSubmit = () => {
    const curProd = productsVariants.find(
      prod => prod.title.ru === productName,
    );
    if (!curProd) {
      setErrorMsg('Укажите название продукта.');
      return;
    }
    if (!productWeight) {
      setErrorMsg('Укажите вес продукта.');
      return;
    }

    // const productId = curProd._id;
    // const weight = productWeight;
    // const dateIsFormatting = format(date, 'dd/MM/yyyy');
    // dispatch(addEatenProduct({ dateIsFormatting, productId, weight }));
    //  isModalOpen && onHandleCliсk();
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

        {windowWidth < 768 && (
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
