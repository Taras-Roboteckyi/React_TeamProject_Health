import React from 'react';
import { DiaryProductsListItem } from '../diaryProductsListItem/DiaryProductsListItem';
import { DiaryProductsListStyled, Div } from './DiaryProductsList.styled';

export const DiaryProductsList = ({
  eatenProductsList,
  isCurrentDay,
  handleClick,
}) => {
  return (
    <Div>
      <DiaryProductsListStyled>
        {/* {!eatenProductsList && <p>No data is available for this period.</p>} */}

        <tbody className="EatenProductsList">
          {/* {eatenProductsList.map(product => ( */}
          <DiaryProductsListItem
            // product={product}
            // handleClick={handleClick}
            isCurrentDay={isCurrentDay}
            // key={product.id}
          />
          {/* ))} */}
        </tbody>
      </DiaryProductsListStyled>
    </Div>
  );
};
