import { createContext } from "react";
import { useState } from "react";
const INITIAL = "INITIAL";
const PROGRESS = "PROGRESS";
const SUCCESS = "SUCCESS";
const FAIL = "FAIL";

type Onething = typeof INITIAL | typeof PROGRESS | typeof SUCCESS | typeof FAIL;
interface StateType {
  onethingState: Onething;
  setOnethingState: (type: Onething) => void;
}
const initialValue: StateType = {
  onethingState: "INITIAL",
  setOnethingState: () => {},
};
const StateContext = createContext(initialValue);

const StateContextProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [state, setState] = useState<Onething>("INITIAL");
  const setOnethingState = (type: Onething) => {
    setState(type);
  };

  const contextValue = {
    onethingState: state,
    setOnethingState: setOnethingState,
  };
  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateContextProvider };
