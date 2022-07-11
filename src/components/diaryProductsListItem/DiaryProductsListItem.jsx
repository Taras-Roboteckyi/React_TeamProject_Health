import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { Li } from './DiaryProductsListItem.styled';

export const DiaryProductsListItem = ({
  product,
  handleClick,
  isCurrentDay,
}) => {
  const onClick = () => handleClick(product.id);

  return (
    <>
      <Li>
        <div>
          <p className="widthTitle">
            {/* {product.title} */}111111111111111111
          </p>
          <p className="widthGramGram">{/* {product.weight} */}500 g</p>
          <p className="widthGramKcal">
            {/* {Math.round(product.kcal)} */}1000 kcal
          </p>
        </div>

        {/* {isCurrentDay && ( */}
        <button type="button" onClick={onClick}>
          <IoCloseSharp size={24} fill="#9B9FAA" />
        </button>
        {/* )} */}
      </Li>

      <table>
        <tbody>
          <tr>
            <td>{/* {product.title} */}111111111111111111</td>
            <td>{/* {product.weight} */}500 g</td>
            <td> {/* {Math.round(product.kcal)} */}1000 kcal</td>
            <td>
              {/* {isCurrentDay && ( */}
              <button type="button" onClick={onClick}>
                <IoCloseSharp size={24} fill="#9B9FAA" />
              </button>
              {/* )} */}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
