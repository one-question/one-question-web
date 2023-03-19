import { useContext } from "react";
import { OnethingStateContext } from "../store/onethingStateContext";
import { useLocation } from "react-router-dom";

export const useRedirect = () => {
  const { pathname } = useLocation();
  const { onethingState } = useContext(OnethingStateContext);

  const redirectFunc = () => {
    console.log(onethingState);
    switch (onethingState) {
      case "PROGRESS":
        console.log(pathname);
        if (pathname !== "/inprogress") {
          window.location.replace("/inprogress");
        }
        // return redirect("/inprogress");
        break;
      case "SUCCESS":
        // return redirect("/complete");
        window.location.replace("/complete");
        break;
      case "FAIL":
        // return redirect("/fail");
        window.location.replace("/fail");
        break;
    }
  };

  return { redirectFunc };
};

export default useRedirect;
