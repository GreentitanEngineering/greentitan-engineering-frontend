"use client";
import { Box } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Box
        sx={{
          backgroundImage: {
            xs: `url("/static/images/hero_banner_mobile.png")`,
            md: `url("/static/images/hero_banner_for_FB.png")`,
          },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        position="relative"
        width="100%"
        minHeight={{ xs: 220, md: 555 }}
      />
    </Box>
  );
};

export default HeroBanner;
