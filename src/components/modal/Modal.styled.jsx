import styled from 'styled-components';

export const StyledOverlay = styled.div`
  @media (min-width: 768px) {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(33, 33, 33, 0.12);
  }
`;

export const StyledModal = styled.div`
  overflow: auto;
  position: absolute;
  min-width: 320px;
  margin-top: 150px;
  height: 648px;
  background-color: ${props => props.theme.colors.$white};

  @media (min-width: 768px) {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: 0;
    transform: translate(-50%, -50%);
    width: 672px;
    height: 573px;
    box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
  }
`;
export const StyledCloseButton = styled.button`
  display: none;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  position: absolute;
  border: none;
  cursor: pointer;
  @media only screen and (min-width: 769px) {
    display: block;
    left: 632px;
    top: 20px;
  }
`;
export const StyledCloseMobileButton = styled.button`
  text-align: left;
  padding-left: 20px;
  height: 40px;
  width: 100vw;

  /* min-width: 320px; */
  border: none;
  background: ${props => props.theme.colors.$lightGrey};
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;
