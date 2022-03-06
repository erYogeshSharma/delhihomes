import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  sideBar: {
    backgroundColor: theme.palette.text.main,
    width: "230px",
    padding: "10px",
    height: "100vh",
    position: "fixed",
    marginTop: 0,
    top: theme.mixins.toolbar,
  },
  list_item: {
    color: "#ffd300",
    border: "3px solid #ffd300",
    padding: "4px 4px",
    marginBottom: 10,
  },
  list_item_selected: {
    color: theme.palette.grey.main,
    border: "3px solid #7a7a7a ",
  },
  content: {
    paddingLeft: "240px",
    backgroundColor: "#000",
  },
  toolbar: theme.mixins.toolbar,
}));
export default useStyles;
