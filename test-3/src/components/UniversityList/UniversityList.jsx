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

export default UniversityList;
