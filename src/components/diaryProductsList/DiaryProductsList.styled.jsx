import styled from 'styled-components';

export const DiaryProductsListStyled = styled.table`
  margin-top: 31px;
  margin-bottom: 60px;
  border-spacing: 8px;
  border-collapse: separate;
  width: 280px;

  @media screen and (min-width: 768px) {
    margin-top: 0px;
    margin-bottom: 40px;
    width: 800px;
    border-spacing: 20px;
  }
`;

export const Div = styled.div`
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
`;
