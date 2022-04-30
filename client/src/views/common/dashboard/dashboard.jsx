import React, { useState } from "react";
import { Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import useStyles from "./styles";
import Profile from "../profile/profile";
import clsx from "clsx";
import CardOne from "../../../components/CardOne/PropertyCard";
import GridOnIcon from "@mui/icons-material/GridOn";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { Icons } from "react-toastify";
const Dashboard = () => {
  const classes = useStyles();

  const cards = [0, 1, 2, 3, 4];
  const property = {
    name: "Shrutz farm",
    description: "Shurtz Farm, In the family from 2000 years, need to sell it to move into a new placce",
    price: "2000",
    type: "sell",
    imageUrl: "https://picsum.photos/500/300",
    createAt: Date.now(),
  };
  return (
    <Box>
      <Grid p={1}>
        <Profile />
      </Grid>
      <Grid sx={{ backgroundColor: "#fff" }} m={1} p={1} display="flex" alignItems="center" justifyContent="center" gap={2}>
        <Grid gap="5px" display="flex" alignItems="center">
          <GridOnIcon />
          <Typography variant="body1thin">Properties</Typography>
        </Grid>
        <Grid display="flex" gap="5px" alignItems="center">
          <ReviewsIcon />
          <Typography variant="body1thin">Reviews</Typography>
        </Grid>
      </Grid>

      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
        {cards.map((card, index) => (
          <Grid p={1} key={index} item lg={3}>
            <CardOne name={property.name} desc={property.description} price={property.price} createAt={property.createAt} photo={property.imageUrl} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
