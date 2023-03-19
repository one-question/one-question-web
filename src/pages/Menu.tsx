import { Grid, Typography } from "@mui/material";
const Menu = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={8}
      height={"100%"}
    >
      <Grid item>
        <Typography variant={"lg"}>이종원 님</Typography>
      </Grid>
      <Grid item>프로필</Grid>
      <Grid item>결제 정보</Grid>
    </Grid>
  );
};

export default Menu;
