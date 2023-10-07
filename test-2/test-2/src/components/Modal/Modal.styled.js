import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000090;
`;

export const StyledNodal = styled.div`
  background-color: white;
  position: relative;
  max-width: 80%;

  /* width: 100%;
  height: 100%; */
  /* width: 60vw; */
  /* aspect-ratio: 1; */
`;

export const StyledCloseIcon = styled(AiFillCloseCircle)`
  position: absolute;
  width: 40px;
  height: 40px;
  right: -60px;
  top: -60px;
  color: white;
  transition: 0.3s;
  &:hover {
    color: red;
  }
  @media (max-width: 900px) {
    right: 10px;
    top: 10px;
    width: 20px;
    height: 20px;
  }
`;
