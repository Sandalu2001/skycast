import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  alpha,
} from "@mui/material";
import React, { JSX } from "react";

export interface CustomTextFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: React.ReactNode;
  startIcon?: JSX.Element;
  endIconAction?: () => void;
  endIcon?: JSX.Element;
  id: string;
  type: React.HTMLInputTypeAttribute | undefined;
}

const CustomTextField = ({
  label,
  name,
  value,
  helperText,
  error,
  id,
  type,
  onChange,
  startIcon,
  endIcon,
}: CustomTextFieldProps) => {
  return (
    <Stack gap={2}>
      <TextField
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
        id={id}
        type={type}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            p: 0,
            background: (theme) => alpha(theme.palette.grey[500], 0.1),
            border: "none",
          },
          "& legend": { display: "flex" },
          "& .MuiInputLabel-root": {
            display: "flex",
          },
        }}
        InputProps={{
          sx: {
            borderRadius: 5,
          },
          startAdornment: (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                color="primary"
                sx={{
                  background: (theme) => alpha(theme.palette.primary.main, 0.1),
                  ":hover": {
                    transitionDelay: "0.2s",
                    background: (theme) =>
                      alpha(theme.palette.primary.main, 0.2),
                  },
                }}
              >
                {endIcon}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

export default CustomTextField;
