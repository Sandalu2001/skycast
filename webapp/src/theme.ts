"use client";

import { alpha, createTheme, Theme } from "@mui/material/styles";
import "./app.css";
import type {} from "@mui/x-data-grid/themeAugmentation";

export const generateTheme = (mode: "light" | "dark"): Theme => {
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#5E8AFA",
      },
      secondary: {
        main: mode == "light" ? "#F35B90" : "",
      },
      info: {
        main: mode == "light" ? "#A294F9" : "",
      },
      error: {
        main: mode == "light" ? "#D35D6E" : "",
      },
      success: {
        main: mode == "light" ? "#659287" : "",
      },
      warning: {
        main: mode == "light" ? "#EFB495" : "",
      },
      background: {
        default: mode == "light" ? "#FFF" : "#453C67", //Main background color
        paper: mode == "light" ? "#EEF5FF" : "EEF5FF",
      },
    },
    typography: {
      fontFamily: ["Karla", "sans-serif"].join(","),
      fontSize: 10,
      h1: {
        fontWeight: 500,
        fontSize: 65,
      },
      h2: {
        fontWeight: 500,
      },
      h3: {
        fontWeight: 500,
      },
      h4: {
        fontWeight: 500,
      },
      h5: {
        fontWeight: 500,
      },
      body1: {
        fontWeight: 500,
        fontSize: 14,
      },
      body2: {
        fontWeight: 500,
        fontSize: 12,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {},
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-root": {
              size: "small",
            },
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          root: {
            backdropFilter: "blur(5px)",
          },
          paper: {
            width: "90vw",
            borderRadius: 4,
            maxHeight: "90vh",
            "& .MuiDialogTitle-root": {
              fontWeight: "bold",
            },
          },
        },
      },
      MuiDataGrid: {
        styleOverrides: {
          root: {
            fontSize: 13,
            pb: 0,
            width: "100%",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "none",
            color: alpha("#000", 0.55),
            borderRadius: 0,
            "& .MuiDataGrid-cell:focus": {
              outline: "none",
            },
            "& .MuiDataGrid-cell:focus-within": {
              outline: "none",
            },
            ".MuiDataGrid-columnSeparator": {
              display: "none",
            },
            "& .MuiDataGrid-columnHeader:focus": {
              outline: "none",
            },
            "& .MuiDataGrid-columnHeader-within": {
              outline: "none",
            },
            "& .MuiDataGrid-columnHeader:focus-within": {
              outline: "none",
            },
            ".MuiDataGrid-row:focus": {
              borderRadius: 0,
            },
            ".MuiDataGrid-row:focus-within": {
              borderRadius: 0,
            },
            "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer":
              {
                display: "none",
              },
            ".MuiDataGrid-columnHeaderTitle": {
              fontSize: 13,
              fontWeight: "bold",
            },
            "& .MuiDataGrid-columnHeader": {
              background: "none",
              fontWeight: "bold",
              borderRadius: 0,
            },
            "& .MuiDataGrid-columnHeaderRow": {
              background: "none",
              fontWeight: "bold",
              borderRadius: 0,
            },
            "& .MuiDataGrid-columnHeader--withLeftBorder": {
              borderRadius: 10,
            },
            "& .MuiChartsContainer-root": {
              padding: 0,
              margin: 0,
            },
            "& .MuiChartsAxis-root": {
              padding: 0,
            },
            "& .MuiChartsAxis-tickContainer": {
              margin: 0,
            },
          },
          columnHeader: {
            mb: 2,
            minHeight: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        },
      },
    },
  });
};
