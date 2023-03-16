import FirstPage from "./pages/FirstPage";

import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Background from "./ui/Background";
import DueDate from "./pages/DueDate";
import InProgress from "./pages/InProgress";
import Complete from "./pages/Complete";
import Fail from "./pages/Fail";
import SideBar from "./ui/SideBar/SideBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Background first>
        <FirstPage />
      </Background>
    ),
  },
  {
    path: "main",
    element: (
      <Background>
        <Main />
      </Background>
    ),
  },
  {
    path: "duedate",
    element: (
      <Background>
        <DueDate />
      </Background>
    ),
  },
  {
    path: "inprogress",
    element: (
      <Background>
        <InProgress />
      </Background>
    ),
  },
  {
    path: "complete",
    element: (
      <Background>
        <Complete />
      </Background>
    ),
  },
  {
    path: "fail",
    element: (
      <Background>
        <Fail />
      </Background>
    ),
  },
  {
    path: "menu",
    element: <SideBar show={true} onClose={() => console.log("ff")} />,
  },
]);

export default router;
