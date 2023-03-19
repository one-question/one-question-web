import styled from "@emotion/styled";
import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import useRedirect from "../hooks/useRedirect";

interface BackgroundProps {
  first?: boolean;
  children?: JSX.Element | undefined;
}
const Background: React.FC<BackgroundProps> = ({ first, children }) => {
  const { redirectFunc } = useRedirect();
  redirectFunc();

  const arr = window.location.href.split("/");
  localStorage.setItem("currentUrl", arr[arr.length - 1]);
  if (!first) {
    return (
      <StyledBackground>
        <Link to="/menu">
          <StyledImage alt="menu" src="/images/icons/menu.svg" />
        </Link>

        {children}
      </StyledBackground>
    );
  }
  return <StyledBackground>{children}</StyledBackground>;
};

const StyledBackground = styled.div`
  width: 100%;
  background-color: white;
  height: 100vh;
  background-repeat: round;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  @media (min-width: 500px) {
    /* background: url("../../../public/images/bg.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover; */
    width: 39%;
    min-width: 500px;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  right: 28px;
  top: 28px;
  cursor: pointer;
`;

export default Background;
