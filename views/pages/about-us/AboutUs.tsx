"use client";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("aboutUsPage");
  const tC = useTranslations("aboutUsPage.coreValues");
  const tT = useTranslations("aboutUsPage.technicalExpertise");
  const tQ = useTranslations("aboutUsPage.qualityAssurance");
  const tS = useTranslations("aboutUsPage.sustainabilityImpact");

  return (
    <Box py={4} display="flex" flexDirection="column" sx={{ gap: 1 }}>
      <Typography variant="h5">{t("title")}</Typography>
      <Typography variant="body1">{t("subtitle")}</Typography>
      <Box my={2}>
        <Typography variant="h6">{tC("title")}</Typography>
        <Typography variant="subtitle2">
          {tC("innovationAndExcellence.title")}
        </Typography>
        <ul>
          {["bullet1", "bullet2", "bullet3", "bullet4"].map((b) => {
            return (
              <li key={b}>
                {tC.rich(`innovationAndExcellence.${b}` as any, {
                  strong: (chunks) => <b>{chunks}</b>,
                })}
              </li>
            );
          })}
        </ul>
      </Box>
      <Box my={2}>
        <Typography variant="subtitle2">
          {tC("qualityAndReliability.title")}
        </Typography>
        <ul>
          {["bullet1", "bullet2", "bullet3", "bullet4"].map((b) => {
            return (
              <li key={b}>
                {tC.rich(`qualityAndReliability.${b}` as any, {
                  strong: (chunks) => <b>{chunks}</b>,
                })}
              </li>
            );
          })}
        </ul>
      </Box>
      <Box my={2}>
        <Typography variant="subtitle2">{tC("customerFocus.title")}</Typography>
        <ul>
          {["bullet1", "bullet2", "bullet3", "bullet4"].map((b) => {
            return (
              <li key={b}>
                {tC.rich(`customerFocus.${b}` as any, {
                  strong: (chunks) => <b>{chunks}</b>,
                })}
              </li>
            );
          })}
        </ul>
      </Box>
      <Typography variant="h6">{tT("title")}</Typography>
      <Box my={2}>
        <Typography variant="subtitle2">
          {tT("engineeringExcellenceOurTechnicalTeamSpecializesIn.title")}
        </Typography>
        <ul>
          {["bullet1", "bullet2", "bullet3", "bullet4", "bullet5"].map((b) => {
            return (
              <li key={b}>
                {tT.rich(
                  `engineeringExcellenceOurTechnicalTeamSpecializesIn.${b}` as any,
                  {
                    strong: (chunks) => <b>{chunks}</b>,
                  }
                )}
              </li>
            );
          })}
        </ul>
      </Box>
      <Box my={2}>
        <Typography variant="subtitle2">
          {tT("projectExcellence.title")}
        </Typography>
        <ul>
          {["bullet1", "bullet2", "bullet3", "bullet4", "bullet5"].map((b) => {
            return (
              <li key={b}>
                {tT.rich(`projectExcellence.${b}` as any, {
                  strong: (chunks) => <b>{chunks}</b>,
                })}
              </li>
            );
          })}
        </ul>
      </Box>
      <Typography variant="h6">{tQ("title")}</Typography>
      <Box my={2}>
        <Typography variant="subtitle2">
          {tQ("equipmentStandards.title")}
        </Typography>
        <ul>
          {["bullet1", "bullet2", "bullet3", "bullet4", "bullet5"].map((b) => {
            return (
              <li key={b}>
                {tQ.rich(`equipmentStandards.${b}` as any, {
                  strong: (chunks) => <b>{chunks}</b>,
                })}
              </li>
            );
          })}
        </ul>
      </Box>
      <Box my={2}>
        <Typography variant="subtitle2">
          {tQ("installationStandards.title")}
        </Typography>
        <ul>
          {["bullet1", "bullet2", "bullet3", "bullet4", "bullet5"].map((b) => {
            return (
              <li key={b}>
                {tQ.rich(`installationStandards.${b}` as any, {
                  strong: (chunks) => <b>{chunks}</b>,
                })}
              </li>
            );
          })}
        </ul>
      </Box>
      <Typography variant="h6">{tS("title")}</Typography>
      <Box my={2}>
        <Typography variant="subtitle2">
          {tS("measurableResults.title")}
        </Typography>
        <ul>
          {["bullet1", "bullet2", "bullet3", "bullet4", "bullet5"].map((b) => {
            return (
              <li key={b}>
                {tS.rich(`measurableResults.${b}` as any, {
                  strong: (chunks) => <b>{chunks}</b>,
                })}
              </li>
            );
          })}
        </ul>
      </Box>
    </Box>
  );
};

export default AboutUs;
