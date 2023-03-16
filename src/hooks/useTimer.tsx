import dayjs from "dayjs";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../store/state";

interface Timer {
  hour: number;
  minute: number;
  second: number;
}
const useTimer = () => {
  const navigate = useNavigate();
  const state = useContext(StateContext);

  const [timer, setTimer] = useState<Timer | null>(null);
  const dueDate = dayjs(JSON.parse(localStorage.getItem("time") ?? ""));
  useEffect(() => {
    const timerFunc = setInterval(() => {
      const today = dayjs();
      setTimer({
        ...timer,
        hour: dueDate.diff(today, "h"),
        minute: dueDate.diff(today, "m") % 60,
        second: (dueDate.diff(today, "s") % 60) % 60,
      });
    }, 1000);
    if (timer?.hour === 0 && timer?.minute === 0 && timer?.second === 0) {
      clearInterval(timerFunc);
      state.setOnethingState("FAIL");
      // goToFailPage();
    }
    return () => clearInterval(timerFunc);
  });
  const timerFormat = (num: number) => {
    return num < 10 ? `0${num}` : num.toString();
  };
  const goToFailPage = () => {
    navigate("/fail");
  };
  return { timerFormat, timer, dueDate };
};

export default useTimer;
