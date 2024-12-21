import { routing } from "@/i18n/routing";
import { MainLayout } from "@/views/layout/MainLayout";
import { Box } from "@mui/material";
import axios from "axios";
import { unstable_setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const fethProjectImages = async (locale: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/projects?locale=${locale}&populate=*&fields[0]=title`
    );
    return response.data.data;
  } catch (error: any) {
    console.log("error: ", error.message);
    return [];
  }
};

const AboutUsContent = dynamic(
  () => import("@/views/pages/Homepage/AboutUsContent")
);

const HeroProjects = dynamic(
  () => import("@/views/pages/Homepage/HeroProjects")
);

const QualityAssurance = dynamic(
  () => import("@/views/pages/Homepage/QualityAssurance")
);
const BlogsSection = dynamic(
  () => import("@/views/pages/Homepage/BlogsSection")
);

const OurServicesSection = dynamic(
  () => import("@/views/pages/Homepage/OurServicesSection")
);
const HeroBanner = dynamic(() => import("@/views/pages/Homepage/HeroBanner"));

export default async function HomePage({
  params,
}: {
  params: { locale: any };
}) {
  if (!routing.locales.includes(params.locale as any)) {
    notFound();
  }

  const projectImagesAndTitle = await fethProjectImages(params.locale);

  // Enable static rendering
  unstable_setRequestLocale(params.locale);

  return (
    <MainLayout
      fullWidth
      sxStyle={{
        backgroundImage: `url('/static/images/abstract-background.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box display="flex" flexDirection="column" sx={{ gap: { xs: 1, sm: 3 } }}>
        <HeroBanner />
        <AboutUsContent projects={projectImagesAndTitle} />
        <OurServicesSection />
        <HeroProjects />
        <QualityAssurance />
        <BlogsSection />
      </Box>
    </MainLayout>
  );
}
