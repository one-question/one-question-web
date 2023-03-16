import { Grid, Typography } from "@mui/material";
import Button from "../ui/Button";

interface StateLayoutProps {
  icon: string;
  message: string;
  title: string;
  subTitle: string;
  button: {
    text: string;
    link?: string;
    onClick?: () => void;
  };
}
const StateLayout: React.FC<StateLayoutProps> = ({
  icon,
  message,
  title,
  subTitle,
  button,
}) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <Grid mb={2} item>
        <img src={icon} alt={"상태 레이아웃 아이콘"} />
      </Grid>
      <Grid mb={4} item>
        <Typography variant={"sm"}>{message}</Typography>
      </Grid>
      <Grid item>
        <Typography variant={"lg"}> {title}</Typography>
      </Grid>
      <Grid mb={6} item>
        <Typography variant={"lg"}>{subTitle}</Typography>
      </Grid>
      <Grid item>
        <Button link={button.link ?? ""} onClick={button.onClick}>
          {button.text}
        </Button>
      </Grid>
    </Grid>
  );
};

export default StateLayout;
