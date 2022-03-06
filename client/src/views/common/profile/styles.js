import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  profile_img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  profileDetails_container: {
    backgroundColor: theme.palette.text.main,
    padding: "20px",
    width: "500px",
    margin: "auto",
  },
  profile_img_container: {
    width: "150px",
    height: "150px",
    border: "2px solid #ffd300",
  },
}));

export default useStyles;
