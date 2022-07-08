import styled from 'styled-components';

export const ContainerUserMenuStyled = styled.div`
  display: flex;
  align-items: center;

  height: 40px;
  padding: 0 15px;

  /* @media screen and (max-width: 767px) {
    background-color: var(--secondary-bg-colour);
  }

  @media screen and (min-width: 768px) {
    margin-right: 35px;
  }

  @media screen and (min-width: 1280px) {
    align-items: flex-end;
    margin-left: auto;
    margin-right: 0;
  } */
`;

export const ContainerTextStyled = styled.div`
  justify-content: flex-end;
  margin-left: auto;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;

  p {
    display: inline-block;
    margin: 0;
    padding: 0 15px 0 0;

    border-right: 2px solid red;
  }

  button {
    border: none;
    outline: none;
    background-color: Transparent;
    padding: 0 0 0 15px;
    cursor: pointer;

    color: var(--not-bold-text-colour);

    &:hover {
      color: var(--not-bold-text-colour);
    }
  }
`;
