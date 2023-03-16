import { Fade } from "@mui/material";
import LoginButton from "../components/LoginButton";
import Button from "../ui/Button";
import { useState } from "react";

const FirstPage = () => {
  const [fade, setFade] = useState(true);

  return (
    <Fade in={true} timeout={{ enter: 1500 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h1>One Question</h1>

        <div id="buttonDiv"></div>
        <LoginButton />
        <Button link="main">Enter</Button>
      </div>
    </Fade>
  );
};

export default FirstPage;
