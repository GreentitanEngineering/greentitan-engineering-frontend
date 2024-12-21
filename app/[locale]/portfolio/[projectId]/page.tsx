import ProjectDetailPage from "@/views/pages/portfolio-projects/ProjectDetailPage";
import axios from "axios";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

const fetchProjectById = async (locale: string, projectId: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/projects/${projectId}?populate=*&locale=${locale}`
    );
    return response?.data?.data;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
};

type Props = {
  params: Promise<{ locale: string; projectId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = (await params).projectId ?? "";
  const locale = (await searchParams).locale ?? "";

  // fetch data
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/projects/${id}?populate=*&locale=${locale}`
  );
  const project = response?.data?.data;
  // optionally access and extend (rather than replace) parent metadata
  const previousImages =
    (await project).projectImages?.map(
      (p: any) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${p.url}`
    ) || [];

  return {
    title: project.title,
    description: project.subtitle,
    openGraph: {
      images: ["/static/images/hero_banner_mobile.png", ...previousImages],
    },
  };
}

const page = async ({ params, searchParams }: Props) => {
  const projectData = await fetchProjectById(
    (
      await params
    ).locale,
    (
      await params
    ).projectId
  );
  if (!projectData) notFound();
  return <ProjectDetailPage project={projectData} />;
};

export default page;
