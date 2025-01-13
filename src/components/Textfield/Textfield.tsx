import {
  InputAdornment,
  OutlinedTextFieldProps,
  styled,
  TextField as MuiTextField,
  Theme,
  Typography,
} from "@mui/material";
import React, { FocusEventHandler, SVGAttributes } from "react";

interface TextFieldCustomProps {
  size?: "medium";
  color?: "primary" | "secondary";
  customVariant?: "default" | "outlined" | "marketplace";
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  label?: string | React.ReactNode;
  value?: string;
  required?: boolean;
  placeholder?: string;
  name?: string;
  type?: "text" | "email" | "password" | "file" | "number";
  error?: boolean;
  helperText?: React.ReactNode;
  multiline?: boolean;
  rows?: number;
  minRows?: number;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLImageElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => void;
}

export type TextFieldProps = Omit<OutlinedTextFieldProps | "size", "color"> & TextFieldCustomProps;

const TextField = ({
  size = "medium",
  color = "primary",
  customVariant = "default",
  endIcon,
  startIcon,
  label,
  value = "",
  placeholder,
  required = false,
  type = "text",
  name,
  error,
  helperText,
  multiline,
  rows,
  minRows,
  disabled,
  onChange,
  onBlur,
  onKeyDown,
  onFocus,
  ...props
}: TextFieldProps) => (
  <StyledTextField
    id="outlined-basic"
    label={label}
    InputProps={{
      endAdornment: endIcon && <InputAdornment position="end">{endIcon}</InputAdornment>,
      startAdornment: startIcon && <InputAdornment position="start">{startIcon}</InputAdornment>,
    }}
    customVariant={customVariant}
    variant="outlined"
    size={size}
    color={color}
    value={value}
    required={required}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
    name={name}
    error={error}
    helperText={helperText}
    multiline={multiline}
    rows={rows}
    disabled={disabled}
    onKeyDown={onKeyDown}
    minRows={minRows}
    onFocus={onFocus}
    {...props}
  />
);

const StyledTextField = styled(MuiTextField, {
  shouldForwardProp: (prop) => prop !== "size" && prop !== "color",
})<{ color: "primary" | "secondary"; size: "medium"; customVariant: "default" | "outlined" | "marketplace" }>(
  ({ theme, color, size, customVariant }) => ({
    ...getCustomColor(theme)[color],
    ...getCustomSize()[size],
    ...getCustomVariant(theme)[customVariant],
  })
);

const getCustomColor = (theme: Theme) => ({
  primary: {
    "& fieldset": {
      backgroundColor: theme.palette.primary.main,
      borderRadius: theme.borderRadius.sm,
      borderWidth: "0px",
      transition: "0.3s",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-root.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "& input.MuiOutlinedInput-input": {
      zIndex: 1,
      color: "black",
    },
    "& label.Mui-focused": {
      transition: "0.3s",
      opacity: 0,
    },
    "& .MuiInputLabel-root": {
      color: "black",
    },
  },

  secondary: {
    "& fieldset": {
      // backgroundColor: theme.palette.textField.secondary.background,
      borderRadius: theme.borderRadius.sm,
      borderWidth: "0px",
      transition: "0.3s",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "& .MuiOutlinedInput-root.Mui-focused fieldset": {
      borderColor: "transparent",
    },
    "& input.MuiOutlinedInput-input": {
      zIndex: 1,
      // color: `${theme.palette.textField.secondary.text} !important`,

      "&::placeholder": {
        // color: `${theme.palette.textField.secondary.text} !important`,
      },
    },
    "& label.Mui-focused": {
      transition: "0.3s",
      opacity: 0,
    },
    "& .MuiInputLabel-root": {
      // color: `${theme.palette.textField.secondary.text} !important`,
    },

    "& svg path": {
      // stroke: theme.palette.textField.secondary.adornment,
    },
  },
});

const getCustomSize = () => ({
  medium: {
    maxWidth: "459px",
    "& .MuiOutlinedInput-root": {
      height: "57px",
    },
  },
});

const getCustomVariant = (theme: Theme) => ({
  default: {
    "& .MuiInputAdornment-root": {
      zIndex: 10,
    },

    ".MuiOutlinedInput-input::placeholder": {
      color: "#666666",
      opacity: 1,
    },

    input: {
      color: "#666666 !important",
    },
  },
  outlined: {
    maxWidth: "100%",
    width: "100%",

    "& .MuiOutlinedInput-notchedOutline": {
      // border: `2px solid ${theme.palette.registerISPO.input.border}`,
      // backgroundColor: theme.palette.registerISPO.input.background,
    },

    "& .MuiInputBase-input": {
      zIndex: 10,
    },

    "& .MuiInputBase-root": {
      height: "auto",
      padding: "12.5px 24px",
    },

    "& .Mui-focused fieldset": {},

    "& .MuiInputBase-input::placeholder": {
      // color: `${theme.palette.registerISPO.input.placeholder} !important`,
      opacity: 1,
    },

    "& .MuiInputAdornment-positionEnd": {
      zIndex: 10,
    },

    "& .MuiInputAdornment-positionStart": {
      zIndex: 10,
      marginRight: "12px",
      "& svg": {
        fill: "#999999",
        width: "20px",
      },
      "& path": {
        fill: "#999999",
      },
    },

    "& .MuiFormHelperText-root": {
      display: "none",
    },

    "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
      // borderColor: `${theme.palette.registerISPO.input.border} !important`,
    },
  },
  marketplace: {
    maxWidth: "100%",
    width: "100%",

    "& .MuiOutlinedInput-notchedOutline": {
      // border: `2px solid #6A546D !important`,
      // border: `2px solid ${theme.palette.marketplacePage.filters.textfield.border} !important`,
      // backgroundColor: theme.palette.registerISPO.input.background,
      // backgroundColor: theme.palette.textField.secondary.background,
    },

    "& .MuiInputBase-input": {
      zIndex: 10,
    },

    "& .MuiInputBase-root": {
      height: "auto",
      // padding: "12.5px 24px",
    },

    "& .Mui-focused fieldset": {
      // border: `2px solid ${theme.palette.registerISPO.input.borderFocused} !important`,
      border: `2px solid #6A546D !important`,
    },

    "& .MuiInputBase-input::placeholder": {
      // color: `${theme.palette.registerISPO.input.placeholder} !important`,
      opacity: 1,
    },

    "& .MuiInputAdornment-positionEnd": {
      zIndex: 10,
    },

    "& .MuiInputAdornment-positionStart": {
      zIndex: 10,
      marginRight: "12px",
      "& svg": {
        // fill: "#999999",
        width: "20px",
      },
      "& path": {
        // fill: "#999999",
      },
    },

    "& .MuiFormHelperText-root": {
      display: "none",
    },

    "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
      // borderColor: `${theme.palette.registerISPO.input.border} !important`,
    },
  },
});

export default TextField;
