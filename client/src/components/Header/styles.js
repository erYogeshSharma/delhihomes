import { makeStyles } from "@mui/styles";
const drawerWidth = "200px";

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
  drawer: {
    width: drawerWidth,
    backgroundColor: "#000000",
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
    },
  },
  paper: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
}));
