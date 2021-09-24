import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
import { Dimmed, ModalContainer } from "./style";

interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
  setContent: Dispatch<SetStateAction<undefined | ReactNode>> | (() => void);
}

const defaultValue = {
  openModal: () => {},
  closeModal: () => {},
  setContent: () => {},
};

export const ModalContext = createContext<ModalContextType>(defaultValue);

interface Props {
  children: ReactNode;
}

const $modalRoot = document.querySelector("#modal-root");

const ModalProvider = ({ children }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>();

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, setContent }}>
      {children}
      {$modalRoot &&
        isOpen &&
        createPortal(
          <>
            <Dimmed onClick={closeModal}></Dimmed>
            <ModalContainer>{content}</ModalContainer>
          </>,
          $modalRoot
        )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
