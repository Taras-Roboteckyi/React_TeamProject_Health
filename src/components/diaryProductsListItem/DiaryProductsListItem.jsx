import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { Tr } from './DiaryProductsListItem.styled';

export const DiaryProductsListItem = ({
  product,
  handleClick,
  isCurrentDay,
}) => {
  const onClick = () => handleClick(product.id);

  return (
    <>
      <Tr>
        <td className="widthTitle">
          {/* {product.title} */}1111111gfhhhhhhhhhhhhhhhhhhhh111111
        </td>
        <td className="widthGramGram">{/* {product.weight} */}500 g</td>
        <td className="widthGramKcal">
          {/* {Math.round(product.kcal)} */}1000 kcal
        </td>
        <td>
          {isCurrentDay && (
            <button type="button" onClick={onClick}>
              <IoCloseSharp size={24} fill="#9B9FAA" />
            </button>
          )}
        </td>
      </Tr>
    </>
  );
};
