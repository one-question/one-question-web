import { useState, useEffect } from "react";

const Test = () => {
  const [test, setTest] = useState(false);
  useEffect(() => {
    setTest(true);
  });
  return <div></div>;
};

export default Test;
