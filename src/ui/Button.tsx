import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
interface ButtonProps {
  onClick?: () => void;
  children: string | JSX.Element | string[] | JSX.Element[];
  link?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  if (props.link && props.link?.length > 0) {
    return (
      <Link to={props.link}>
        <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
      </Link>
    );
  } else {
    return (
      <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
    );
  }
};

const StyledButton = styled.button`
  width: fit-content;
  padding: 0px 16px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: transparent;
  cursor: pointer;
  border-style: solid;
`;

export default Button;
