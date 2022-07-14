import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;

  background-color: #264061;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  padding: 12px;
  color: white;
`;

export const Button = styled.button`
  width: 20px;
  height: 15px;
  margin-left: 200px;
  margin-right: 20px;
  background-color: #fff;
  border: 0px;
`;
