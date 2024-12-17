"use client";
import { Box, Container, SxProps } from "@mui/material";
import React from "react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { ArrowUpward, ArrowUpwardOutlined } from "@mui/icons-material";

const CoreNavigationBar = dynamic(
  () => import("./components/CoreNavigationBar")
);
const CoreFooter = dynamic(() => import("./components/CoreFooter"));

interface MainLayoutProps {
  noNavBar?: boolean;
  noFooter?: boolean;
  fullWidth?: boolean;
  beforeMain?: React.ReactNode | null;
  sxStyle?: SxProps;
  children: React.ReactNode | React.ReactNode[];
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  noNavBar = false,
  noFooter = false,
  fullWidth = false,
  beforeMain = null,
  sxStyle,
  children,
}) => {
  const t = useTranslations("navigationLinks");

  const keys = [
    "homepage",
    "ourServices",
    "portfolio",
    "aboutUs",
    "contactUs",
  ] as const;

  const navigations = keys.map((key) => {
    return {
      title: t(`${key}.title`),
      link: t(`${key}.link`),
    };
  });

  return (
    <>
      {!noNavBar ? <CoreNavigationBar navigations={navigations} /> : false}
      {beforeMain ? (
        <Box width="100%" pt={noNavBar ? 0 : "96px"}>
          {beforeMain}
        </Box>
      ) : (
        false
      )}
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        minHeight={noFooter ? 0 : "100vh"}
        pt={noNavBar || beforeMain ? 0 : "96px"}
        sx={{ ...sxStyle }}
      >
        {fullWidth ? (
          <Box position="relative">{children}</Box>
        ) : (
          <Container>{children}</Container>
        )}
        {!noFooter && <CoreFooter />}
        <Box position="fixed" bottom={32} right={32} zIndex={99999}>
          <Box
            width={40}
            height={40}
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius={1}
            bgcolor={"#0E8742"}
            boxShadow={"1px 2px 4px #00000050"}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            sx={{ cursor: "pointer" }}
          >
            <ArrowUpwardOutlined sx={{ color: "#fff" }} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
