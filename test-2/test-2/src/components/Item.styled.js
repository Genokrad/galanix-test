import styled from "styled-components";

export const StyledItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1;
  /* width: 300px;
  height: 300px; */
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
