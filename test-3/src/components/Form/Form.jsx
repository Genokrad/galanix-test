import PropTypes from "prop-types";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from "./Form.styled";

const Form = ({ formSubmit, inputSetter, inputCity }) => {
  return (
    <StyledForm onSubmit={formSubmit} action="">
      <StyledLabel htmlFor="">Enter the city</StyledLabel>
      <StyledInput
        placeholder="Enter a country name"
        onChange={inputSetter}
        value={inputCity}
        type="text"
      />
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

Form.propTypes = {
  inputCity: PropTypes.string.isRequired,
  formSubmit: PropTypes.func.isRequired,
  inputSetter: PropTypes.func.isRequired,
};

export default Form;
