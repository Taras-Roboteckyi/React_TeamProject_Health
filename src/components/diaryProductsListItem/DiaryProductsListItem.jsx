import React from 'react';
// import { useDeleteProductMutation } from '../../redux/rtkSliceForDiaryPage/userDayInfoSlice';
import { IoCloseSharp } from 'react-icons/io5';
import { Tr } from './DiaryProductsListItem.styled';

export const DiaryProductsListItem = ({ product, isCurrentDay }) => {
  // const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();

  return (
    <>
      <Tr>
        <td className="widthTitle">
          {/* {product.title} */}1111111gfhhhhhhhhhhhhhhhhhhhh111111
        </td>
        <td className="widthGramGram">{/* {product.weight} */}5000 г</td>
        <td className="widthGramKcal">
          {/* {Math.round(product.kcal)} */}1000 ккал
        </td>
        <td>
          {isCurrentDay && (
            <button type="button">
              <IoCloseSharp size={24} fill="#9B9FAA" />
            </button>
          )}
        </td>
      </Tr>
    </>
  );
};

// onClick={() => deleteProduct({ date, product.title})}
