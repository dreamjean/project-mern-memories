import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React from "react";

const Input = ({
  name,
  label,
  half,
  autoFocus,
  type,
  onChange,
  onShowPassword,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        {...{ name, label, autoFocus, type, onChange }}
        variant="outlined"
        required
        fullWidth
        InputProps={{
          endAdornment: name === "password" && (
            <InputAdornment position="end">
              <IconButton onClick={onShowPassword}>
                {type === "password" ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default Input;
