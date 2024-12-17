import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

export const useResponsiveQuery = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isTablet =
    useMediaQuery(theme.breakpoints.between("sm", "lg")) && !isDesktop;
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")) && !isTablet;
  return { isMobile, isTablet, isDesktop };
};
