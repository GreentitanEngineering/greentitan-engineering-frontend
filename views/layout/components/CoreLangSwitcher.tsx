"use client";
import { usePathname } from "@/i18n/routing";
import { Box, Typography, useTheme } from "@mui/material";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const CoreLangSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const theme = useTheme();

  const onSelectChangeLocale = () => {
    const nextLocale = locale === "th" ? "en" : "th";

    startTransition(() => {
      // Navigating to the same path with updated locale
      router.replace(`/${nextLocale}${pathname}`);
    });
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height={20}
      width={48}
      borderRadius="16px"
      bgcolor="#ffffff30"
      sx={{ padding: "2px", cursor: "pointer" }}
      onClick={onSelectChangeLocale}
    >
      <Typography
        align="center"
        variant="body2"
        sx={{
          pl: "6px",
          pt: "3px",
          fontWeight: 500,
          color: theme.palette.common.white,
        }}
      >
        {locale.toUpperCase() === "TH" ? "EN" : "TH"}
      </Typography>
      <Box
        position="relative"
        width={16}
        height={16}
        borderRadius="50%"
        border={`1px solid ${theme.palette.primary.light}`}
        boxShadow={theme.shadows[2]}
      >
        <Image
          alt="lang-toggle-switcher"
          src={`/svgs/${locale === "th" ? "Enlang" : "THlang"}.svg`}
          fill
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};

export default CoreLangSwitcher;
