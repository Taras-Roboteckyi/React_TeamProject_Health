import styled from 'styled-components';

export const Header = styled.header`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 100%;
  /* background-color: #e6e6e6; */

  position: relative;
`;
export const Wrapper = styled.div`
  display: flex;
  @media (max-width: 1279px) {
    padding-top: 37px;
    border-bottom: 2px solid #9b9faa;
    padding-bottom: 32px;
  }
  /* justify-content: space-between;
  align-items: center; */
  padding-top: 80px;
  padding-bottom: 150px;

  width: 100%;

`;
