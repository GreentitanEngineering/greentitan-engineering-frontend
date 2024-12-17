import { Link } from "@/i18n/routing";
import { Home, HomeMiniRounded, HomeRounded } from "@mui/icons-material";
import { Breadcrumbs, Divider, Typography, useTheme } from "@mui/material";
import React from "react";

export type Breadcrumb = {
  label: string | any;
  url?: string;
  style?: React.CSSProperties;
};

type Props = {
  breadcrumbs: Breadcrumb[];
};

const CoreBreadcrumbs = (props: Props) => {
  const theme = useTheme();
  const { breadcrumbs } = props;
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
  };

  return (
    <div role="presentation" onClick={handleClick} style={{ width: "100%" }}>
      <Breadcrumbs
        separator={
          <Typography
            sx={{
              lineHeight: {
                xs: theme.typography.subtitle2.lineHeight,
                md: theme.typography.button.lineHeight,
              },
            }}
          >
            /
          </Typography>
        }
        maxItems={3}
        aria-label="breadcrumb"
      >
        {breadcrumbs.map((link, index) => {
          const { label, url, style = {} } = link;
          const isLastItem = breadcrumbs.length - 1 == index;
          if (url) {
            return (
              <Link key={index} href={url}>
                <Typography
                  variant="body1"
                  style={{
                    display: "flex",
                    textTransform: "initial",
                    fontWeight: isLastItem ? 700 : 400,
                    color: isLastItem ? theme.palette.primary.main : "inherit",
                    ...style,
                  }}
                >
                  {label}
                </Typography>
              </Link>
            );
          } else {
            return (
              <Typography
                variant="body1"
                key={index}
                style={{
                  display: "flex",
                  textTransform: "initial",
                  fontWeight: isLastItem ? 700 : 400,
                  color: isLastItem ? theme.palette.primary.main : "inherit",
                  ...style,
                }}
              >
                {label}
              </Typography>
            );
          }
        })}
      </Breadcrumbs>
      <Divider sx={{ mt: 0.5 }} />
    </div>
  );
};

export default CoreBreadcrumbs;
