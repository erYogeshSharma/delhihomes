import * as React from "react";
import { Card, Box, Divider } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import TourIcon from "@mui/icons-material/Tour";
import moment from "moment";
import { useNavigate } from "react-router";
import useStyles from "./styles";

// title={property.title}
//           description={property.description}
//           price={property.price}
//           state={property.state}
//           owner={property.user._id}
//           ownerName={property.user.name}
//           photo={property.user.photo[0]}
//           type={property.propertyType}
//           createdAt={property.createdAt}

export default function RecipeReviewCard({ ...props }) {
  const navigate = useNavigate();
  console.log(props);
  const classes = useStyles();

  const about = () => {
    if (props.description.length > 40) {
      return props.description.substr(0, 40) + "....";
    } else {
      return props.description;
    }
  };

  return (
    <Card sx={{ maxWidth: 345, border: "2px solid #ffd300", margin: "10px" }}>
      <CardHeader
        avatar={
          <Avatar onClick={() => navigate(`/${props.owner}`)} on sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.ownerName.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <TourIcon />
          </IconButton>
        }
        title={props.ownerName}
        subheader={moment(props.createdAt).fromNow()}
      />
      <CardMedia component="img" height="194" image={props.photo} alt="property" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {about()}
        </Typography>
        <Typography>
          {props.area} Sq. ft / {props.state}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Box className={classes.ammount}>
          <CurrencyRupeeIcon />
          <Typography>{props.price}</Typography>
        </Box>
      </CardActions>
    </Card>
  );
}
