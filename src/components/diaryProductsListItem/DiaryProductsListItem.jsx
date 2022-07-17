import React from 'react';
import { useDeleteProductMutation } from '../../redux/rtkSliceForDiaryPage/userDayInfoSlice';
import { IoCloseSharp } from 'react-icons/io5';
import { Tr } from './DiaryProductsListItem.styled';

export const DiaryProductsListItem = ({ product, isCurrentDay }) => {
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();

  const delObj = { date: product.date, productTitle: product.productTitle };

  return (
    <>
      <Tr>
        <td className="widthTitle">{product.productTitle}</td>
        <td className="widthGramGram">{/* {product.weight} */}1000 г</td>
        <td className="widthGramKcal">{product.productCalories} ккал</td>
        <td>
          {isCurrentDay && (
            <button type="button" onClick={() => deleteProduct(delObj)}>
              <IoCloseSharp size={24} fill="inherrit" />
            </button>
          )}
        </td>
      </Tr>
    </>
  );
};
