"use client";
import { ArrowRightAlt, KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Divider,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import numeral from "numeral";
import React from "react";
import SolarPanel from "@/public/svgs/SolarPanel.svg";
import Bolt from "@/public/svgs/Bolt.svg";
import CalendarChecked from "@/public/svgs/CalendarChecked.svg";
import HartHat from "@/public/svgs/HartHat.svg";
import SignaturedFile from "@/public/svgs/SignaturedFile.svg";
import ThumbsUp from "@/public/svgs/ThumbsUp.svg";
import axios from "axios";
import { Link } from "@/i18n/routing";

const fetchSolarSystemPrice = async (
  setPrice: React.Dispatch<React.SetStateAction<any[]>>
) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/solar-system-prices`
    );
    if (response?.data?.data) {
      setPrice(response?.data?.data);
    }
  } catch (error) {
    console.log("error: ", error);
    setPrice([]);
  }
};

const fetchEVChargingPrice = async (
  setPrice: React.Dispatch<React.SetStateAction<any[]>>
) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/ev-charging-prices?populate=*`
    );
    if (response?.data?.data) {
      setPrice(response?.data?.data);
    }
  } catch (error) {
    console.log("error: ", error);
    setPrice([]);
  }
};

const SolarPackage = ({ prices }: { prices: any[] }) => {
  const locale = useLocale();
  const theme = useTheme();

  const t = useTranslations("ourServicesPage.panel1.packages");
  const tp = useTranslations("ourServicesPage.panel1.packages.package");

  const additionalServices = [
    {
      icon: <CalendarChecked width={20} height={20} />,
      text: t("additionalService.bullet1"),
    },
    {
      icon: <HartHat width={20} height={20} />,
      text: t("additionalService.bullet2"),
    },
    {
      icon: <SignaturedFile width={20} height={20} />,
      text: t("additionalService.bullet3"),
    },
    {
      icon: <ThumbsUp width={20} height={20} />,
      text: t("additionalService.bullet4"),
    },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      sx={{ gap: 2 }}
      mt={{ xs: 3, sm: 6 }}
    >
      <Box display="flex" width="100%" mb={{ xs: 0, sm: 2 }}>
        <Typography variant="h5">{t("packageTitle")}</Typography>
      </Box>
      <Box
        display="grid"
        width="100%"
        sx={{
          gridTemplateColumns: {
            xs: `repeat(1,1fr)`,
            sm: `repeat(2,1fr)`,
            lg: `repeat(3,1fr)`,
          },
          gap: { xs: 2, sm: 2 },
        }}
      >
        {prices?.map((item, index) => {
          const phase = item.phase === "one" ? "1" : "3";
          return (
            <Box
              key={index}
              position="relative"
              display="flex"
              width="100%"
              flexDirection="column"
              boxShadow={theme.shadows[3]}
              py={3}
              border={`1px solid ${theme.palette.grey[200]}`}
              borderRadius={2}
              sx={{ gap: 3 }}
            >
              <Box
                px={2}
                sx={{ flexGrow: 1, gap: 0.5 }}
                display="flex"
                flexDirection="column"
              >
                <Box display="flex" alignItems="center" sx={{ gap: 1 }}>
                  <Typography
                    variant="h5"
                    color={phase == "1" ? "primary" : "error"}
                  >
                    {numeral(item.power).format("0,0.00")} {tp("power_unit")}
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center" sx={{ gap: 1 }}>
                  <SolarPanel
                    width={18}
                    height={18}
                    style={{ marginBottom: 4 }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ lineHeight: 1, fontWeight: 400 }}
                  >
                    {item.panelQuntity} {tp("panelQuntity_unit")}, {phase}{" "}
                    {tp("phase_unit")}
                  </Typography>
                </Box>
              </Box>
              <Box
                px={2}
                display="flex"
                flexDirection="column"
                sx={{ flexShrink: 0, gap: 0.5 }}
              >
                <Typography variant="subtitle2" sx={{ lineHeight: 1 }}>
                  {locale === "en" && "฿"}{" "}
                  {numeral(item.price).format("0,0.[00]")}{" "}
                  {locale === "th" && "บาท"}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {tp("excludeVatText")}
                </Typography>
              </Box>
              <Divider />
              <Box px={2}>
                <Typography
                  variant="body2"
                  sx={{ lineHeight: 1, fontWeight: 400 }}
                  color="textSecondary"
                >
                  {locale == "th"
                    ? "สนใจแพ็กเกจหรือสอบถาม"
                    : "Interesting? contact us for more"}{" "}
                  <Link
                    style={{
                      color: theme.palette.primary.main,
                      fontWeight: 700,
                    }}
                    href="/contact-us"
                  >
                    {locale === "th" ? "ติดต่อสอบถาม" : "Contact us"}
                  </Link>
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box
        my={{ xs: 0, sm: 3 }}
        display="grid"
        sx={{ gridTemplateColumns: "repeat(1,1fr)", gap: 4 }}
      >
        <Box display="flex" flexDirection="column" sx={{ gap: 2 }}>
          <Typography variant="subtitle2">
            <b>{t("additionalService.title")}</b>
          </Typography>
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            width="100%"
            sx={{
              gap: { xs: 1, sm: 3 },
              fontSize: theme.typography.button.fontSize,
              fontWeight: 500,
            }}
          >
            {additionalServices.map(({ icon, text }, index) => {
              return (
                <Box display="flex" alignItems={"center"} key={index}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems={"center"}
                    p={1}
                    width={{ xs: 32, sm: 40 }}
                    height={{ xs: 32, sm: 40 }}
                    borderRadius="50%"
                  >
                    {icon}
                  </Box>
                  <Typography variant="body1">{text}</Typography>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          sx={{
            fontSize: theme.typography.button.fontSize,
            color: theme.palette.primary.dark,
          }}
          bgcolor={theme.palette.primary.light}
          borderRadius={2}
          p={2}
        >
          <Typography>
            <b>{t("remark.title")}</b>
          </Typography>
          <ul>
            <li>{t("remark.bullet1")}</li>
            <li>{t("remark.bullet2")}</li>
            <li>{t("remark.bullet3")}</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

const EvChargingPackage = ({ prices }: { prices: any[] }) => {
  const locale = useLocale();
  const theme = useTheme();

  const t = useTranslations("ourServicesPage.panel2.packages");
  const tp = useTranslations("ourServicesPage.panel2.packages.package");
  const additionalServices = [
    {
      icon: <CalendarChecked width={20} height={20} />,
      text: t("additionalService.bullet1"),
    },
    {
      icon: <ThumbsUp width={20} height={20} />,
      text: t("additionalService.bullet2"),
    },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      sx={{ gap: 2 }}
      mt={{ xs: 3, sm: 6 }}
    >
      <Box display="flex" width="100%" mb={{ xs: 0, sm: 2 }}>
        <Typography variant="h5">{t("packageTitle")}</Typography>
      </Box>
      <Box
        display="grid"
        width="100%"
        sx={{
          gridTemplateColumns: {
            xs: `repeat(1,1fr)`,
            sm: `repeat(2,1fr)`,
            lg: `repeat(3,1fr)`,
          },
          gap: 2,
        }}
      >
        {prices?.map((item, index) => {
          return (
            <Box
              position="relative"
              display="flex"
              width="100%"
              flexDirection="column"
              boxShadow={theme.shadows[3]}
              py={3}
              border={`1px solid ${theme.palette.grey[200]}`}
              borderRadius={2}
              key={index}
              sx={{ gap: { xs: 2, sm: 2 } }}
            >
              <Box
                display="flex"
                width="100%"
                flexDirection="column"
                px={2}
                sx={{ gap: { xs: 2, sm: 2 } }}
              >
                <Box
                  sx={{ flexGrow: 1, gap: 1 }}
                  display="flex"
                  flexDirection="column"
                >
                  <Box
                    width="100%"
                    display="flex"
                    alignItems="center"
                    sx={{ gap: 2 }}
                  >
                    <Box sx={{ flexShrink: 0 }}>
                      <img
                        alt={`price-list-brandImage-${index}`}
                        src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/${item.brandImageUrl.url}`}
                        width="100%"
                        style={{ maxWidth: 80 }}
                      />
                    </Box>
                    <Chip
                      size="small"
                      sx={{ maxWidth: "max-content", px: 0.5 }}
                      label={`${item.power} ${tp("power_unit")}`}
                      variant="outlined"
                      color={"primary"}
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ fontSize: 14 }}
                  >
                    {item.modelDetail}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Box
                    display="flex"
                    flexDirection="column"
                    sx={{ flexShrink: 0, gap: 0.5 }}
                  >
                    <Typography variant="subtitle2" sx={{ lineHeight: 1 }}>
                      {locale === "en" && "฿"}{" "}
                      {numeral(parseFloat(item.price)).format("0,0.[00]")}{" "}
                      {locale === "th" && "บาท"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {tp("excludeVatText")}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Divider />
              <Box px={2}>
                <Typography
                  variant="body2"
                  sx={{ lineHeight: 1, fontWeight: 400 }}
                  color="textSecondary"
                >
                  {locale == "th"
                    ? "สนใจแพ็กเกจหรือสอบถาม"
                    : "Interesting? contact us for more"}{" "}
                  <Link
                    style={{
                      color: theme.palette.primary.main,
                      fontWeight: 700,
                    }}
                    href="/contact-us"
                  >
                    {locale === "th" ? "ติดต่อสอบถาม" : "Contact us"}
                  </Link>
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box display="grid" sx={{ gridTemplateColumns: "repeat(1,1fr)" }}>
        <Box
          my={{ xs: 0, sm: 3 }}
          display="grid"
          sx={{ gridTemplateColumns: "repeat(1,1fr)", gap: 4 }}
        >
          <Box display="flex" flexDirection="column" sx={{ gap: 2 }}>
            <Typography variant="subtitle2">
              <b>{t("additionalService.title")}</b>
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              width="100%"
              sx={{
                gap: { xs: 1, sm: 3 },
                fontSize: theme.typography.button.fontSize,
                fontWeight: 500,
              }}
            >
              {additionalServices.map(({ icon, text }, index) => {
                return (
                  <Box display="flex" alignItems={"center"} key={index}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      p={1}
                      width={40}
                      height={40}
                      borderRadius="50%"
                    >
                      {icon}
                    </Box>
                    <Typography variant="body1">{text}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              fontSize: theme.typography.button.fontSize,
              color: theme.palette.primary.dark,
            }}
            bgcolor={theme.palette.primary.light}
            borderRadius={2}
            p={2}
          >
            <Typography>
              <b>{t("remark.title")}</b>
            </Typography>
            <ul>
              <li>{t("remark.bullet1")}</li>
              <li>{t("remark.bullet2")}</li>
              <li>{t("remark.bullet3")}</li>
              <li>{t("remark.bullet4")}</li>
              <li>{t("remark.bullet5")}</li>
              <li>{t("remark.bullet6")}</li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const OurServices = () => {
  const locale = useLocale();
  const router = useRouter();
  const theme = useTheme();

  const t = useTranslations("ourServicesPage");
  const panelKeys = ["panel1", "panel2", "panel3"] as const;
  const [projectImages, setProjectImages] = React.useState<
    { imageUrl: string; projectType: string }[]
  >([]);

  const [solarSystemPrices, setSolarSystemPrices] = React.useState<any[]>([]);
  const [evChargingPrices, setEVChargingPrices] = React.useState<any[]>([]);
  console.log("process.env : ", process.env);
  React.useEffect(() => {
    const fetchProjectImages = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/projects?populate=thumbnail`
        );
        const thumbnails =
          response.data?.data?.map((o: any) => {
            return {
              projectType: o.ProjectType,
              imageUrl: o.thumbnail.url,
            };
          }) ?? [];
        setProjectImages(thumbnails);
      } catch (e: any) {
        console.log(e);
      }
    };
    fetchProjectImages();
    fetchSolarSystemPrice(setSolarSystemPrices);
    fetchEVChargingPrice(setEVChargingPrices);
  }, []);

  return (
    <>
      <Box
        width="100%"
        position="relative"
        mt={3}
        height={{ xs: 160, sm: 320 }}
      >
        <Image
          alt="top-header-banner"
          src="/static/images/ourservices-test-header-bg.jpeg"
          fill
          sizes="100vw"
          objectFit="cover"
          objectPosition="center"
          style={{ borderRadius: 8 }}
        />
      </Box>
      <Box
        width="100%"
        py={4}
        display="flex"
        flexDirection="column"
        sx={{ gap: 4 }}
      >
        <Box display="flex" flexDirection="column-reverse" sx={{ gap: 1 }}>
          <Typography component="h1" align="center" variant="h4">
            {t("titleBold")}
          </Typography>
          <Typography component="h2" align="center" variant="subtitle1">
            {t("title")}
          </Typography>
        </Box>
        <Typography variant="body1">
          {t.rich("paragraph1", {
            strong: (chunks) => (
              <b
                style={{
                  color: theme.palette.primary.main,
                  fontSize: theme.typography.h6.fontSize,
                }}
              >
                {chunks}
              </b>
            ),
          })}
        </Typography>
        <Typography variant="body1">{t("paragraph2")}</Typography>
        {panelKeys.map((key, index) => {
          const filter =
            index == 0
              ? "SolarSystem"
              : index == 1
              ? "EVCharging"
              : "PowerDistribution";
          return (
            <Box
              key={index}
              width="100%"
              p={3}
              boxShadow={theme.shadows[6]}
              bgcolor={theme.palette.common.white}
              color={theme.palette.text.primary}
              borderRadius={3}
            >
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={"flex-start"}
                sx={{ gap: 3 }}
              >
                <Box
                  sx={{ flexShrink: 0, display: { xs: "none", sm: "block" } }}
                  position="relative"
                  width={{ sm: 120 }}
                  height={{ sm: 120 }}
                >
                  <Image alt={key} src={t(`${key}.imageUrl` as any)} fill />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Box
                    display="flex"
                    alignItems="center"
                    flexDirection={{ sm: "row", xs: "column" }}
                    sx={{ gap: 2 }}
                  >
                    <Box
                      sx={{
                        flexShrink: 0,
                        display: { sm: "none", xs: "block" },
                      }}
                      position="relative"
                      width={{ xs: 64, sm: 120 }}
                      height={{ xs: 64, sm: 120 }}
                    >
                      <Image alt={key} src={t(`${key}.imageUrl` as any)} fill />
                    </Box>

                    <Typography variant="h5">{t(`${key}.title`)}</Typography>
                  </Box>

                  <ul>
                    <li>
                      {t(`${key}.bullet1`) && (
                        <Typography variant="body1">
                          {t(`${key}.bullet1`)}
                        </Typography>
                      )}
                    </li>

                    {index !== 2 && (
                      <li>
                        <Typography variant="body1">
                          {t(`${key}.bullet2` as any)}
                        </Typography>
                      </li>
                    )}

                    {index !== 2 && (
                      <li>
                        <Typography variant="body1">
                          {t(`${key}.bullet3` as any)}
                        </Typography>
                      </li>
                    )}
                  </ul>
                  <Box
                    display="grid"
                    sx={{
                      gridTemplateColumns: {
                        xs: `repeat(2,1fr)`,
                        sm: `repeat(4,1fr)`,
                      },
                      gap: 2,
                    }}
                    pb={2}
                  >
                    {projectImages
                      .filter((p) => p.projectType === filter)
                      ?.map((o: any, index) => {
                        if (!o.imageUrl) return null;
                        return (
                          <img
                            key={index}
                            alt={`image_project_${index}`}
                            src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${o.imageUrl}`}
                            width="100%"
                            style={{ borderRadius: 8 }}
                          />
                        );
                      })}
                  </Box>
                  <Button
                    variant="outlined"
                    endIcon={<KeyboardArrowRight />}
                    sx={{ width: "max-content" }}
                    onClick={() =>
                      router.push(`/${locale}/portfolio?filter=${filter}`)
                    }
                  >
                    {t(`buttonText`)}
                  </Button>
                  {key === "panel1" && (
                    <SolarPackage prices={solarSystemPrices} />
                  )}
                  {key === "panel2" && (
                    <EvChargingPackage prices={evChargingPrices} />
                  )}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default OurServices;
