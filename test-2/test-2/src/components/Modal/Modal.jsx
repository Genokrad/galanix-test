import PropTypes from "prop-types";
import { StyledBackdrop, StyledCloseIcon, StyledNodal } from "./Modal.styled";

const Modal = ({ currentImg, closeModal }) => {
  console.log(currentImg);
  return (
    <StyledBackdrop>
      <StyledNodal>
        <StyledCloseIcon onClick={closeModal} />
        <img src={currentImg} alt={currentImg} />
      </StyledNodal>
    </StyledBackdrop>
  );
};

Modal.propTypes = {
  currentImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
