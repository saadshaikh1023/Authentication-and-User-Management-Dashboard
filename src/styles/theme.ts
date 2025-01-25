"use client"

import { createTheme, ThemeOptions } from "@mui/material/styles"
import { gridClasses } from "@mui/x-data-grid"
import type { Theme } from "@mui/material/styles"

const themeOptions: ThemeOptions = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#6b6b6b #2b2b2b",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#2b2b2b",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#6b6b6b",
            minHeight: 24,
            border: "3px solid #2b2b2b",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: "#959595",
          },
        },
      },
    },
  },
}

const theme = createTheme(themeOptions)

// Extend the theme components
const extendedTheme = createTheme(theme, {
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          [`& .${gridClasses.columnHeader}`]: {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
            fontWeight: theme.typography.fontWeightBold,
          },
          [`& .${gridClasses.cell}`]: {
            borderBottom: `1px solid ${theme.palette.divider}`,
          },
        },
      },
    },
  },
})

export default extendedTheme