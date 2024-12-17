import { MainLayout } from "@/views/layout/MainLayout";
import { Box } from "@mui/material";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import Image from "next/image";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import AboutUs from "@/views/pages/about-us/AboutUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
};

const page = ({ params }: { params: { locale: string } }) => {
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
        mt={3}
      >
        <Image
          alt="top-header-banner"
          src="/static/images/aboutUs-test-bg.jpeg"
          fill
          sizes="100vw"
          objectFit="cover"
          objectPosition="center"
          style={{ borderRadius: 8 }}
        />
      </Box>
      <AboutUs />
    </MainLayout>
  );
};

export default page;
