"use client";
import { useResponsiveQuery } from "@/hooks/useResponsiveQuery";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const QualityAssurance = () => {
  const theme = useTheme();
  const { isMobile, isTablet, isDesktop } = useResponsiveQuery();

  const t = useTranslations("homePage.qualityAssurance");
  const keys = ["bulletOne", "bulletTwo", "bulletThree"];

  return (
    <Container>
      <Box display="flex" flexDirection="column" sx={{ gap: isMobile ? 2 : 4 }}>
        <Typography align="center" variant="h3">
          {t("header")}
        </Typography>
        <Typography align="center" variant="body1">
          {t("subHeader")}
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ gap: { xs: 2, sm: 4 } }}
        >
          {keys.map((o, index) => {
            const title = `${o}.title`;
            const subtitle = `${o}.subtitle`;
            const imageUrl = t(`${o}.imageUrl` as any);
            return (
              <Box
                key={index}
                p={{
                  xs: 2,
                  sm: 4,
                }}
                display="flex"
                flexDirection={isMobile ? "column" : "row"}
                alignItems={isMobile ? "center" : "initial"}
                boxShadow={theme.shadows[4]}
                border={`1px solid #4BB87A`}
                borderRadius={3}
                sx={{ gap: { xs: 2, sm: 4 } }}
                bgcolor={theme.palette.common.white}
              >
                <Box
                  sx={{ flexShrink: 0 }}
                  position="relative"
                  width={{ xs: 56, sm: 90 }}
                  height={{ xs: 56, sm: 90 }}
                >
                  <Image
                    alt={`${title}_image`}
                    src={imageUrl}
                    fill
                    objectFit="cover"
                  />
                </Box>
                <Box
                  display="flex"
                  textAlign={isMobile ? "center" : "left"}
                  flexDirection="column"
                  sx={{ gap: 1 }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: theme.palette.primary.dark }}
                  >
                    {t(title as any)}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {t.rich(subtitle as any, {
                      q: (chunks) => <q>{chunks}</q>,
                    })}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default QualityAssurance;
