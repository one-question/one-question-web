import { ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { OnethingStateContextProvider } from "./store/onethingStateContext";
import theme from "./ui/theme";
import { addPopStateEvent } from "./utils/addPopStateEvent";
import app from "./utils/initFirebase";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// addPopStateEvent();

console.log("firebase is excuted => ", app);
root.render(
  <OnethingStateContextProvider>
    <ThemeProvider theme={theme}>
      {/* <RouterProvider router={router} /> */}
      <App />
    </ThemeProvider>
  </OnethingStateContextProvider>
);
