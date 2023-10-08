import { StyledLi, StyledLink, StyledText } from "./Item.styled";

const Item = ({ item, index }) => {
  return (
    <StyledLi>
      <StyledText>{index}</StyledText>
      <StyledText>{item.name}</StyledText>
      <StyledLink href={item.web_pages[0]} target="_blank">
        {item.web_pages[0]}
      </StyledLink>
    </StyledLi>
  );
};

export default Item;
