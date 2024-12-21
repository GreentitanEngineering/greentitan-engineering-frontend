"use client";
import { useRouter } from "@/i18n/routing";
import AbstractLayer from "@/public/svgs/abstract_layer1.svg";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";

const OurServicesSection = () => {
  const router = useRouter();
  const theme = useTheme();
  const t = useTranslations("homePage.ourService");
  return (
    <Box
      position="relative"
      width="100%"
      bgcolor={theme.palette.primary.main}
      py={8}
      sx={{ overflow: "hidden" }}
    >
      <Container>
        <Box
          position="absolute"
          bottom={0}
          right={0}
          zIndex={1}
          sx={{ transform: "rotate(180deg)", opacity: 0.6 }}
        >
          <AbstractLayer style={{ filter: "brightness(1.5)" }} />
        </Box>
        <Box
          position="absolute"
          top={0}
          left={0}
          zIndex={1}
          sx={{ transform: "rotate(0deg)", opacity: 0.6 }}
        >
          <AbstractLayer style={{ filter: "brightness(1.5)" }} />
        </Box>
        <Box
          position="relative"
          width="100%"
          display="flex"
          justifyContent="center"
          textAlign="center"
          flexDirection="column"
          sx={{ gap: 4 }}
          zIndex={2}
        >
          <Box
            display="flex"
            textAlign="center"
            flexDirection="column-reverse"
            sx={{ gap: 1 }}
          >
            <Typography
              variant="h3"
              sx={{ lineHeight: 1, color: theme.palette.common.white }}
            >
              {t("title")}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.common.white }}
            >
              {t("preTitle")}
            </Typography>
          </Box>
          <Box
            mt={2}
            width="100%"
            display="grid"
            sx={{
              gridTemplateColumns: {
                xs: `repeat(1,1fr)`,
                md: `repeat(2,1fr)`,
                lg: `repeat(3,1fr)`,
              },
              gap: 3,
            }}
          >
            {Array.from({ length: 3 }).map((_, index) => {
              const title = t(`services.service${index + 1}.title` as any);
              const description = t(
                `services.service${index + 1}.description` as any
              );
              const imageUrl = t(
                `services.service${index + 1}.imageUrl` as any
              );
              return (
                <Box
                  key={index}
                  display="flex"
                  textAlign="center"
                  alignItems="center"
                  flexDirection="column"
                  sx={{ gap: 2 }}
                  width="100%"
                  borderRadius={2}
                  boxShadow={theme.shadows[4]}
                  bgcolor={theme.palette.grey[100]}
                >
                  <Box
                    sx={{ borderRadius: 2 }}
                    position="relative"
                    width="100%"
                    height={240}
                  >
                    <Image
                      alt={`service_${index}_image`}
                      src={imageUrl}
                      fill
                      style={{
                        borderRadius: "8px 8px 0px 0px",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </Box>
                  <Box
                    display="flex"
                    textAlign="center"
                    alignItems="center"
                    flexDirection="column"
                    sx={{ gap: 2 }}
                    px={6}
                    py={3}
                  >
                    <Typography
                      variant={"h1"}
                      color="textPrimary"
                      sx={{
                        lineHeight: 1,
                        fontSize: {
                          xs: theme.typography.h4.fontSize,
                          lg: theme.typography.h6.fontSize,
                        },
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                      variant="body1"
                      color="textSecondary"
                    >
                      {description}
                    </Typography>
                    <Button
                      sx={{ maxWidth: "max-content" }}
                      variant="contained"
                      onClick={() => router.push("/our-services")}
                    >
                      {t("services.buttonText")}
                    </Button>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurServicesSection;
