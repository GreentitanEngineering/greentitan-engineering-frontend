import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";

//Material UI
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import { unstable_setRequestLocale } from "next-intl/server";
import theme from "@/theme";

// Global CSS
import "../global.css";
import { Metadata } from "next";
import notFound from "./not-found";

const ibm_font = IBM_Plex_Sans_Thai({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["thai"],
  display: "auto",
  variable: "--font-ibm-font",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Green Titan Engineering ผู้นำด้านโซลูชั่นพลังงานทางเลือก",
    default: "Green Titan Engineering ผู้นำด้านโซลูชั่นพลังงานทางเลือก",
  },
  description:
    "เราเป็นผู้นำด้านโซลูชั่นพลังงานทางเลือก บริการครบวงจรของเรารวมถึงการออกแบบ การติดตั้ง การบริหารโครงการ และการให้คำปรึกษาสำหรับระบบโซลาร์รูฟท็อป สถานีชาร์จรถยนต์ไฟฟ้า และระบบจ่ายไฟฟ้า",
  keywords: [
    "Primary Keyword",
    "Secondary Keyword",
    "Tertiary Keyword",
    "Additional Relevant Keywords",
  ],
  authors: [
    {
      name: "Green titan Engineering",
      url: "https://greentitan-engineering.com",
    },
  ],
  // openGraph: {
  //   title: "Your Perfect Page Title - Brand Name",
  //   description: "A detailed and compelling description for Open Graph.",
  //   url: "https://yourwebsite.com/page-url",
  //   siteName: "Your Website Name",
  //   type: "website", // or 'article', 'profile', etc. based on the page
  //   images: [
  //     {
  //       url: "https://yourwebsite.com/images/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "A descriptive alt text for the image",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image", // or 'summary', depending on your image setup
  //   site: "@YourTwitterHandle",
  //   creator: "@YourPersonalHandle",
  //   title: "Your Perfect Page Title - Brand Name",
  //   description: "A compelling description for Twitter card.",
  //   images: ["https://yourwebsite.com/images/twitter-image.jpg"],
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  //   "max-snippet": -1, // Default is no limit
  //   "max-image-preview": "large", // 'large', 'standard', or 'none'
  //   "max-video-preview": -1, // Default is no limit
  // },
  // alternates: {
  //   canonical: "https://yourwebsite.com/page-url",
  //   languages: {
  //     "en-US": "https://yourwebsite.com/page-url",
  //     "fr-FR": "https://yourwebsite.com/fr/page-url", // Example for localization
  //   },
  // },
  other: {
    "google-site-verification": "Google-Site-Verification-Token",
    "msvalidate.01": "Bing-Site-Verification-Token",
    "yandex-verification": "Yandex-Site-Verification-Token",
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={ibm_font.className}>
        <NextIntlClientProvider messages={messages}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
