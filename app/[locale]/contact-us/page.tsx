import { MainLayout } from "@/views/layout/MainLayout";
import { Box } from "@mui/material";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import Image from "next/image";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import ContactUs from "@/views/pages/contact-us/ContactUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ติดต่อเรา",
};

const page = ({ params }: { params: { locale: string } }) => {
  if (!routing.locales.includes(params.locale as any)) {
    notFound();
  }

  unstable_setRequestLocale(params.locale);

  return (
    <MainLayout
      sxStyle={{
        backgroundImage: `url('/static/images/abstract_right.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "auto",
      }}
    >
      <Box
        width="100%"
        height={{ xs: 120, md: 240 }}
        position="relative"
        mt={3}
      >
        <Image
          alt="top-header-banner"
          src="/static/images/engineering-talking.jpg"
          fill
          sizes="100vw"
          objectFit="cover"
          objectPosition="center"
          style={{ borderRadius: 8 }}
        />
      </Box>
      <ContactUs />
    </MainLayout>
  );
};

export default page;
