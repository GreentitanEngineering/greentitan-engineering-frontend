import { MainLayout } from "@/views/layout/MainLayout";
import { Typography } from "@mui/material";
import axios from "axios";
import { Metadata } from "next";
import { Suspense } from "react";
import NotFound from "../not-found";

export const metadata: Metadata = {
  title: "PDPA policy - นโยบายการคุ้มครองข้อมูลส่วนบุคคล",
};

const fetchPDPA = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/pdpa`
    );

    return response.data.data;
  } catch (error: any) {
    console.log(error.message);

    return null;
  }
};

const page = async () => {
  const pdpda = await fetchPDPA();
  return (
    <Suspense fallback={NotFound()}>
      <MainLayout sxStyle={{ my: { xs: 4, sm: 6 } }}>
        <Typography variant="h3">{pdpda.title}</Typography>
        <div dangerouslySetInnerHTML={{ __html: pdpda.description }} />
      </MainLayout>
    </Suspense>
  );
};
export default page;
