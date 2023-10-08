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

export default Form;
