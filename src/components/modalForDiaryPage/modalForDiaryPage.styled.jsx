import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* display: flex; */
  padding-top: 40px;
  /* justify-content: center;
  align-items: center; */
  background-color: transparent;

  z-index: 5500;
  svg {
    position: absolute;
    top: 8px;
    left: 15px;
  }
`;

export const ModalStyle = styled.div`
  background-color: ${props => props.theme.colors.$white};
  position: relative;
  height: 100vh;
  padding-top: 80px;
`;
