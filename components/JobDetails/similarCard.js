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

const SimilarJobCard = () => {
  return (
    <div>
      <Card className="similarCard">
        <CardContent sx={{ display: "flex", justifyContent: "flex-end" }}>
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
        </CardContent>
        <CardHeader
          avatar={
            <Avatar
              className="similarAvatar"
              alt="logo"
              src="/logo 2.png"
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
          title="Graphic Designer2"
          subheader="Recroot"
          sx={{
            borderBottom: "1px solid rgba(3, 66, 117, 0.15)",
            paddingTop: "0px",
          }}
        />
        <CardContent className="similarCard" style={{ pb: 0 }}>
          <Box>
            <Stack spacing={0.5}>
              <Box sx={{ display: "flex", mt: "25px" }}>
                <Image className="similariconImg" src="/location.png" alt="" />
                <CustomTypography
                  variant="body2"
                  className="similarText"
                  gutterBottom
                >
                  Location
                </CustomTypography>
                <CustomTypography
                  variant="body2"
                  className="similarInputText"
                  gutterBottom
                >
                  :&nbsp;US
                </CustomTypography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Image className="similariconImg" src="/currency.png" alt="" />
                <CustomTypography
                  variant="body2"
                  className="similarText"
                  gutterBottom
                >
                  Salary
                </CustomTypography>
                <CustomTypography
                  variant="body2"
                  className="similarInputText"
                  gutterBottom
                >
                  :&nbsp;4 LPA
                </CustomTypography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Image className="similariconImg" src="/bag.png" alt="" />
                <CustomTypography
                  variant="body2"
                  className="similarText"
                  gutterBottom
                >
                  Job Type
                </CustomTypography>
                <CustomTypography
                  variant="body2"
                  className="similarInputText"
                  gutterBottom
                >
                  :&nbsp;Full Time
                </CustomTypography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Image className="similariconImg" src="/hourglass.png" alt="" />
                <CustomTypography
                  variant="body2"
                  className="similarText"
                  gutterBottom
                >
                  Exp
                </CustomTypography>
                <CustomTypography
                  variant="body2"
                  className="similarInputText"
                  gutterBottom
                >
                  :&nbsp;3 Years
                </CustomTypography>
              </Box>
            </Stack>
            <Box className="btnBox">
              <Button
                className="bookmarkBtn"
                size="medium"
                variant="outlined"
                bgcolor="#02A9F7 !important"
              >
                <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
              </Button>
              <Button
                className="viewDetailBtn"
                variant="contained"
                size="medium"
              >
                View Details
              </Button>
            </Box>
            <Box className="similarTypoBox">
              <CustomTypography
                className="similarTypo"
                variant="body2"
                color="text.secondary"
              >
                10 days ago
              </CustomTypography>
              <CustomTypography
                className="similarTypo"
                variant="body2"
                color="text.secondary"
              >
                Expires in a month
              </CustomTypography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default SimilarJobCard;
