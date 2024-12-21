"use client";
import { useResponsiveQuery } from "@/hooks/useResponsiveQuery";
import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import ProjectCard from "./components/ProjectCard";

const HeroProjects = () => {
  const locale = useLocale();
  const theme = useTheme();
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const t = useTranslations("homePage.heroProjects");
  const { isMobile, isTablet, isDesktop } = useResponsiveQuery();

  React.useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/projects?locale=${locale}&populate=*`
        );
        setProjects(res.data.data);
      } catch (error: any) {
        console.log(error.message);
        return [];
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [locale]);

  return (
    <Container>
      <Box display="flex" flexDirection="column" sx={{ gap: 3 }} py={8}>
        <Box display="flex" flexDirection="column" sx={{ gap: 1 }}>
          <Typography align="center" variant="subtitle1">
            {t("preHeader")}
          </Typography>
          <Typography align="center" variant="h3">
            <strong>{t("header")}</strong>
          </Typography>
        </Box>
        <Box width="100%" display="flex" justifyContent="flex-end">
          <Button
            sx={{ color: theme.palette.primary.dark }}
            endIcon={<ArrowForward />}
          >
            {t("viewAllbutton")}
          </Button>
        </Box>
        {!loading ? (
          <Box
            display="grid"
            sx={{
              gridTemplateColumns: { xs: `repeat(1,1fr)`, md: `repeat(3,1fr)` },
              gap: { xs: 2, md: 3 },
            }}
          >
            {projects.map(({ title, subtitle, thumbnail }, index) => {
              return (
                <ProjectCard
                  key={index}
                  title={title}
                  subtitle={subtitle}
                  imageUrl={(thumbnail as any)?.url}
                />
              );
            })}
          </Box>
        ) : (
          <Box display="flex" justifyContent="center" py={4}>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default HeroProjects;
