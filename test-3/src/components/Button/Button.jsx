import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

const Button = ({ text, func }) => {
  return <StyledButton onClick={func}>{text}</StyledButton>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Button;
