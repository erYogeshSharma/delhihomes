import { makeStyles } from "@mui/styles";
import Image from "../../images/buland.jpg";

const useStyles = makeStyles((theme) => ({
  login_page: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    height: "110%",
  },
  toolbar: theme.mixins.toolbar,
  title: {
    display: "flex",
    alignItems: "center",
  },

  login_form: {
    backgroundColor: "#fff",
    border: "2px solid #000",
    width: "500px",
    padding: "20px",
    margin: "auto",

    [theme.breakpoints.down("sm")]: {
      width: "380px",
    },
  },
}));

export default useStyles;
