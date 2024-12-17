"use client";
import { Link } from "@/i18n/routing";
import {
  EmailOutlined,
  Person2Outlined,
  PhoneOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

type FormValuesType = {
  type: "personal" | "juristic";
  fullName: string;
  phone: string;
  lineId: string;
  email: string;
  message: string;
  consent: boolean;
};

const ContactForm = () => {
  const locale = useLocale();
  const theme = useTheme();
  const t = useTranslations("contactUsPage");

  const [formValues, setFormValues] = React.useState<FormValuesType>({
    type: "personal",
    fullName: "",
    phone: "",
    lineId: "",
    email: "",
    message: "",
    consent: false,
  });

  const handleSendEmail = async () => {
    try {
      await fetch("/api/emailSender", {
        method: "POST",
        body: JSON.stringify(formValues),
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleFormValue = (key: string, value: string) => {
    if (value && key) {
      setFormValues((prev) => ({
        ...prev,
        [key]: value,
      }));
    }
  };

  return (
    <Box
      p={3}
      boxShadow={theme.shadows[4]}
      display="flex"
      flexDirection="column"
      sx={{ gap: 2 }}
      borderRadius={3}
      bgcolor={theme.palette.common.white}
      maxHeight="max-content"
    >
      <Box display="flex" flexDirection="column" sx={{ gap: 1 }}>
        <Typography variant="body2">{t("contactFormTitle")}</Typography>
        <Typography variant="h4">{t("contactFormSubTitle")}</Typography>
      </Box>
      <Box>
        <RadioGroup
          defaultValue={formValues.type}
          row
          onChange={(e) =>
            setFormValues((prev) => ({
              ...prev,
              type: e.target.value as "personal" | "juristic",
            }))
          }
        >
          <FormControlLabel
            control={<Radio color="primary" size="small" />}
            value="personal"
            label={t("formLabel.personalLabel")}
          />
          <FormControlLabel
            control={<Radio color="primary" size="small" />}
            value="juristic"
            label={t("formLabel.juristicLabel")}
          />
        </RadioGroup>
      </Box>
      <Box
        display="grid"
        sx={{ gap: 1, gridTemplateColumns: "repeat(1,1fr)", columnGap: 3 }}
      >
        <Box>
          <FormLabel>
            {formValues.type === "personal"
              ? t("formLabel.fullName")
              : t("formLabel.companyName")}
          </FormLabel>
          <TextField
            onChange={(e) => {
              if (e.target.value) {
                const value = e.target.value;
                handleFormValue("name", value);
              }
            }}
            variant="outlined"
            fullWidth
            placeholder={`${t("formLabel.placeHolderPrefix")} ${
              formValues.type === "personal"
                ? t("formLabel.fullName")
                : t("formLabel.companyName")
            }`}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Person2Outlined fontSize="small" />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>
      </Box>
      <Box
        display="grid"
        sx={{
          gap: 1,
          gridTemplateColumns: "repeat(2,1fr)",
          columnGap: 3,
        }}
      >
        <Box>
          <FormLabel>{t("formLabel.phone")}</FormLabel>
          <TextField
            onChange={(e) => {
              if (e.target.value) {
                const value = e.target.value;
                handleFormValue("phone", value);
              }
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneOutlined fontSize="small" />
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined"
            fullWidth
            placeholder={`${t("formLabel.placeHolderPrefix")} ${t(
              "formLabel.phone"
            )}`}
          />
        </Box>

        <Box>
          <FormLabel>{t("formLabel.lineId")}</FormLabel>
          <TextField
            onChange={(e) => {
              if (e.target.value) {
                const value = e.target.value;
                handleFormValue("lineId", value);
              }
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Image
                      alt="line-logo"
                      src="/svgs/LineLogo.svg"
                      width={20}
                      height={20}
                      loading="eager"
                      priority
                    />
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined"
            fullWidth
            placeholder={`${t("formLabel.placeHolderPrefix")} ${t(
              "formLabel.lineId"
            )}`}
          />
        </Box>
      </Box>
      <Box width="100%">
        <FormLabel>{t("formLabel.email")}</FormLabel>
        <TextField
          onChange={(e) => {
            if (e.target.value) {
              const value = e.target.value;
              handleFormValue("email", value);
            }
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          fullWidth
          placeholder={`${t("formLabel.placeHolderPrefix")} ${t(
            "formLabel.email"
          )}`}
        />
      </Box>
      <Box width="100%">
        <FormLabel>{t("formLabel.message")}</FormLabel>
        <TextField
          onChange={(e) => {
            if (e.target.value) {
              const value = e.target.value;
              handleFormValue("message", value);
            }
          }}
          placeholder={t("formLabel.messagePlaceholder")}
          multiline
          minRows={4}
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box width="100%" display="flex">
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              color="primary"
              sx={{ py: 0 }}
              onChange={(e, checked) =>
                setFormValues((prev) => ({ ...prev, consent: checked }))
              }
            />
          }
          label={
            <Typography>
              {t("formLabel.consentText")}{" "}
              <Link
                style={{ fontWeight: 700, color: theme.palette.primary.main }}
                href="/term-and-services"
              >
                {t("formLabel.termAndServiceLabel")}
              </Link>{" "}
              {locale == "th" ? "และ" : "and"}{" "}
              <Link
                style={{ fontWeight: 700, color: theme.palette.primary.main }}
                href="/privacy-policy"
              >
                {t("formLabel.pdpaLabel")}
              </Link>
            </Typography>
          }
          sx={{ display: "flex", alignItems: "flex-start" }}
        />
      </Box>
      <Box width="100%" display="flex" justifyContent="center">
        <Button
          disabled={!formValues.consent}
          onClick={handleSendEmail}
          fullWidth
          variant="contained"
          sx={{ maxWidth: 160 }}
        >
          {t("formLabel.submitButton")}
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
