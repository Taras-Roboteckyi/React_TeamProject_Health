import React from 'react';
// import { ButtonAdd } from '../button/Button';
import { ProductFormStyled, ButtonAdd } from './DiaryAddProductForm.styled';
// import { useSelector } from 'react-redux';
// import { getDaySummary } from '../../redux/user/userSelectors';
import { useWindowWidth } from '@react-hook/window-size';
import { BsPlusLg } from 'react-icons/bs';

export const DiaryAddProductForm = ({
  productName,
  productWeight,
  productsVariants,
  isSearchingProduct,
  handleChange,
  handleSubmit,
}) => {
  const windowWidth = useWindowWidth();

  const onChange = e => {
    const { name, value } = e.target;
    handleChange({ name, value });
  };

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <ProductFormStyled className="productForm-form" onSubmit={onSubmit}>
      <div>
        <input
          name="productName"
          type="text"
          list="productSearch"
          placeholder="Enter product name"
          className="productForm-form__input"
          value={productName}
          onChange={onChange}
          autoComplete="off"
        />
        {isSearchingProduct ? (
          'loading...'
        ) : (
          <datalist className="datalist" id="productSearch">
            {productsVariants &&
              productsVariants.map(product => (
                <option value={product.title.ru} key={product._id} />
              ))}
          </datalist>
        )}

        <input
          autoComplete="off"
          name="productWeight"
          type="text"
          pattern="[0-9]{1,3}"
          placeholder="Grams"
          title="The value of the weight of the product must be from 0 to 999"
          className="productForm-form__input productForm-form__input--width"
          value={productWeight}
          onChange={onChange}
        />
      </div>

      <ButtonAdd type="submit" disabled={!productName || !productWeight}>
        {windowWidth < 768 ? 'Add' : <BsPlusLg size={14} />}
      </ButtonAdd>
    </ProductFormStyled>
  );
};
