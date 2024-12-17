"use client";
import { Email, Map, Phone } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import ContactForm from "@/views/ContactForm";
import { useResponsiveQuery } from "@/hooks/useResponsiveQuery";

const AddressMap = () => {
  const theme = useTheme();
  return (
    <div className="google-map-code">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.9759572701314!2d100.4963688!3d13.7803229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299119e574573%3A0x53e2d4a5892ab2da!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4geC4o-C4teC4meC5hOC4l-C4l-C4seC4mSDguYDguK3guYfguJnguIjguLTguYDguJnguLXguKLguKPguYzguKPguLTguYjguIcg4LiI4Liz4LiB4Lix4LiUIEdyZWVuIFRpdGFuIEVuZ2luZWVyaW5n!5e0!3m2!1sth!2sth!4v1730644900621!5m2!1sth!2sth"
        width="100%"
        height="240px"
        style={{ border: 0, borderRadius: 8, boxShadow: theme.shadows[3] }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

const ContactUs = () => {
  const theme = useTheme();
  const { isMobile } = useResponsiveQuery();
  const t = useTranslations("contactUsPage");
  const keys = ["facebook", "lineAd", "tel", "email", "address"] as const;

  return (
    <Box py={4} display="flex" flexDirection="column" sx={{ gap: 4 }}>
      <Typography variant="h4">{t("title")}</Typography>
      <Box
        minHeight="80vh"
        display="grid"
        sx={{
          gap: { xs: 3, md: 6 },
          gridTemplateColumns: `repeat(${isMobile ? 1 : 2},1fr)`,
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          sx={{ gap: { xs: 1, md: 3 } }}
          height="100%"
        >
          <AddressMap />
          <Box
            display="flex"
            flexDirection="column"
            borderRadius={2}
            sx={{ gap: { xs: 1, md: 2 } }}
          >
            <Typography variant="subtitle1">
              <b>{t("fullNameTH")}</b>
            </Typography>
            <Typography variant="subtitle1">
              <b>{t("fullNameEN")}</b>
            </Typography>
            <Typography variant="body1">{t("address.title")}</Typography>
            <Box
              height="100%"
              display="flex"
              width="100%"
              alignItems="center"
              sx={{ gap: 2 }}
            >
              {keys.map((key, index) => {
                let href = "";
                let icon = null;
                switch (key) {
                  case "email":
                    href = `mailto:${t("email.link")}`;
                    icon = <Email fontSize="small" color="primary" />;
                    break;
                  case "tel":
                    href = `tel:${t("tel.link")}`;
                    icon = <Phone fontSize="small" color="primary" />;
                    break;
                  case "lineAd":
                    href = `${t(`${key}.link`)}`;
                    icon = (
                      <Image
                        alt="line-logo"
                        src="/svgs/LineLogo.svg"
                        width={20}
                        height={20}
                      />
                    );
                    break;
                  case "facebook":
                    href = `${t(`${key}.link`)}`;
                    icon = (
                      <Image
                        alt="facebook-logo"
                        src="/svgs/faceBookSvg.svg"
                        width={20}
                        height={20}
                      />
                    );
                    break;
                  case "address":
                    href = `${t(`${key}.link`)}`;
                    icon = <Map fontSize="small" color="primary" />;
                    break;
                }
                return (
                  <Box key={index}>
                    <Box
                      width={32}
                      height={32}
                      borderRadius="50%"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      border={`1px solid ${theme.palette.grey[300]}`}
                      bgcolor={theme.palette.common.white}
                      sx={{ cursor: "pointer" }}
                    >
                      {icon}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default ContactUs;
