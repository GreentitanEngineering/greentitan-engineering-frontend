"use client";
import { useResponsiveQuery } from "@/hooks/useResponsiveQuery";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";

const BlogsSection = () => {
  const theme = useTheme();
  const { isMobile, isTablet, isDesktop } = useResponsiveQuery();
  const t = useTranslations("homePage.blogs");
  const keys = Array.from({ length: 5 })
    .map((_, i) => i + 1)
    .map((o) => {
      return `bullet${o}`;
    });

  const blogs = keys.map((key) => {
    return {
      title: t(`${key}.title` as any),
      subtitle: t(`${key}.subtitle` as any),
    };
  });
  return (
    <Container>
      <Box display="flex" flexDirection="column" sx={{ gap: 4 }} py={8}>
        <Typography variant="h5">
          <b>{t("header")}</b>
        </Typography>
        <Box position="relative" width="100%" minHeight={240}>
          <Image
            alt="blog-bg"
            src="/static/images/test-blogs-bg.png"
            fill
            sizes="100vw"
            objectFit="cover"
          />
        </Box>
        <Box
          display="grid"
          sx={{
            gap: 2,
            gridTemplateColumns: `repeat(${
              isMobile ? 2 : isTablet ? 3 : 5
            },1fr)`,
          }}
        >
          {blogs.map(({ title, subtitle }, index) => {
            return (
              <Box key={index} display="flex" flexDirection="column">
                <Typography
                  variant="subtitle2"
                  sx={{ height: 56, color: theme.palette.primary.dark }}
                >
                  {title}
                </Typography>
                <Typography variant="body2">{subtitle}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default BlogsSection;
