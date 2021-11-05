import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => {
  return {
    heading: {
      color: "rgba(0,183,255, 1)",
    },
    image: {
      marginLeft: "15px",
    },
    [theme.breakpoints.down("xs")]: {
      mainContainer: { flexDirection: "column-reverse" },
    },
  };
});
