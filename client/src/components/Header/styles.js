import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  nav_btn: {
    color: theme.palette.text.main,
    margin: 4,
    fontSize: 16,
    "&:hover": {
      color: "grey",
      borderRadius: 0,
      borderBottom: "4px solid #000",
    },
  },
  header: {
    padding: 0,
  },
  appbar_root: {
    padding: 0,
    backgroundColor: "#ffd2308",
  },
}));
