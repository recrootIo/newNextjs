"use client";
import {
  Box,
  Stack,
  Button,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Chip,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import React from "react";
import Image from "next/image";
import { getImageLogo, getSalary } from "../JobListings/SearchSection";
import moment from "moment";
import styles from "./companyprofileview.module.css";
import { useRouter } from "next/router";
import { replaceSlashes } from "@/utils/HelperFunctions";

const JobsCard = ({
  immediate,
  featureType,
  jobRole,
  company,
  jobType,
  essentialInformation,
  salary,
  jobTitle,
  _id,
  address,
  applicationDeadline,
}) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(
      `/jobs/${replaceSlashes(jobTitle)}/${replaceSlashes(jobRole)}/${_id}`
    );
  };

  return (
    <Card className={styles.CompanyjobsCard}>
      <CardContent className={styles.CompanyjobsCard} style={{ pb: 0 }}>
        <Box>
          <Stack
            direction="row"
            sx={{
              p: "10px",
              gap: "10px",
              borderBottom: "1px solid rgba(3, 66, 117, 0.15)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "3px",
                maxHeight: "100px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              <CustomTypography
                sx={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#034275",
                  display: { md: "flex", sm: "none", xs: "none" },
                }}
              >
                Graphic Designer
              </CustomTypography>
              <CustomTypography
                sx={{
                  fontSize: 17,
                  fontWeight: "bold",
                  color: "#034275",
                  display: { md: "none", sm: "flex", xs: "flex" },
                }}
              >
                Graphic Designer
              </CustomTypography>

              <div>
                <CustomTypography
                  sx={{ fontSize: 15, color: "#034275", fontWeight: "600" }}
                >
                  ABC Company
                </CustomTypography>
              </div>
            </Box>
          </Stack>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              justifyContent: "flex-start",
              minHeight: "25px",
              ml: "8px",
              mt: "10px",
            }}
          >
            {immediate && (
              <Chip
                label="Immediate"
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "#296ac4",
                  color: "white",
                  fontWeight: 600,
                  height: "25px",
                }}
              />
            )}

            {featureType && (
              <Chip
                label="featured"
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "#c45a29",
                  color: "white",
                  fontWeight: 600,
                  height: "25px",
                }}
              />
            )}
          </Box>
          <Stack spacing={0.5}>
            <Box sx={{ display: "flex", mt: "10px" }}>
              <Image
                className={styles.CompanyiconImg}
                src="/location.png"
                alt=""
                width={14}
                height={14}
              />

              <CustomTypography
                variant="body2"
                className={styles.CompanyInputText}
                gutterBottom
              >
                Colombo, Sri Lanka
              </CustomTypography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Image
                className={styles.CompanyiconImg}
                src="/currency.png"
                alt=""
                width={14}
                height={14}
              />

              <CustomTypography
                className={styles.CompanyInputText}
                gutterBottom
              >
                120 000
              </CustomTypography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Image
                className={styles.CompanyiconImg}
                src="/bag.png"
                alt=""
                width={14}
                height={14}
              />

              <CustomTypography
                variant="body2"
                className={styles.CompanyInputText}
                gutterBottom
              >
                remote
              </CustomTypography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Image
                className={styles.CompanyiconImg}
                src="/hourglass.png"
                alt=""
                width={14}
                height={14}
              />

              <CustomTypography
                variant="body2"
                className={styles.CompanyInputText}
                gutterBottom
              >
                2 years
              </CustomTypography>
            </Box>
          </Stack>
          <Box className="btnBox">
            {/* <Button
                className="bookmarkBtn"
                size="medium"
                variant="outlined"
                bgcolor="#02A9F7 !important"
              >
                <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
              </Button> */}
            <Button
              className="viewDetailBtn"
              variant="contained"
              size="medium"
              onClick={() => handleNavigate()}
            >
              View Details
            </Button>
          </Box>
          <Box className={styles.CompanyTypoBox}>
            <CustomTypography
              className={styles.CompanyTypo}
              variant="body2"
              color="text.secondary"
            >
              2 days ago
            </CustomTypography>
            <div>
              <CustomTypography
                className={styles.CompanyTypo}
                variant="body2"
                color="text.secondary"
              >
                Expires 12/21/2023
              </CustomTypography>
            </div>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobsCard;
