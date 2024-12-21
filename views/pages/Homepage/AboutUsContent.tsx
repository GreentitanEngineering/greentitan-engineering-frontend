"use client";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AboutUsContent = ({ projects }: { projects: any }) => {
  const theme = useTheme();
  const t = useTranslations("homePage.aboutUsSection");
  return (
    <Container>
      <Box display="flex" flexDirection="column" sx={{ gap: 4 }} py={8}>
        <Typography variant="h1" align="center" lineHeight={1}>
          <b>{t("header")}</b>
        </Typography>
        <Typography
          component="h2"
          sx={{
            color: "#052E2D",
            lineHeight: 2,
            fontSize: theme.typography.subtitle1.fontSize,
          }}
        >
          <b>
            {t.rich("detail", {
              strong: (chunks) => (
                <b
                  style={{
                    color: theme.palette.primary.main,
                    fontSize: theme.typography.h6.fontSize,
                  }}
                >
                  {chunks}
                </b>
              ),
            })}
          </b>
        </Typography>
        <Typography
          sx={{ lineHeight: 2 }}
          variant="body1"
          color="textSecondary"
        >
          {t.rich("mission", {
            strong: (chunks) => (
              <b style={{ color: theme.palette.primary.main }}>{chunks}</b>
            ),
          })}
        </Typography>
        <Typography
          sx={{ lineHeight: 2 }}
          variant="body1"
          color="textSecondary"
        >
          {t.rich("vision", {
            strong: (chunks) => (
              <b style={{ color: theme.palette.primary.main }}>{chunks}</b>
            ),
          })}
        </Typography>
        <Box width="100%">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={16}
            slidesPerView={projects.length > 4 ? 4 : projects.length}
            pagination={{ clickable: true }}
            navigation
          >
            {projects.map((o: any) => {
              return (
                <SwiperSlide key={o.documentId}>
                  <Box position="relative" width="100%" height={320}>
                    <Image
                      style={{ borderRadius: "0.5rem" }}
                      alt={`aboutCompanyImage_${o.title}`}
                      src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${o.thumbnail.url}`}
                      fill
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutUsContent;
