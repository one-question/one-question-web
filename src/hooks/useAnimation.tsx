import { useState, useEffect } from "react";

const useAnimation = (show: boolean) => {
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(false);
  const setCloseAnimation = () => {
    setVisible(show);

    if (visible && !show) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 200);
    }
    return () => {
      setVisible(false);
    };
  };

  return { setCloseAnimation, animate, visible };
};

export default useAnimation;
