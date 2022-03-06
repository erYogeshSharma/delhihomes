import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  text: {
    color: "#ffd300",
  },
  profile_image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  img_container: {
    border: "2px solid #000",
    maxHeight: "150px",
    maxWidth: "150px",
    ratio: 1 / 1,
  },
  edit_form_container: {
    width: "50vw",
    margin: "auto",
    backgroundColor: "#fff",
    padding: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },
  edit_page: {
    paddingTop: "20px",
    backgroundColor: theme.palette.text.main,
    height: "100vh",
  },
}));

export default useStyles;
