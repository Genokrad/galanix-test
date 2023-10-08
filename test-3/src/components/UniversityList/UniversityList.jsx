import Item from "../Item";
import { StyledList } from "./UniversityList.styled";

const UniversityList = ({ universitys }) => {
  return (
    <StyledList>
      {universitys.map((item, index) => (
        <Item key={item.name + index} item={item} index={index} />
      ))}
    </StyledList>
  );
};

export default UniversityList;
