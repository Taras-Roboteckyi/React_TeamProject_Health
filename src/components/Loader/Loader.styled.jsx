import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  /*  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
  height: 20vmin;
  pointer-events: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;
