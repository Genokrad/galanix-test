import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";

export const StyledItem = styled.li`
  position: relative;
  max-height: 300px;
  aspect-ratio: 1;
`;

export const StyleImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1;
  border: 5px solid gray;
  border: ${(props) =>
    props.borderColor ? `5px solid ${props.borderColor}` : "none"};
  &:hover {
    border: 5px solid yellow;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.3s;
  &:hover {
    rotate: 45deg;
  }
`;

export const StyledDeletIcon = styled(AiFillCloseCircle)`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 0px;
  bottom: 0px;
  color: red;
  transition: 0.3s;
  &:hover {
    color: red;
  }
  @media (max-width: 900px) {
    right: 10px;
    bottom: 10px;
    width: 20px;
    height: 20px;
  }
`;
