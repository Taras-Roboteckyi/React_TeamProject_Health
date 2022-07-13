import styled from 'styled-components';

export const DiaryProductsListStyled = styled.table`
  margin-top: 31px;
  margin-bottom: 60px;
  border-spacing: 8px;
  border-collapse: separate;
  margin-left: auto;
  margin-right: auto;
  /* width: 280px; */

  @media screen and (min-width: 768px) {
    margin-top: 0px;
    margin-bottom: 40px;
    width: 800px;
    border-spacing: 20px;
  }
`;

export const Div = styled.div`
  /* min-width: 350px; */
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    max-width: 740px;
  }
`;
