import PropTypes from "prop-types";
import {
  StyleImgWrapper,
  StyledDeletIcon,
  StyledImg,
  StyledItem,
} from "./Item.styled";

const Item = ({ index, image, indexKeeper, deleteImg }) => {
  return (
    <StyledItem>
      <StyleImgWrapper
        onClick={() => indexKeeper(index)}
        borderColor={index === 0 || index % 4 === 0 ? "red" : "gray"}
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
