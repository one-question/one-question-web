import React from "react";
import styled from "@emotion/styled";

const Input: React.FC<{
  placeholder?: string;
  ref: React.Ref<HTMLInputElement>;
}> = React.forwardRef((props, ref) => {
  return <StyledInput placeholder={props.placeholder} ref={ref} />;
});
const StyledInput = styled.input`
  border: none;
  font-size: 24px;
  border-bottom: 2px solid black;
  background: transparent;
  :focus {
    outline: none;
  }
  padding: 0;
`;
export default Input;
