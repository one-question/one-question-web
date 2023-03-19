import { Grid, Typography } from "@mui/material";
import useTimer from "../hooks/useTimer";
import React, { useEffect } from "react";
import Loading from "../ui/Loading";
import { Link, useLocation } from "react-router-dom";
import Background from "../ui/Background";

const InProgress: React.FC = () => {
  const { timerFormat, timer, dueDate } = useTimer();

  const handleClickCheck = () => {
    localStorage.setItem("complete-date", JSON.stringify(timer));
  };
  const realDate = dueDate.format("YYYY. MM. DD. HH:MM");
  return timer === null ? (
    <Background>
      <Loading />
    </Background>
  ) : (
    <Background>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={8}
      >
        <Grid item mb={-2}>
          <Typography variant={"sm"}>당신의 Onething 은</Typography>
        </Grid>
        <Grid item>
          <Typography variant={"lg"}>오현재 만나기</Typography>
        </Grid>
        <Grid item>
          {timer !== null ? (
            <React.Fragment>
              <Typography variant={"xl"}>
                {timerFormat(timer.hour)} :{" "}
              </Typography>
              <Typography variant={"xl"}>
                {timerFormat(timer.minute)} :{" "}
              </Typography>
              <Typography variant={"xl"}>
                {timerFormat(timer.second)}{" "}
              </Typography>
            </React.Fragment>
          ) : null}
        </Grid>
        <Grid item mb={4}>
          <Typography variant={"xs"}>Due Date {realDate}</Typography>
        </Grid>
        <Grid item>
          <Link onClick={handleClickCheck} to="/complete">
            <img src={"/images/icons/check.svg"} alt={"체크"} />
          </Link>
        </Grid>
      </Grid>
    </Background>
  );
};

export default InProgress;
