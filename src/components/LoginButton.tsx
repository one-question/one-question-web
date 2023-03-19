import Button from "../ui/Button";

const LoginButton = () => {
  const URL = `https://accounts.google.com/o/oauth2/auth?client_id=247647504957-gmut84ubqa7f6ccgutl2cg42b9hhp2h1.apps.googleusercontent.com&redirect_uri=http://localhost:3000/main&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;

  return (
    <Button onClick={() => (window.location.href = URL)}>
      <img
        width={20}
        height={20}
        style={{ marginRight: "8px" }}
        src={"/images/signinlogo.png"}
        alt={"로그인 구글 로고"}
      />
      <div>구글 계정으로 로그인하기</div>
    </Button>
  );
};

export default LoginButton;
