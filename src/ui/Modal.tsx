import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState, useEffect, ReactNode } from "react";
import useAnimation from "../hooks/useAnimation";

interface ModalProps {
  show: boolean;
  children: ReactNode;
  onClose: () => void;
}
const Modal: React.FC<ModalProps> = ({ show, children, onClose }) => {
  const { setCloseAnimation, animate, visible } = useAnimation(show);
  useEffect(() => {
    setCloseAnimation();
  }, [setCloseAnimation]);

  if (!animate && !visible) return null;
  return (
    <ModalContainer
      onClick={onClose}
      className={show ? "" : "modal-container close"}
    >
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
};

const fadeIn = keyframes`
0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }  
`;

const fadeOut = keyframes`
0% {
  opacity: 1;
}

100% {
  opacity: 0;
}
`;
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.2s ease-out forwards;

  &.close {
    animation-name: ${fadeOut};
  }
`;
const ModalContent = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  margin: 15% auto;
  padding: 24px;
`;
export default Modal;
