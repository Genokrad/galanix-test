import { StyledButton } from "./Button.styled";

const Button = ({ text, func }) => {
  return <StyledButton onClick={func}>{text}</StyledButton>;
};

export default Button;
