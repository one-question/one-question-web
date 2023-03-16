import React, { useEffect } from "react";
import useAnimation from "../../hooks/useAnimation";

import "./SideBar.css";

interface SideBarProps {
  show: boolean;
  onClose: () => void;
}
const SideBar: React.FC<SideBarProps> = ({ show, onClose }) => {
  const { setCloseAnimation, animate, visible } = useAnimation(show);
  useEffect(() => {
    setCloseAnimation();
  }, [setCloseAnimation]);

  if (!animate && !visible) return null;
  return (
    <div onClick={onClose}>
      <div className={show ? "sidebar" : "sidebar close"}>
        <div onClick={onClose}>X</div>
        <div>this is Side Bar</div>
      </div>
      <div className={show ? "overlay" : "overlay close"}></div>
    </div>
  );
};

export default SideBar;
