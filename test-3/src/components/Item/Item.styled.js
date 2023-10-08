import styled from "styled-components";

export const StyledLi = styled.li`
  display: grid;
  grid-template-columns: 10% 40% 25% 25%;
  font-size: 12px;
`;

export const StyledLink = styled.a`
  text-align: end;
  border: 1px solid black;
  padding: 8px;
  display: block;
  overflow: hidden;
  white-space: nowrap; /* Запрет переноса текста на новую строку */
  text-overflow: ellipsis;
`;

export const StyledText = styled.p`
  border: 1px solid black;
  padding: 8px;
`;

export const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  padding: 8px;
`;

export const CheckboxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  align-items: center;
`;

// export const StyledCheckbox
