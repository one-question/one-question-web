import { Grid, Typography } from "@mui/material";
import Button from "../ui/Button";

interface MainLayoutProps {
  icon: {
    text?: string;
    src?: string;
  };
  title: string;
  children: React.ReactNode;
  button: {
    text: string;
    link?: string;
    onClick?: () => void;
  };
}

const MainLayout: React.FC<MainLayoutProps> = ({
  icon,
  title,
  children,
  button,
}) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={12}
    >
      <Grid item mb={-6}>
        {icon.text ? (
          <Typography variant={"xl"}>{icon.text}</Typography>
        ) : (
          <img src={icon.src} alt={"메인 레이아웃 아이콘"} />
        )}
      </Grid>
      <Grid textAlign={"center"} item>
        <Typography variant={"md"}>{title}</Typography>
      </Grid>
      <Grid item>{children}</Grid>
      <Grid item>
        <Button link={button.link ?? ""} onClick={button.onClick}>
          {button.text}
        </Button>
      </Grid>
    </Grid>
  );
};

export default MainLayout;
