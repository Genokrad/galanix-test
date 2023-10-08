import { useEffect, useState } from "react";
import {
  StyledCheckbox,
  StyledLi,
  StyledLink,
  StyledText,
} from "./Item.styled";

import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineBorder } from "react-icons/ai";

const Item = ({ item, index, addToFavotite, favorite }) => {
  const [isFavorit, setIsFavorite] = useState(null);

  useEffect(() => {
    let midleRes = [...favorite];
    const inArr = midleRes.find((item) => item === `${index}`);
    setIsFavorite(inArr);
    console.log(favorite);
  }, [favorite]);

  // const favoriteChecker = (index) => {
  //   let midleRes = [...favorite];
  //   const inArr = midleRes.find((item) => item === index);
  // };

  return (
    <StyledLi>
      <StyledText>{index}</StyledText>
      <StyledText>{item.name}</StyledText>
      <StyledLink href={item.web_pages[0]} target="_blank">
        {item.web_pages[0]}
      </StyledLink>

      <StyledCheckbox>
        {!isFavorit ? (
          <AiOutlineBorder onClick={() => addToFavotite(`${index}`)} />
        ) : (
          <AiOutlineCheck onClick={() => addToFavotite(`${index}`)} />
        )}
      </StyledCheckbox>
    </StyledLi>
  );
};

export default Item;
