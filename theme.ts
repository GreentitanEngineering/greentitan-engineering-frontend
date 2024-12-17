"use client";
import { createTheme } from "@mui/material/styles";
import { IBM_Plex_Sans_Thai } from "next/font/google";

export const ibm_font = IBM_Plex_Sans_Thai({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["thai"],
  display: "auto",
  variable: "--font-ibm-font",
});

const mobileScreen = "@media (max-width:820px)";
const verySmallMobileScreen = "@media (max-width:360px)";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0E8742",
      light: "#B7E9CD",
      dark: "#052E2D",
    },
    // secondary: {
    //   main: "#3fb45f",
    //   light: "#c7e8ce",
    //   dark: "#2c9349",
    // },
    text: {
      primary: "#023332",
      secondary: "#6C737F",
      disabled: "#9DA4AE",
    },
    // error: {
    //   main: "#FF685F",
    //   light: "#FFE2E3",
    //   dark: "#D9210B",
    // },
    // warning: {
    //   main: "#FCC400",
    //   light: "#FFF8DA",
    //   dark: "#FFA800",
    // },
    // info: {
    //   main: "#5064db",
    //   light: "#c4c8f2",
    //   dark: "#00119f",
    // },
    // background: {
    //   default: "#ccd4d8",
    //   paper: "#ffffff",
    // },
  },
  typography: {
    fontFamily: ibm_font.style.fontFamily,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    /* minor third modular scale */
    h1: {
      fontSize: 46,
      fontWeight: 700,
      lineHeight: "60.28px",
      [mobileScreen]: {
        fontSize: 30,
        lineHeight: "46.29px",
      },
    },
    h2: {
      fontSize: 42,
      fontWeight: 700,
      lineHeight: "50px",
      [mobileScreen]: {
        fontSize: 28,
        lineHeight: "32.29px",
      },
    },
    h3: {
      fontSize: 38,
      fontWeight: 700,
      lineHeight: "49.55px",
      [mobileScreen]: {
        fontSize: 26,
        lineHeight: "28.29px",
      },
      [verySmallMobileScreen]: {
        fontSize: 24,
        lineHeight: "28.29px",
      },
    },
    h4: {
      fontSize: 30,
      fontWeight: 700,
      lineHeight: "30px",
      [mobileScreen]: {
        fontSize: 24,
        lineHeight: "22.29px",
      },
      [verySmallMobileScreen]: {
        fontSize: 22,
        lineHeight: "22.29px",
      },
    },
    h5: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: "31.29px",
      [mobileScreen]: {
        fontSize: 20,
      },
      [verySmallMobileScreen]: {
        fontSize: 18,
      },
    },
    h6: {
      fontSize: 24,
      fontWeight: 700,
      // lineHeight: '23.92px',
      [mobileScreen]: {
        fontSize: 18,
      },
      [verySmallMobileScreen]: {
        fontSize: 16,
      },
    },
    subtitle1: {
      fontSize: 24,
      // fontWeight: 400,
      lineHeight: "31.29px",
      [mobileScreen]: {
        fontSize: 18,
      },
      [verySmallMobileScreen]: {
        fontSize: 16,
      },
    },
    subtitle2: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: "26.08px",
      [mobileScreen]: {
        fontSize: 16,
      },
      [verySmallMobileScreen]: {
        fontSize: 14,
      },
    },
    body1: {
      fontSize: 16,
      // fontWeight: 500,
      lineHeight: "26.08px",
      [mobileScreen]: {
        fontSize: 14,
      },
      [verySmallMobileScreen]: {
        fontSize: 12,
      },
    },
    body2: {
      fontSize: 12,
      // fontWeight: 400,
      lineHeight: "20.8px",
      [mobileScreen]: {
        fontSize: 14,
      },
      [verySmallMobileScreen]: {
        fontSize: 10,
      },
    },
    button: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: "23.47px",
      [mobileScreen]: {
        fontSize: 14,
      },
      [verySmallMobileScreen]: {
        fontSize: 12,
      },
    },
    caption: {
      fontSize: 12,
      fontWeight: 300,
      // lineHeight: '20.93px',
      [mobileScreen]: {
        fontSize: 14,
      },
      [verySmallMobileScreen]: {
        fontSize: 12,
      },
    },
  },
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.04),0px 1px 3px 0px rgba(0,0,0,0.02)",
    "0px 3px 1px -2px rgba(0,0,0,0.1),0px 2px 2px 0px rgba(0,0,0,0.04),0px 1px 5px 0px rgba(0,0,0,0.02)",
    "0px 3px 3px -2px rgba(0,0,0,0.1),0px 3px 4px 0px rgba(0,0,0,0.04),0px 1px 8px 0px rgba(0,0,0,0.02)",
    "0px 2px 4px -1px rgba(0,0,0,0.1),0px 4px 5px 0px rgba(0,0,0,0.04),0px 1px 10px 0px rgba(0,0,0,0.02)",
    "0px 3px 5px -1px rgba(0,0,0,0.1),0px 5px 8px 0px rgba(0,0,0,0.04),0px 1px 14px 0px rgba(0,0,0,0.02)",
    "0px 3px 5px -1px rgba(0,0,0,0.1),0px 6px 10px 0px rgba(0,0,0,0.04),0px 1px 18px 0px rgba(0,0,0,0.02)",
    "0px 4px 5px -2px rgba(0,0,0,0.1),0px 7px 10px 1px rgba(0,0,0,0.04),0px 2px 16px 1px rgba(0,0,0,0.02)",
    "0px 5px 5px -3px rgba(0,0,0,0.1),0px 8px 10px 1px rgba(0,0,0,0.04),0px 3px 14px 2px rgba(0,0,0,0.02)",
    "0px 5px 6px -3px rgba(0,0,0,0.1),0px 9px 12px 1px rgba(0,0,0,0.04),0px 3px 16px 2px rgba(0,0,0,0.02)",
    "0px 6px 6px -3px rgba(0,0,0,0.1),0px 10px 14px 1px rgba(0,0,0,0.04),0px 4px 18px 3px rgba(0,0,0,0.02)",
    "0px 6px 7px -4px rgba(0,0,0,0.1),0px 11px 15px 1px rgba(0,0,0,0.04),0px 4px 20px 3px rgba(0,0,0,0.02)",
    "0px 7px 8px -4px rgba(0,0,0,0.1),0px 12px 17px 2px rgba(0,0,0,0.04),0px 5px 22px 4px rgba(0,0,0,0.02)",
    "0px 7px 8px -4px rgba(0,0,0,0.1),0px 13px 19px 2px rgba(0,0,0,0.04),0px 5px 24px 4px rgba(0,0,0,0.02)",
    "0px 7px 9px -4px rgba(0,0,0,0.1),0px 14px 21px 2px rgba(0,0,0,0.04),0px 5px 26px 4px rgba(0,0,0,0.02)",
    "0px 8px 9px -5px rgba(0,0,0,0.1),0px 15px 22px 2px rgba(0,0,0,0.04),0px 6px 28px 5px rgba(0,0,0,0.02)",
    "0px 8px 10px -5px rgba(0,0,0,0.1),0px 16px 24px 2px rgba(0,0,0,0.04),0px 6px 30px 5px rgba(0,0,0,0.02)",
    "0px 8px 11px -5px rgba(0,0,0,0.1),0px 17px 26px 2px rgba(0,0,0,0.04),0px 6px 32px 5px rgba(0,0,0,0.02)",
    "0px 9px 11px -5px rgba(0,0,0,0.1),0px 18px 28px 2px rgba(0,0,0,0.04),0px 7px 34px 6px rgba(0,0,0,0.02)",
    "0px 9px 12px -6px rgba(0,0,0,0.1),0px 19px 29px 2px rgba(0,0,0,0.04),0px 7px 36px 6px rgba(0,0,0,0.02)",
    "0px 10px 13px -6px rgba(0,0,0,0.1),0px 20px 31px 3px rgba(0,0,0,0.04),0px 8px 38px 7px rgba(0,0,0,0.02)",
    "0px 10px 13px -6px rgba(0,0,0,0.1),0px 21px 33px 3px rgba(0,0,0,0.04),0px 8px 40px 7px rgba(0,0,0,0.02)",
    "0px 10px 14px -6px rgba(0,0,0,0.1),0px 22px 35px 3px rgba(0,0,0,0.04),0px 8px 42px 7px rgba(0,0,0,0.02)",
    "0px 11px 14px -7px rgba(0,0,0,0.1),0px 23px 36px 3px rgba(0,0,0,0.04),0px 9px 44px 8px rgba(0,0,0,0.02)",
    "0px 11px 15px -7px rgba(0,0,0,0.1),0px 24px 38px 3px rgba(0,0,0,0.04),0px 9px 46px 8px rgba(0,0,0,0.02)",
  ],
});

export default theme;
