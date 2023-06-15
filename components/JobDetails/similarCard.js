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
import styles from "./jobDetail.module.css";

const SimilarJobCard = ({ ...props }) => {
  const { data } = props;
  return (
    <div>
      <Card className={styles.similarCard}>
        <CardHeader
          avatar={
            <Avatar
              className="similarAvatar"
              alt="logo"
              src={getImageLogo(data?.company?.companyLogo?.logo)}
              sx={{
                "& .MuiAvatar-img": {
                  height: "25px",
                  width: "25px",
                },
                height: "50px",
                width: "50px",
              }}
            />
          }
          titleTypographyProps={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#034275",
          }}
          subheaderTypographyProps={{
            fontSize: 16,
            color: "#034275",
          }}
          title={data?.jobRole}
          subheader={data?.company.company_name}
          sx={{
            borderBottom: "1px solid rgba(3, 66, 117, 0.15)",
            // paddingTop: "0px",
          }}
        />
        <CardContent className={styles.similarCard} style={{ pb: 0 }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                justifyContent: "flex-start",
                minHeight: "25px",
                mt: "10px",
                ml: "8px",
              }}
            >
              {data?.immediate && (
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
              )}
              {data?.featureType && (
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
              )}
            </Box>
            <Stack spacing={0.5}>
              <Box sx={{ display: "flex", mt: "25px" }}>
                <Image
                  className={styles.similariconImg}
                  src="/location.png"
                  alt=""
                  width={14}
                  height={14}
                />
                <CustomTypography
                  variant="body2"
                  className={styles.similarText}
                  gutterBottom
                >
                  Location
                </CustomTypography>
                <CustomTypography
                  variant="body2"
                  className={styles.similarInputText}
                  gutterBottom
                >
                  {data?.address[0]?.length > 20
                    ? `${data?.address[0]?.substring(0, 20)}...`
                    : data?.address[0]}
                </CustomTypography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Image
                  className={styles.similariconImg}
                  src="/currency.png"
                  alt=""
                  width={14}
                  height={14}
                />
                <CustomTypography
                  variant="body2"
                  className={styles.similarText}
                  gutterBottom
                >
                  Salary
                </CustomTypography>
                <CustomTypography
                  variant="body2"
                  className={styles.similarInputText}
                  gutterBottom
                >
                  {" "}
                  {getSalary(data?.salary)}
                </CustomTypography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Image
                  className={styles.similariconImg}
                  src="/bag.png"
                  alt=""
                  width={14}
                  height={14}
                />
                <CustomTypography
                  variant="body2"
                  className={styles.similarText}
                  gutterBottom
                >
                  Job Type
                </CustomTypography>
                <CustomTypography
                  variant="body2"
                  className={styles.similarInputText}
                  gutterBottom
                >
                  {data?.jobType}
                </CustomTypography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Image
                  className={styles.similariconImg}
                  src="/hourglass.png"
                  alt=""
                  width={14}
                  height={14}
                />
                <CustomTypography
                  variant="body2"
                  className={styles.similarText}
                  gutterBottom
                >
                  Exp
                </CustomTypography>
                <CustomTypography
                  variant="body2"
                  className={styles.similarInputText}
                  gutterBottom
                >
                  {data?.essentialInformation?.experience}
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
                onClick={() =>
                  handleNavigate(data?.jobTitle, data?.jobRole, data?._id)
                }
              >
                View Details
              </Button>
            </Box>
            <Box className={styles.similarTypoBox}>
              <CustomTypography
                className="similarTypo"
                variant="body2"
                color="text.secondary"
              >
                {moment(data.createdAt).fromNow()}
              </CustomTypography>
              <CustomTypography
                className="similarTypo"
                variant="body2"
                color="text.secondary"
              >
                Expires
                {moment(data.applicationDeadline).endOf("day").fromNow()}
              </CustomTypography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default SimilarJobCard;
