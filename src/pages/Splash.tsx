import { Fade } from "@mui/material";

const Splash = () => {
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
      </div>
    </Fade>
  );
};

export default Splash;
