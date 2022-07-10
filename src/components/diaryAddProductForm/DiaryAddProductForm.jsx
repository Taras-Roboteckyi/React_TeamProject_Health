import React from 'react';
// import { ButtonAdd } from '../button/Button';
import { ProductFormStyled } from './DiaryAddProductForm.styled';
// import { useSelector } from 'react-redux';
// import { getDaySummary } from '../../redux/user/userSelectors';

export const DiaryAddProductForm = ({
  productName,
  productWeight,
  productsVariants,
  handleChange,
  handleSubmit,
}) => {
  const onChange = e => {
    const { name, value } = e.target;
    handleChange({ name, value });
  };

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <ProductFormStyled>
      <form className="productForm-form" onSubmit={onSubmit}>
        <div className="productForm-form__box">
          <label className="productForm-form__label">
            <input
              name="productName"
              type="text"
              list="productSearch"
              className="productForm-form__input"
              value={productName}
              onChange={onChange}
              autoComplete="off"
            />

            <datalist className="datalist" id="productSearch">
              {productsVariants &&
                productsVariants.map(product => (
                  <option value={product.title.ru} key={product._id} />
                ))}
            </datalist>
          </label>

          <label className="productForm-form__label productForm-form__label_size">
            <input
              name="productWeight"
              type="text"
              pattern="[0-9]{1,3}"
              title="Значение веса продукта должно быть от 0 до 999"
              value={productWeight}
              className="productForm-form__input"
              onChange={onChange}
            />
          </label>
          {/* <ButtonAdd /> */}
        </div>
      </form>
    </ProductFormStyled>
  );
};
