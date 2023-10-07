import PropTypes from "prop-types";
import { StyledImg, StyledItem } from "./Item.styled";

const Item = ({ index, image }) => {
  return (
    <StyledItem borderColor={index === 0 || index % 4 === 0 ? "red" : "gray"}>
      <StyledImg src={image} alt={`Image ${index}`} />
    </StyledItem>
  );
};

Item.propTypes = {
  image: PropTypes.string.isRequired, // Пример типа для image, это может быть другой тип данных
  index: PropTypes.number.isRequired, // Укажите тип данных для index
};

export default Item;
