import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  conatiner: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    flexGrow: 1,
    alignItems:"center",
    // backgroundColor:"#322"
    [theme.breakpoints.down("md")]: {
    //   backgroundColor: "#ee2657",
      flexDirection: "column",
    },
  },
}));

export default useStyles;
