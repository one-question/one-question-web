import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
interface ButtonProps {
  onClick?: () => void;
  children: string;
  link?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  if (props.link && props.link?.length > 0) {
    return (
      <Link to={props.link}>
        <StyledButton style={styles.button}>{props.children}</StyledButton>
      </Link>
    );
  } else {
    return (
      <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
    );
  }
};

const StyledButton = styled.button`
  width: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0;
  border-radius: 12px;
  cursor: pointer;
  background: transparent;
`;

const styles = {
  button: {
    width: "fit-content",
    padding: "0px 16px",
    height: "36px",
    cursor: "pointer",
    background: "transparent",
  },
};

export default Button;
