import { routing } from "@/i18n/routing";
import { MainLayout } from "@/views/layout/MainLayout";
import { Box } from "@mui/material";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import PortfolioAndProjects from "@/views/pages/portfolio-projects/PortfolioAndProjects";
import axios from "axios";

export const metadata: Metadata = {
  title: "ผลงานของเรา",
};

const page = async ({
  params,
}: {
  params: { locale: string; project: string };
}) => {
  if (!routing.locales.includes(params.locale as any)) {
    notFound();
  }
  unstable_setRequestLocale(params.locale);

  return (
    <MainLayout>
      <Box
        width="100%"
        height={{ xs: 120, md: 240 }}
        position="relative"
        my={3}
      >
        <Image
          alt="top-header-banner"
          src="/static/images/portfolio-test-image.png"
          fill
          sizes="100vw"
          objectFit="cover"
          objectPosition="center"
          style={{ borderRadius: 8 }}
        />
      </Box>
      <PortfolioAndProjects />
    </MainLayout>
  );
};

export default page;
