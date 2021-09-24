import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 400px;
  min-height: 600px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 15px;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

export const Dimmed = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;
