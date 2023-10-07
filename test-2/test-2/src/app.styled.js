import styled from "styled-components";

export const Container = styled.div`
  max-width: 80%;
  min-width: 80%;
  padding: 32px 16px;
  margin: 0 auto;
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  padding: 16px 0;
  margin-bottom: 24px;
  justify-content: center;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, auto);
    gap: 24px;
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
    gap: 16px;
  }
`;

export const StyledDescription = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const StyledReset = styled.button`
  display: block;
  margin: 0 auto;
  padding: 16px;
  border-radius: 16px;
  font-size: 24px;
  &:hover {
    background-color: red;
  }
`;
