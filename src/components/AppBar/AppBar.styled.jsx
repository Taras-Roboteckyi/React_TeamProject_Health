import styled from 'styled-components';

export const Header = styled.header`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 100%;
  /* background-color: #e6e6e6; */

  position: relative;

  @media (max-width: 1279px) {
    border-bottom: 2px solid #9b9faa;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1279px) {
    padding-top: 20px;
    /* border-bottom: 2px solid #9b9faa; */
    padding-bottom: 20px;
  }
  @media (min-width: 1280px) {
    align-items: flex-end;
  }
  /* justify-content: space-between;
  align-items: center; */
  padding-top: 80px;
  padding-bottom: 150px;

  width: 100%;
`;
