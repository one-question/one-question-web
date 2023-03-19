import Input from "../ui/Input";
import { useRef, useEffect } from "react";
import MainLayout from "../components/MainLayout";
const Main = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (window.location.hash.includes("access_token")) {
      getAccessToken();
    }
  }, []);

  const getAccessToken = () => {
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = parsedHash.get("access_token");
    console.log(accessToken);
  };

  return (
    <MainLayout
      icon={{ text: "Q" }}
      title={"당신의 Onething 은 무엇입니까?"}
      button={{ text: "Start", link: "/duedate" }}
    >
      <Input placeholder="입력해보세요" ref={inputRef} />
    </MainLayout>
  );
};

export default Main;
