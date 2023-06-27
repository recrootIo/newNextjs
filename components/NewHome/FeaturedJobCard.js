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
import styles from "./newhome.module.css";
import { useRouter } from "next/router";

const FeaturedJobCard = () => {
  return (
    <div>
      <Card className={styles.FeaturedjobsCard}>
        <CardContent className={styles.FeaturedjobsCard} style={{ pb: 0 }}>
          <Box>
            <Stack
              direction="row"
              sx={{
                p: "16px",
                gap: "10px",
                borderBottom: "1px solid rgba(3, 66, 117, 0.15)",
              }}
            >
              <Avatar
                className="featuredAvatar"
                alt="logo"
                // src={getImageLogo(data?.company?.companyLogo?.logo)}
                sx={{
                  "& .MuiAvatar-img": {
                    height: "25px",
                    width: "25px",
                  },
                  height: "60px",
                  width: "60px",
                }}
              />
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <CustomTypography
                  sx={{ fontSize: 19, fontWeight: "bold", color: "#034275" }}
                >
                  Graphic Designer
                </CustomTypography>
                <CustomTypography sx={{ fontSize: 16, color: "#034275" }}>
                  ABC Company
                </CustomTypography>
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
              {/* {data?.immediate && ( */}
              <Chip
                label="Immediate"
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "#3771C8",
                  color: "white",
                  fontWeight: 600,
                  height: "25px",
                }}
              />
              {/* )}
              {data?.featureType && ( */}
              <Chip
                label="featured"
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "#3771C8",
                  color: "white",
                  fontWeight: 600,
                  height: "25px",
                }}
              />
              {/* )} */}
            </Box>
            <Stack spacing={0.5}>
              <Box sx={{ display: "flex", mt: "10px" }}>
                <Image
                  className={styles.featurediconImg}
                  src="/location.png"
                  alt=""
                  width={14}
                  height={14}
                />
                <CustomTypography
                  variant="body2"
                  className={styles.featuredText}
                  gutterBottom
                >
                  Location
                </CustomTypography>
                <CustomTypography
                  variant="body2"
                  className={styles.featuredInputText}
                  gutterBottom
                >
                  Kalkata, India
                </CustomTypography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Image
                  className={styles.featurediconImg}
                  src="/currency.png"
                  alt=""
                  width={14}
                  height={14}
                />
                <CustomTypography
                  variant="body2"
                  className={styles.featuredText}
                  gutterBottom
                >
                  Salary
                </CustomTypography>
                <CustomTypography
                  variant="body2"
                  className={styles.featuredInputText}
                  gutterBottom
                >
                  {" "}
                  {/* {getSalary(data?.salary)} */}
                </CustomTypography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Image
                  className={styles.featurediconImg}
                  src="/bag.png"
                  alt=""
                  width={14}
                  height={14}
                />
                <CustomTypography
                  variant="body2"
                  className={styles.featuredText}
                  gutterBottom
                >
                  Job Type
                </CustomTypography>
                <CustomTypography
                  variant="body2"
                  className={styles.featuredInputText}
                  gutterBottom
                >
                  {/* {data?.jobType} */}
                </CustomTypography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Image
                  className={styles.featurediconImg}
                  src="/hourglass.png"
                  alt=""
                  width={14}
                  height={14}
                />
                <CustomTypography
                  variant="body2"
                  className={styles.featuredText}
                  gutterBottom
                >
                  Exp
                </CustomTypography>
                <CustomTypography
                  variant="body2"
                  className={styles.featuredInputText}
                  gutterBottom
                >
                  {/* {data?.essentialInformation?.experience} */}
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
                // onClick={() =>
                //   handleNavigate(data?.jobTitle, data?.jobRole, data?._id)
                // }
              >
                View Details
              </Button>
            </Box>
            <Box className={styles.featuredTypoBox}>
              <CustomTypography
                className={styles.featuredTypo}
                variant="body2"
                color="text.secondary"
              >
                {/* {moment(data.createdAt).fromNow()} */}
              </CustomTypography>
              <CustomTypography
                className={styles.featuredTypo}
                variant="body2"
                color="text.secondary"
              >
                Expires{" "}
                {/* {moment(data.applicationDeadline).endOf("day").fromNow()} */}
              </CustomTypography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeaturedJobCard;
