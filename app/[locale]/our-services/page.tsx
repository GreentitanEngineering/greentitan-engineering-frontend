import { routing } from "@/i18n/routing";
import { MainLayout } from "@/views/layout/MainLayout";
import OurServices from "@/views/pages/our-services/OurServices";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "บริการของเรา",
};

const page = ({ params }: { params: { locale: string } }) => {
  if (!routing.locales.includes(params.locale as any)) {
    notFound();
  }

  unstable_setRequestLocale(params.locale);

  return (
    <MainLayout
      sxStyle={{
        backgroundImage: `url('/static/images/abstract_right.png'),url('/static/images/abstract_left.png')`,
        backgroundRepeat: "no-repeat,no-repeat",
        backgroundPosition: "right, left",
        backgroundSize: "auto",
      }}
    >
      <OurServices />
    </MainLayout>
  );
};

export default page;
