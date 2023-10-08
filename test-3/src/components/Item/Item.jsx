import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import {
  StyledCheckbox,
  StyledLi,
  StyledLink,
  StyledText,
  CheckboxWrapper,
} from "./Item.styled";

import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineBorder } from "react-icons/ai";

const Item = ({ item, index, addToFavotite, favorite }) => {
  const [isFavorit, setIsFavorite] = useState(null);

  useEffect(() => {
    let midleRes = [...favorite];
    const inArr = midleRes.find((item) => item === `${index}`);
    setIsFavorite(inArr);
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
          <CheckboxWrapper>
            <p>Save to favorite</p>
            <AiOutlineBorder onClick={() => addToFavotite(`${index}`)} />
          </CheckboxWrapper>
        ) : (
          <CheckboxWrapper>
            <p>Remove from favorite</p>
            <AiOutlineCheck onClick={() => addToFavotite(`${index}`)} />
          </CheckboxWrapper>
        )}
      </StyledCheckbox>
    </StyledLi>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  addToFavotite: PropTypes.func.isRequired,
  favorite: PropTypes.array.isRequired,
};

export default Item;
