import React from "react";
import { makeStyles } from "@mui/styles";
import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";
import Visiblity from "@mui/icons-material/Visibility";
import VisiblityOff from "@mui/icons-material/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: "#fff",
  },
}));

const Input = ({ error, name, half, handleChange, label, autoFocus, type, handleShowPassword }) => {
  const classes = useStyles();
  return (
    <Grid mb={3} mt={2} item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        error={error ? true : false}
        fullWidth
        helperText={error}
        label={label}
        classes={{ root: classes.inputRoot }}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>{type === "password" ? <Visiblity /> : <VisiblityOff />}</IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;
