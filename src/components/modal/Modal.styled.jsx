import styled from '@emotion/styled'
import { AiOutlineClose } from "react-icons/ai";

export const StyledOverlay = styled.div`
position: fixed;
  width: 100vw;
  height: 100vh;
  top: 120px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(${props => props.theme.options.dropShadow});
  z-index: 1000;
  overflow: auto;
   @media (min-width: 768px) {
    top: 0;
    background-color: rgba(33, 33, 33, 0.12);
  }
  `

export const StyledModal = styled.div`
 position: absolute;
  top: 0;
  width: 320px;
  height: 599px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.$white};
     @media (min-width: 768px) {
    top: 220px;
    width: 594px;
    height: 580px;
  }
      @media (min-width: 1280px) {
    margin-top: 120px;
    top: 10px;
    width: 690px;
    height: 580px;
  }
 `
export const StyledButton = styled.button`
background-image: AiOutlineClose;
display: block;
position: absolute;
top: 24px;
right: 24px;
background-color: ${props => props.theme.colors.$white};
width: 12px;
height: 12px;
background-repeat: no-repeat;
border: none;
background-color: transparent;`



