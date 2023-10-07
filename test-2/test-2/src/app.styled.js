import styled from "styled-components";

export const Container = styled.div`
  max-width: 80%;
  min-width: 80%;
  padding: 16px;
  margin: 0 auto;
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 32px;
  padding: 16px 0;
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
