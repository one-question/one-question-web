import { ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import router from "./router";
import { StateContextProvider } from "./store/state";
import theme from "./ui/theme";
import app from "./utils/initFirebase";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
console.log("firebase is excuted => ", app);
root.render(
  <StateContextProvider>
    <ThemeProvider theme={theme}>
      {/* <RouterProvider router={router} /> */}
      <App />
    </ThemeProvider>
  </StateContextProvider>
);
