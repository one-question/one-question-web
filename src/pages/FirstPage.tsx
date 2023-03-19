import { Fade } from "@mui/material";
import LoginButton from "../components/LoginButton";
import Button from "../ui/Button";
import { useState } from "react";
import Background from "../ui/Background";

const FirstPage = () => {
  const [fade, setFade] = useState(true);

  return (
    <Background>
      <Fade in={true} timeout={{ enter: 1500 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <LoginButton />
          <Button link="main">Enter</Button>
        </div>
      </Fade>
    </Background>
  );
};

export default FirstPage;
