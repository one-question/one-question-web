import { createContext, useState } from "react";

const LoginContext = createContext({
  value: "Ff",
});

const LoginContextProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [state, setState] = useState("ss");

  const contextValue = {
    value: state,
  };
  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
