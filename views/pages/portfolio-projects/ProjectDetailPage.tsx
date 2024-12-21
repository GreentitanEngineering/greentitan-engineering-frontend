"use client";
import CoreBreadcrumbs, {
  Breadcrumb,
} from "@/views/layout/components/CoreBreadcrumbs";
import { MainLayout } from "@/views/layout/MainLayout";
import { HomeRounded, KeyboardArrowLeft } from "@mui/icons-material";
import { Box, Button, Typography, useTheme } from "@mui/material";
import dayjs from "dayjs";
import { useLocale } from "next-intl";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { useResponsiveQuery } from "@/hooks/useResponsiveQuery";
import {
  A11y,
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from "swiper/modules";

const ProjectDetailPage: React.FC<any> = ({ project }) => {
  const theme = useTheme();
  const { isMobile, isDesktop, isTablet } = useResponsiveQuery();
  const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);
  const locale = useLocale();
  const breadcrumbs: Breadcrumb[] = [
    {
      label: <HomeRounded fontSize="small" />,
      url: "/",
    },
    {
      label: locale === "th" ? "ผลงานทั้งหมด" : "All projects",
      url: "/portfolio",
    },
    {
      label: project.title,
      url: `/portfolio/${project.documentId}`,
    },
  ];

  return (
    <MainLayout>
      <Box my={4}>
        <Box
          sx={{ gap: { xs: 2, md: 3 } }}
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          width="100%"
        >
          <Button
            sx={{ flexShrink: 0, maxWidth: "max-content" }}
            variant="outlined"
            startIcon={<KeyboardArrowLeft />}
          >
            {locale === "th" ? "ย้อนกลับ" : "Back"}
          </Button>
          <CoreBreadcrumbs breadcrumbs={breadcrumbs} />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          my={4}
          width="100%"
          sx={{ gap: 1 }}
        >
          <Typography variant="h1">{project.title}</Typography>
          <Typography variant="body1">
            <b>อัพเดตล่าสุดเมื่อ:</b>{" "}
            {dayjs(project.updatedAt).format("DD MMMM YYYY")}
          </Typography>
          <Box width="100%">
            <Swiper
              spaceBetween={10}
              navigation={true}
              autoHeight
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
            >
              {project?.projectImages?.map((image: any) => {
                return (
                  <SwiperSlide key={image.id}>
                    <Box
                      width="100%"
                      display="flex"
                      maxHeight={560}
                      height="100%"
                    >
                      <img
                        alt={image.documentId}
                        src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${image.url}`}
                        height={"max-content "}
                        width={"100%"}
                        style={{
                          borderRadius: 8,
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={8}
              slidesPerView={isMobile ? 4 : isTablet ? 6 : 8}
              freeMode
              watchSlidesProgress
              pagination={{ clickable: true }}
              navigation
              modules={[
                FreeMode,
                Navigation,
                Thumbs,
                Pagination,
                Scrollbar,
                A11y,
              ]}
              autoplay
              className="mySwiper"
              style={{ marginTop: 8 }}
            >
              {project?.projectImages?.map((image: any, index: number) => {
                return (
                  <SwiperSlide key={image.id}>
                    <img
                      alt={image.documentId}
                      src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${image.url}`}
                      height={90}
                      width={"100%"}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: 8,
                      }}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
          <div
            style={{ fontSize: theme.typography.subtitle1.fontSize }}
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </Box>
      </Box>
    </MainLayout>
  );
};

export default ProjectDetailPage;
