import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React from "react";

interface Props {
  half?: boolean;
  name: string;
  label: string;
  autoFocus?: boolean;
  type?: string;
  handleChange: () => void;
  handleShowPassword?: () => void;
}

const Input = ({
  half,
  name,
  label,
  autoFocus,
  type,
  handleChange,
  handleShowPassword,
}: Props) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === "password" &&
          ({
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === "password" ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          } as any)
        }
      />
    </Grid>
  );
};

export default Input;
