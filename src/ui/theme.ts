import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Pretendard",
    xs: {
      fontSize: "20px",
      lineHeight: "20px",
      wordBreak: "keep-all",
    },
    sm: {
      fontSize: "24px",
      lineHeight: "24px",
      wordBreak: "keep-all",
    },
    md: {
      fontSize: "28px",
      lineHeight: "28px",
      wordBreak: "keep-all",
    },
    lg: {
      fontSize: "40px",
      lineHeight: "40px",
      wordBreak: "keep-all",
    },
    xl: {
      fontSize: "48px",
      lineHeight: "48px",
      wordBreak: "keep-all",
    },
  },
  spacing: 4,
});

export default theme;
