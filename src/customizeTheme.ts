import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: "600",
          "&.Mui-focused": {
            color: "green ",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "green",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "green",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            borderColor: "green !important",
          },
          "&.Mui-error ": {
            borderColor: "red",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "red",
          marginTop: "8px",
          fontSize: "13px",
        },
      },
    },
  },
});
