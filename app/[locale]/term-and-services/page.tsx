import { MainLayout } from "@/views/layout/MainLayout";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { Metadata } from "next";
import React, { Suspense } from "react";
import NotFound from "../not-found";

export const metadata: Metadata = {
  title: "Term of services - เงื่อนไขข้อตกลงการใช้บริการ",
};

const fetchTermAndService = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/term-and-service`
    );

    return response.data.data;
  } catch (error: any) {
    console.log(error.message);

    return null;
  }
};

const page = async () => {
  const termAndService = await fetchTermAndService();
  return (
    <Suspense fallback={NotFound()}>
      <MainLayout sxStyle={{ my: { xs: 4, sm: 6 } }}>
        <Typography variant="h3">{termAndService.title}</Typography>
        <div dangerouslySetInnerHTML={{ __html: termAndService.description }} />
      </MainLayout>
    </Suspense>
  );
};

export default page;
