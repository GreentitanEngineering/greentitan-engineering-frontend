"use client";

import { KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { useLocale } from "next-intl";
import React, { useState } from "react";

const ProjectCard = ({
  imageUrl,
  title,
  subtitle,
}: {
  imageUrl: string;
  title: string;
  subtitle: string;
}) => {
  const theme = useTheme();
  const locale = useLocale();
  return (
    <Card sx={{ borderRadius: "0.5rem" }}>
      <CardMedia
        component="img"
        alt="heroProject test"
        height="240"
        image={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${imageUrl}`}
      />
      <CardActions
        sx={{
          p: 3,
          background: theme.palette.primary.main,
        }}
      >
        <Box
          display="flex"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
          sx={{ gap: "2rem", color: "#fff", transition: "0.5s all ease-in" }}
        >
          <Box
            display="flex"
            flexDirection="column"
            overflow="auto"
            textOverflow="ellipsis"
          >
            <Typography variant="body1" noWrap>
              <strong>{title}</strong>
            </Typography>
            <Typography variant="body2" noWrap>
              {subtitle}
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              "&:hover": {
                background: "#00000030",
              },
              flexShrink: 0,
              color: "#fff",
              border: "1px solid #fff",
              textTransform: "capitalize",
              borderRadius: "8px",
              fontWeight: theme.typography.fontWeightBold,
            }}
            variant="outlined"
            endIcon={<KeyboardArrowRight sx={{ fontSize: 10 }} />}
          >
            {locale === "th" ? "อ่านเพิ่มเติม" : "View Detail"}
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
