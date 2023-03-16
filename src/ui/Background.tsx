import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";
interface BackgroundProps {
  first?: boolean;
  children?: JSX.Element | undefined;
}
const Background: React.FC<BackgroundProps> = ({ first, children }) => {
  const [show, setShow] = useState(false);
  const closeSideBar = () => {
    setShow(false);
  };
  if (!first) {
    return (
      <StyledBackground>
        {/* <Link to="/menu">
          <StyledImage
            onClick={() => setShow(true)}
            alt="menu"
            src="/images/icons/menu.svg"
          />
        </Link> */}
        <a href="#menu">
          <StyledImage
            onClick={() => setShow(true)}
            alt="menu"
            src="/images/icons/menu.svg"
          />
        </a>
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
