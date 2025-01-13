import { Theme as MUITheme } from "@mui/material/styles";

export const mutateFontSizeResponsiveness = (theme: MUITheme) => {
  theme.typography.h1 = {
    ...theme.typography.h1,

    [theme.breakpoints.down("xl")]: {
      fontSize: "120px",
    },

    [theme.breakpoints.down("lg")]: {
      fontSize: "90px",
    },

    [theme.breakpoints.down("md")]: {
      fontSize: "77px",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "65px",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "45px",
    },
  };

  theme.typography.h2 = {
    ...theme.typography.h2,

    [theme.breakpoints.down("xl")]: {
      fontSize: "46px",
      lineHeight: "100%",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "42px",
      lineHeight: "100%",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "36px",
      lineHeight: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      lineHeight: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px",
      lineHeight: "100%",
    },
  };

  theme.typography.h3 = {
    ...theme.typography.h3,

    [theme.breakpoints.down("xl")]: {
      fontSize: "37px",
      lineHeight: "45px",
    },

    [theme.breakpoints.down("lg")]: {
      fontSize: "37px",
      lineHeight: "45px",
    },

    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
      lineHeight: "43px",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      lineHeight: "39px",
    },
  };

  theme.typography.h5 = {
    ...theme.typography.h5,

    [theme.breakpoints.down("lg")]: {
      fontSize: "22px",
      lineHeight: "26px",
    },

    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "24px",
    },
  };

  theme.typography.h6 = {
    ...theme.typography.h6,

    fontSize: "14px",
    lineHeight: "13.44px",
    letterSpacing: "-2.5%",

    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "13px",
    },
  };

  theme.typography.caption = {
    ...theme.typography.caption,

    [theme.breakpoints.down("sm")]: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
    },
  };

  theme.typography.subtitle1 = {
    ...theme.typography.subtitle1,
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  };

  theme.typography.cardanoText = {
    ...theme.typography.cardanoText,
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      lineHeight: "normal",
    },
  };

  theme.typography.contactUs = {
    ...theme.typography.contactUs,

    [theme.breakpoints.down("md")]: {
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "normal",
    },
  };

  theme.typography.contactEmail = {
    ...theme.typography.contactEmail,

    [theme.breakpoints.down("md")]: {
      fontWeight: 500,
      fontSize: "17px",
      lineHeight: "100%",
    },
  };

  theme.typography.footerText = {
    ...theme.typography.footerText,

    [theme.breakpoints.down("md")]: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "normal",
    },
  };

  theme.typography.upText = {
    ...theme.typography.upText,

    [theme.breakpoints.down("md")]: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "150%",
    },
  };

  theme.typography.homeSubtitle = {
    ...theme.typography.homeSubtitle,

    [theme.breakpoints.down("md")]: {
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "normal",
    },
  };

  theme.typography.blockTitle = {
    ...theme.typography.blockTitle,

    [theme.breakpoints.down("md")]: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "150%",
    },
  };

  theme.typography.cardTitle = {
    ...theme.typography.cardTitle,

    [theme.breakpoints.down("md")]: {
      fontWeight: 500,
      fontSize: "34px",
      lineHeight: "125%",
      fontFamily: "General Sans Variable, sans-serif",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "22px",
    },
  };

  theme.typography.principlesCardTitle = {
    ...theme.typography.principlesCardTitle,

    [theme.breakpoints.down("lg")]: {
      fontSize: "30px",
    },

    [theme.breakpoints.down("md")]: {
      fontWeight: 500,
      fontSize: "28px",
      lineHeight: "normal",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  };

  return theme;
};
