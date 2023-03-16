import { Typography } from "@mui/material";

const Loading: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant={"lg"}>로딩 중</Typography>
    </div>
  );
};

export default Loading;
