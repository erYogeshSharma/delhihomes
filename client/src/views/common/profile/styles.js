import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  profile_container: {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
  profile_bottom: {
    display: "flex",

    // alignItems: "center",
    //justifyContent: "center",
    backgroundColor: "#000",
    height: "50px",
  },
  profile_img_container: {
    height: "150px",
    width: "150px",
    borderRadius: "100%",
  },
  profile_img: {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: "100%",
  },
}));

export default useStyles;
