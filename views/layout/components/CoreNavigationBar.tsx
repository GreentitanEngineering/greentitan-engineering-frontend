"use client";
import { useResponsiveQuery } from "@/hooks/useResponsiveQuery";
import { Link, usePathname } from "@/i18n/routing";
import Hamburgers from "@/public/svgs/Hambergers.svg";
import { Email, Phone } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Popover,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import CoreLangSwitcher from "./CoreLangSwitcher";

interface NavigationProps {
  navigations: {
    title: string;
    link: string;
  }[];
}

const CoreNavigationBar: React.FC<NavigationProps> = ({ navigations }) => {
  const theme = useTheme();
  const pathname = usePathname();
  const { isMobile, isTablet, isDesktop } = useResponsiveQuery();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const t = useTranslations("contactUsPage");
  const contacts = [
    {
      contact: t("facebook.title"),
      link: t("facebook.link"),
      logo: (
        <Image
          alt="facebook-logo"
          src="/svgs/faceBookSvg.svg"
          width={isMobile ? 14 : 12}
          height={isMobile ? 14 : 12}
          loading="eager"
          priority
        />
      ),
      background: "#FF9500",
    },
    {
      contact: t("lineAd.title"),
      link: t("lineAd.link"),
      logo: (
        <Image
          alt="line-logo"
          src="/svgs/LineLogo.svg"
          width={isMobile ? 14 : 12}
          height={isMobile ? 14 : 12}
          loading="eager"
          priority
        />
      ),
      background: "#007AFF",
    },
    {
      contact: t("email.title"),
      link: `mailto:${t("email.link")}`,
      logo: (
        <Email
          sx={{
            color: theme.palette.primary.main,
            fontSize: isMobile ? 14 : 12,
          }}
        />
      ),
      background: "#007AFF",
    },
    {
      contact: t("tel.title"),
      link: `tel:${t("tel.link")}`,
      logo: (
        <Phone
          sx={{
            color: theme.palette.primary.main,
            fontSize: isMobile ? 14 : 12,
          }}
        />
      ),
      background: "#007AFF",
    },
  ];

  return (
    <AppBar sx={{ background: "#EFF1F5" }}>
      <Toolbar
        variant="dense"
        sx={{
          minHeight: isMobile ? 40 : 32,
          background: theme.palette.primary.main,
        }}
      >
        <Container disableGutters={isMobile}>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {/* Locale Toggle */}
            <CoreLangSwitcher />

            {/* Contact Icons */}
            <Box display="flex" sx={{ gap: isMobile ? 1 : 2 }}>
              {contacts.map(({ contact, logo, link }, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  sx={{ gap: 1, flexGrow: 1, cursor: "pointer" }}
                  onClick={() => window.open(link)}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width={isMobile ? 20 : 16}
                    height={isMobile ? 20 : 16}
                    borderRadius="50%"
                    bgcolor={theme.palette.common.white}
                  >
                    {logo}
                  </Box>
                  {!isMobile && (
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {contact}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Toolbar>

      <Toolbar>
        <Container disableGutters={isMobile}>
          <Box display="flex" width="100%" justifyContent="space-between">
            {/* Logo */}
            <Link href="/">
              <Box
                position="relative"
                width={isMobile ? 130 : 173}
                height={isMobile ? 44 : 56}
                sx={{ aspectRatio: 173 / 56 }}
              >
                <Image
                  alt="Logo-Colored-Horizontal"
                  src="/static/logo/Logo-Colored-Horizontal.png"
                  fill
                  style={{ filter: "drop-shadow(2px 3px 3px #22200510)" }}
                  loading="eager"
                  priority
                />
              </Box>
            </Link>

            {/* Navigation Links */}
            {isMobile ? (
              <Box>
                <IconButton onClick={handleClick} aria-describedby={id}>
                  <Hamburgers width={24} height={24} />
                </IconButton>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  slotProps={{
                    paper: {
                      style: {
                        borderRadius: 8,
                      },
                    },
                  }}
                >
                  <Box
                    width={180}
                    p={2}
                    display="flex"
                    flexDirection="column"
                    sx={{ gap: isMobile ? 1 : 3 }}
                  >
                    {navigations.map(({ title, link }, index) => (
                      <CoreNavigationLink
                        key={index}
                        pathname={pathname}
                        link={link}
                        title={title}
                      />
                    ))}
                  </Box>
                </Popover>
              </Box>
            ) : (
              <Box display="flex" alignItems="center" sx={{ gap: 3 }}>
                {navigations.map(({ title, link }, index) => (
                  <CoreNavigationLink
                    key={index}
                    pathname={pathname}
                    link={link}
                    title={title}
                  />
                ))}
              </Box>
            )}
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

const CoreNavigationLink = ({
  pathname,
  link,
  title,
}: {
  pathname: string;
  link: string;
  title: string;
}) => {
  const theme = useTheme();
  const [hover, setHover] = React.useState(false);
  const { isMobile, isTablet, isDesktop } = useResponsiveQuery();

  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={link}
      style={{
        transition: `0.1s all ease-in`,
        height: "max-content",
        color:
          pathname === link || hover ? theme.palette.primary.main : "#052e2d",
        borderBottom:
          pathname === link
            ? `2px solid ${theme.palette.primary.main}`
            : "none",
        fontWeight: theme.typography.fontWeightBold,
      }}
    >
      {title}
    </Link>
  );
};

export default CoreNavigationBar;
