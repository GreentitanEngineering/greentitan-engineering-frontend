"use client";
import { useResponsiveQuery } from "@/hooks/useResponsiveQuery";
import { useRouter } from "@/i18n/routing";
import CoreBreadcrumbs, {
  Breadcrumb,
} from "@/views/layout/components/CoreBreadcrumbs";
import { HomeRounded, KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  MenuItem,
  Pagination,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import React from "react";

interface ProjectCardProps {
  name: string;
  link: string;
  imageUrl: string | null;
  type: string;
  location: string;
  subtitle: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  link,
  imageUrl,
  type,
  location,
  subtitle,
}) => {
  const theme = useTheme();
  const { isMobile, isTablet } = useResponsiveQuery();
  const router = useRouter();
  const t = useTranslations("portfolio");
  const chip = () => {
    let chipColor:
      | "primary"
      | "default"
      | "warning"
      | "secondary"
      | "success"
      | "error"
      | "info" = "primary";
    switch (type) {
      case "SolarSystem":
        chipColor = "primary";
        break;
      case "EVCharging":
        chipColor = "info";
        break;
      case "PowerDistribution":
        chipColor = "warning";
        break;
      default:
    }
    return (
      <Chip
        size="small"
        sx={{ width: "max-content" }}
        variant="filled"
        color={chipColor}
        label={type}
      />
    );
  };
  return (
    <Card
      sx={{
        boxShadow: theme.shadows[3],
        borderRadius: 2,
        border: `1px solid ${theme.palette.grey[200]}`,
      }}
    >
      <CardMedia
        component="img"
        height={isMobile ? "168" : isTablet ? "184" : "194"}
        image={imageUrl ?? "/static/logo/Logo-GrayScale-Square.png"}
        alt={`image_${name}`}
        sx={{
          objectFit: imageUrl ? "cover" : "contain",
          borderBottom: `1px solid ${theme.palette.grey[200]}`,
        }}
      />
      <CardContent sx={{ p: 1.5, pb: 0 }}>
        <Box display="flex" flexDirection="column" sx={{ gap: 1 }}>
          <Box
            height={124}
            display="flex"
            flexDirection="column"
            sx={{ gap: 1 }}
          >
            {chip()}
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "1",
                WebkitBoxOrient: "vertical",
              }}
              variant="subtitle2"
            >
              {name}
            </Typography>
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }}
              variant="body2"
            >
              {subtitle}
            </Typography>
          </Box>

          {/* <Typography
            noWrap
            sx={{ fontSize: theme.typography.button.fontSize }}
          >
            {location}
          </Typography> */}
        </Box>
      </CardContent>
      <CardActions sx={{ p: 1.5 }}>
        <Button
          fullWidth
          onClick={() => router.push(`/portfolio/${link}`)}
          variant="outlined"
          color="primary"
        >
          {t("actionButtonLabel")}
        </Button>
      </CardActions>
    </Card>
  );
};

const PortfolioAndProjects = () => {
  const theme = useTheme();
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectFilter = searchParams.get("filter");

  const { isMobile } = useResponsiveQuery();
  const [loading, setLoading] = React.useState(false);
  const [projects, setProjects] = React.useState([]);

  const t = useTranslations("portfolio");

  const breadcrumbs: Breadcrumb[] = [
    {
      label: <HomeRounded fontSize="small" />,
      url: "/",
    },
    {
      label: locale === "th" ? "ผลงานทั้งหมด" : "All projects",
      url: "/portfolio",
    },
  ];

  const filterOptions = [
    {
      display: t("filters.allProjects"),
      value: "all",
    },
    {
      display: t("filters.solar"),
      value: "SolarSystem",
    },
    {
      display: t("filters.evCharging"),
      value: "EVCharging",
    },
    {
      display: t("filters.powerDistribute"),
      value: "PowerDistribution",
    },
  ];

  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    const fetchAllProjects = async () => {
      setLoading(true);
      const filteroption =
        projectFilter == "all" || !projectFilter
          ? ""
          : `filters[ProjectType][$eq]=${projectFilter}`;
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/projects?locale=${locale}&populate=*&${filteroption}`
        );
        const fetchProjects = await response.data.data;
        setProjects(fetchProjects ?? []);
      } catch (error) {
        return [];
      } finally {
        setLoading(false);
      }
    };
    fetchAllProjects();
  }, [projectFilter]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box display="flex" pb={4} flexDirection="column" sx={{ gap: 3 }}>
      <CoreBreadcrumbs breadcrumbs={breadcrumbs} />
      <Box display="flex" width="100%" justifyContent="flex-end">
        <Select
          sx={{
            minWidth: 240,
            background: theme.palette.common.white,
          }}
          displayEmpty
          size="small"
          defaultValue={projectFilter ?? "all"}
          IconComponent={() => (
            <KeyboardArrowDown fontSize="small" sx={{ mr: 1 }} />
          )}
          onChange={(e) =>
            router.replace(`/portfolio?filter=${e.target.value}`, {
              locale: locale as "th" | "en",
            })
          }
        >
          {filterOptions.map((option) => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.display}
              </MenuItem>
            );
          })}
        </Select>
      </Box>
      <Typography align="center" variant="h4">
        {t("title")}
      </Typography>
      {loading && (
        <Box py={8} width="100%" display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
      {projects.length > 0 && (
        <Box
          display="grid"
          justifyContent="center"
          width="100%"
          sx={{
            gap: isMobile ? 2 : 4,
            gridTemplateColumns: {
              xs: `repeat(1,1fr)`,
              sm: `repeat(2,1fr)`,
              md: `repeat(3,1fr)`,
              lg: `repeat(4,1fr)`,
            },
          }}
        >
          {projects.map(
            (
              { title, documentId, link, thumbnail, ProjectType, subtitle },
              index
            ) => {
              return (
                <ProjectCard
                  key={index}
                  name={title}
                  link={`${documentId}`}
                  imageUrl={
                    thumbnail
                      ? `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${thumbnail["url"]}`
                      : null
                  }
                  type={ProjectType}
                  location={""}
                  subtitle={subtitle}
                />
              );
            }
          )}
        </Box>
      )}
      <Box width="100%" display="flex" justifyContent="center">
        <Pagination count={1} page={page} onChange={handleChange} />
      </Box>
    </Box>
  );
};

export default PortfolioAndProjects;
