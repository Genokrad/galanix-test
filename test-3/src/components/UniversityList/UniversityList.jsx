import PropTypes from "prop-types";

import Item from "../Item";
import { StyledList } from "./UniversityList.styled";

const UniversityList = ({ universitys, addToFavotite, favorite }) => {
  return (
    <StyledList>
      {universitys.map((item, index) => (
        <Item
          key={item.name + index}
          item={item}
          index={index}
          addToFavotite={addToFavotite}
          favorite={favorite}
        />
      ))}
    </StyledList>
  );
};

UniversityList.propTypes = {
  universitys: PropTypes.array.isRequired,
  addToFavotite: PropTypes.func.isRequired,
  favorite: PropTypes.array.isRequired,
};

export default UniversityList;
