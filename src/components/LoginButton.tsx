import Button from "../ui/Button";

const LoginButton = () => {
  const URL = `https://accounts.google.com/o/oauth2/auth?client_id=247647504957-gmut84ubqa7f6ccgutl2cg42b9hhp2h1.apps.googleusercontent.com&redirect_uri=http://localhost:3000/main&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;

  return (
    <Button onClick={() => (window.location.href = URL)}>
      구글 계정으로 로그인하기
    </Button>
  );
};

const styles = {
  googleStyle: {
    backgroundColor: "#fff",
    border: "1px solid #dadce0",
    color: "#3c4043",
    cursor: "pointer",
    fontSize: "14px",
    height: "40px",
    letterSpacing: "0.25px",
    outline: "none",
    padding: "0 12px",
    width: "auto",
  },
};

export default LoginButton;
