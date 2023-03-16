import { Routes, Route, useLocation } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import Main from "./pages/Main";
import Background from "./ui/Background";
import DueDate from "./pages/DueDate";
import InProgress from "./pages/InProgress";
import Complete from "./pages/Complete";
import Fail from "./pages/Fail";
import { useContext } from "react";
import { StateContext } from "./store/state";
import FirstPage from "./pages/FirstPage";
import Menu from "./pages/Menu";

const App = () => {
  const state = useContext(StateContext);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Background>
              <FirstPage />
            </Background>
          }
        />
        <Route
          path="/main"
          element={
            state.onethingState === "INITIAL" ? (
              <Background>
                <Main />
              </Background>
            ) : state.onethingState === "SUCCESS" ? (
              <Background>
                <Complete />
              </Background>
            ) : (
              <Background>
                <Fail />
              </Background>
            )
          }
        />
        <Route
          path="/duedate"
          element={
            <Background>
              <DueDate />
            </Background>
          }
        />
        <Route
          path="/inprogress"
          element={
            <Background>
              <InProgress />
            </Background>
          }
        />
        <Route
          path="/complete"
          element={
            <Background>
              <Complete />
            </Background>
          }
        />
        <Route
          path="/fail"
          element={
            <Background>
              <Fail />
            </Background>
          }
        />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
};

export default App;
