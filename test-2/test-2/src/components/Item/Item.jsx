import throttle from "lodash/throttle";

import PropTypes from "prop-types";
import {
  StyleImgWrapper,
  StyledDeletIcon,
  StyledImg,
  StyledItem,
} from "./Item.styled";
import { useEffect, useState } from "react";

const Item = ({ index, image, indexKeeper, deleteImg }) => {
  const [divider, setDivider] = useState(1);

  const throttledHandleViewportChange = throttle(() => {
    const viewportWidth = window.innerWidth;

    if (viewportWidth > 900) {
      setDivider(4);
      console.log(viewportWidth);
    } else if (viewportWidth <= 900 && viewportWidth > 500) {
      setDivider(2);
      console.log(viewportWidth);
    } else if (viewportWidth <= 500) {
      setDivider(1);
      console.log(viewportWidth);
    }
  }, 400);

  useEffect(() => {
    throttledHandleViewportChange();
    window.addEventListener("resize", throttledHandleViewportChange);

    return () => {
      window.removeEventListener("resize", throttledHandleViewportChange);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <StyledItem>
      <StyleImgWrapper
        onClick={() => indexKeeper(index)}
        borderColor={index === 0 || index % divider === 0 ? "red" : "gray"}
      >
        <StyledImg src={image} alt={`Image ${index}`} />
      </StyleImgWrapper>
      <StyledDeletIcon onClick={() => deleteImg(index)} />
    </StyledItem>
  );
};

Item.propTypes = {
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  indexKeeper: PropTypes.func.isRequired,
  deleteImg: PropTypes.func.isRequired,
};

export default Item;
