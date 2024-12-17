"use client";
import { Email, KeyboardArrowRight, Phone } from "@mui/icons-material";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CoreLangSwitcher from "./CoreLangSwitcher";
import { useResponsiveQuery } from "@/hooks/useResponsiveQuery";

const LineChip = () => (
  <Box
    bgcolor="#06C755"
    display="flex"
    alignItems="center"
    sx={{ gap: 0.5 }}
    borderRadius={8}
    px={1.5}
    py={0.5}
    maxWidth="max-content"
  >
    <Image alt="line-logo" src="/svgs/LineLogo.svg" width={20} height={20} />
    <Typography variant="body2">
      <b>@greentitan</b>
    </Typography>
  </Box>
);

const QuickLinks = ({
  title,
  lists,
}: {
  title: string;
  lists: {
    text: string;
    link: string;
  }[];
}) => {
  const theme = useTheme();
  const { isMobile, isTablet, isDesktop } = useResponsiveQuery();

  return (
    <Box display="flex" flexDirection="column" sx={{ gap: 1 }}>
      <Typography
        variant="subtitle2"
        component="div"
        sx={{
          borderBottom: `1px solid ${theme.palette.primary.light}`,
          color: theme.palette.primary.light,
        }}
      >
        {title}
      </Typography>
      <Box
        display="grid"
        sx={{
          rowGap: 1,
          columnGap: 3,
          gridTemplateRows: `repeat(${1},1fr)`,
          gridTemplateColumns: `repeat(${isMobile ? 1 : 2},1fr)`,
        }}
      >
        {lists.map(({ text, link }, index) => {
          return (
            <Link href={link} key={index}>
              <Box
                py={0.25}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`1px dashed ${theme.palette.primary.light}`}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: theme.typography.fontWeightMedium,
                    color: theme.palette.common.white,
                  }}
                >
                  {text}
                </Typography>

                <KeyboardArrowRight
                  sx={{
                    color: theme.palette.common.white,
                  }}
                />
              </Box>
            </Link>
          );
        })}
        {[
          { text: "Term and services", link: "/term-and-services" },
          { text: "Privacy-policy", link: "privacy-policy" },
        ].map(({ text, link }, index) => {
          return (
            <Link href={link} key={`additional_quicklink_${index}`}>
              <Box
                py={0.25}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`1px dashed ${theme.palette.primary.light}`}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: theme.typography.fontWeightMedium,
                    color: theme.palette.common.white,
                  }}
                >
                  {text}
                </Typography>

                <KeyboardArrowRight
                  sx={{
                    color: theme.palette.common.white,
                  }}
                />
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

const CoreFooter = () => {
  const theme = useTheme();

  const t = useTranslations("footer");
  const tNav = useTranslations("navigationLinks");
  const contacts = [
    {
      contact: t("contacts.facebook.title"),
      link: t("contacts.facebook.link"),
      logo: (
        <Image
          alt="line-logo"
          src="/svgs/faceBookSvg.svg"
          width={20}
          height={20}
        />
      ),
    },
    {
      contact: t("contacts.lineAd.title"),
      link: `${t("contacts.lineAd.link")}`,
      logo: (
        <Image
          alt="line-logo"
          src="/svgs/LineLogo.svg"
          width={20}
          height={20}
        />
      ),
    },
    {
      contact: t("contacts.email.title"),
      link: `mailto:${t("contacts.email.link")}`,
      logo: <Email color="primary" fontSize="small" />,
    },
    {
      contact: t("contacts.tel.title"),
      link: `tel:${t("contacts.tel.link")}`,
      logo: <Phone color="primary" fontSize="small" />,
    },
  ];

  const keys = [
    "homepage",
    "ourServices",
    "portfolio",
    "aboutUs",
    "contactUs",
  ] as const;

  const links = keys.map((key) => {
    return {
      text: tNav(`${key}.title`),
      link: tNav(`${key}.link`),
    };
  });

  return (
    <footer style={{ height: "100%" }}>
      <Box width="100%">
        <Box display="flex" width="100%" bgcolor={theme.palette.primary.dark}>
          <Container>
            <Box
              py={4}
              display="grid"
              height="100%"
              sx={{
                gap: { xs: "3rem", sm: "6rem" },
                gridTemplateColumns: { xs: "repeat(1,fr)", sm: `1fr 2fr 1fr` },
              }}
            >
              <Box
                width="100%"
                display="flex"
                flexDirection="column"
                sx={{ gap: 1 }}
              >
                <img
                  alt="footer-logo"
                  src="/static/logo/Logo-MixedWhite-Horizontal.png"
                  width="100%"
                  style={{ maxWidth: 160 }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  color={theme.palette.common.white}
                >
                  <Typography variant="body2">
                    {t("address.addressTitle")}
                  </Typography>
                  <Typography variant="button">
                    <b>{t("address.addressTh")}</b>
                  </Typography>
                  <Typography variant="button">
                    <b>{t("address.addressEn")}</b>
                  </Typography>
                  <Typography variant="body2">
                    {t("address.fullAddress")}
                  </Typography>
                </Box>
                <CoreLangSwitcher />
              </Box>
              <QuickLinks title="Quick link" lists={links} />
              <Box
                display="flex"
                flexDirection="column"
                sx={{ gap: 2, color: theme.palette.common.white }}
              >
                <Typography variant="button">{t("contacts.header")}</Typography>
                <Box display="flex" flexDirection="column" sx={{ gap: 1.5 }}>
                  {contacts.map(({ contact, logo, link }, index) => (
                    <Box
                      key={index}
                      display="flex"
                      alignItems="center"
                      sx={{ gap: 1, cursor: "pointer" }}
                      onClick={() => window.open(link)}
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        width={30}
                        height={30}
                        borderRadius="50%"
                        bgcolor={theme.palette.common.white}
                        border={`1px solid ${theme.palette.grey[300]}`}
                      >
                        {logo}
                      </Box>
                      <Typography variant="body2">{contact}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box
          textAlign="center"
          width="100%"
          bgcolor={theme.palette.primary.main}
        >
          <Typography
            variant="caption"
            sx={{ color: theme.palette.common.white }}
          >
            Copyright 2024 © Green Titan Engineering
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default CoreFooter;
