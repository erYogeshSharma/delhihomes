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

const Input = ({ error, value, name, half, onChange, label, autoFocus, type, handleShowPassword, required }) => {
  const classes = useStyles();
  return (
    <Grid mb={2} mt={1}>
      <TextField
        name={name}
        onChange={onChange}
        variant="outlined"
        required={required}
        value={value}
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
