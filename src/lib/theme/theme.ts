import { CSSProperties } from "react";
import { PaletteColor, PaletteMode } from "@mui/material";
import { typography } from "./typography";
import { borderRadius } from "./borders";
import { breakpoints } from "./breakpoints";
import { lightPalette } from "./lightPalette";
import { darkPalette } from "./darkPalette";

export const getTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light" ? lightPalette : darkPalette),
  },
  breakpoints,
  borderRadius,
  typography,
});

declare module "@mui/material/Typography" {
  export interface TypographyPropsVariantOverrides {
    multipleDropdownValue: true;
    navText: true;
    contactUs: true;
    contactEmail: true;
    footerText: true;
    upText: true;
    navMenuLink: true;
    cardanoText: true;
    homeSubtitle: true;
    blockTitle: true;
    cardTitle: true;
    cardTopTitle: true;
    principlesCardTitle: true;
    principlesCardSubtitle: true;
  }
}

declare module "@mui/material/styles" {
  export interface ThemeOptions {
    borderRadius: {
      xxs: string;
      xs: string;
      sm: string;
      ms: string;
      md: string;
      lg: string;
    };
  }
  export interface Theme {
    borderRadius: {
      xxs: string;
      xs: string;
      sm: string;
      ms: string;
      md: string;
      lg: string;
    };
  }
  export interface TypographyVariants {
    multipleDropdownValue: CSSProperties;
    navText: CSSProperties;
    contactUs: CSSProperties;
    contactEmail: CSSProperties;
    footerText: CSSProperties;
    upText: CSSProperties;
    navMenuLink: CSSProperties;
    cardanoText: CSSProperties;
    homeSubtitle: CSSProperties;
    blockTitle: CSSProperties;
    cardTitle: CSSProperties;
    cardTopTitle: CSSProperties;
    principlesCardTitle: CSSProperties;
    principlesCardSubtitle: CSSProperties;
  }

  export interface TypographyVariantsOptions {
    multipleDropdownValue: CSSProperties;
    navText: CSSProperties;
    contactUs: CSSProperties;
    contactEmail: CSSProperties;
    footerText: CSSProperties;
    upText: CSSProperties;
    navMenuLink: CSSProperties;
    cardanoText: CSSProperties;
    homeSubtitle: CSSProperties;
    blockTitle: CSSProperties;
    cardTitle: CSSProperties;
    cardTopTitle: CSSProperties;
    principlesCardTitle: CSSProperties;
    principlesCardSubtitle: CSSProperties;
  }

  interface AdditionalTextColorProps {
    darkContrast?: string;
    secondary?: string;
    dark?: string;
    main?: string;
    light?: string;
    contrastText?: string;
    lightGray?: string;
  }

  interface CustomPalette {
    shade: any;
    textColor: PaletteColor | AdditionalTextColorProps;
    social: any;
    checkbox: any;
    chip: any;
    button: any;
    tooltip: any;
  }

  export interface Palette extends CustomPalette {}
  export interface PaletteOptions extends CustomPalette {}
}
