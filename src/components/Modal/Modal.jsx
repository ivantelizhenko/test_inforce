import { useDispatch } from "react-redux";

import Overlay from "./Overlay";
import ModalWindow from "./ModalWindow";
import { closeModal } from "../../productsSlice";
import Button from "../Button/Button";

function Modal() {
  const dispatch = useDispatch();

  function closeModalHandler(e) {
    dispatch(closeModal());
  }

  return (
    <div>
      <Overlay onClick={closeModalHandler} />
      <ModalWindow>
        <Button onClick={closeModalHandler}>X</Button>
        <p>modal</p>
      </ModalWindow>
    </div>
  );
}

export default Modal;
