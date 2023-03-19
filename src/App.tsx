import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import DueDate from "./pages/DueDate";
import InProgress from "./pages/InProgress";
import Complete from "./pages/Complete";
import Fail from "./pages/Fail";
import { useContext } from "react";
import { OnethingStateContext } from "./store/onethingStateContext";
import FirstPage from "./pages/FirstPage";
import Menu from "./pages/Menu";

const MainComponent = (): JSX.Element => {
  const state = useContext(OnethingStateContext);
  switch (state.onethingState) {
    case "INITIAL":
      return <Main />;
    case "PROGRESS":
      return <InProgress />;
    case "SUCCESS":
      return <Complete />;
    case "FAIL":
      return <Fail />;
  }
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/duedate" element={<DueDate />} />
        <Route path="/inprogress" element={<InProgress />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/fail" element={<Fail />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
};

export default App;
