"use client";
import * as React from "react";
import {
  Box,
  Grid,
  Container,
  List,
  ListItemButton,
  Button,
  Card,
  CardContent,
  Stack,
  Divider,
  Avatar,
  Typography,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import BoyIcon from "@mui/icons-material/Boy";
// import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
// import PropTypes from "prop-types";
import styles from "./companyPreview.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyDetails } from "@/redux/slices/companyslice";
import { useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { isEmpty } from "lodash";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";
import Employer from "..";
import { useRouter } from "next/navigation";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const CompanyPreview = () => {
  //   const member = useSelector((state) => state.company.members);
  //   const [memberrole, setMemberrole] = React.useState(member);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanyDetails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { push } = useRouter();

  const final = useSelector((state) => state.company?.companyDetl);
  const logo =
    isEmpty(final?.companyLogo?.logo) === true
      ? "companyLogo/logo-default.svg"
      : final?.companyLogo?.logo;
  const theme = useTheme();
  return (
    <>
      <Employer>
        <Stack direction="row" spacing={theme.breakpoints.down("xs") ? 2 : 6}>
          <Card
            sx={{
              width: "100%",
              height: { xs: "150px", sm: "190px" },
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              backgroundImage: 'url("/activejob-bg.svg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
            onClick={() => {
              push("/Employer/CompanyProfile");
            }}
          >
            <Box
              sx={{
                height: "61px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  className={styles.comProfileCardfirstImg}
                  src="/basic-info-img.png"
                  alt=""
                  width="60"
                  height="42"
                />
              </Box>
            </Box>
            <Box sx={{ p: "16px" }}>
              <CustomTypography
                sx={{ color: "white", fontSize: { xs: "17px", sm: "30px" } }}
                variant="h5"
              >
                Basic Info
              </CustomTypography>
            </Box>
          </Card>
          <Card
            sx={{
              width: "100%",
              height: { xs: "150px", sm: "190px" },
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              backgroundImage: 'url("/inactivejobs-bg.svg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
            onClick={() => {
              push("/Employer/Members");
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                className={styles.companyProfileCardImg}
                src="/members-img.png"
                alt=""
                width="60"
                height="62"
              />
            </Box>
            <Box sx={{ p: "16px" }}>
              <CustomTypography
                sx={{ color: "white", fontSize: { xs: "17px", sm: "30px" } }}
                variant="h5"
              >
                Members
              </CustomTypography>
            </Box>
          </Card>
          <Card
            sx={{
              width: "100%",
              height: { xs: "150px", sm: "190px" },
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              backgroundImage: 'url("/interviews-bg.svg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                height: "61px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  className={styles.companyProfileCardImg}
                  src="/preview-img.png"
                  alt=""
                  width="70"
                  height="62"
                  style={{
                    width: "60px",
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ p: "16px" }}>
              <CustomTypography
                sx={{ color: "white", fontSize: { xs: "17px", sm: "30px" } }}
                variant="h5"
              >
                Preview
              </CustomTypography>
            </Box>
          </Card>
        </Stack>
        <CustomTypography
          sx={{
            color: "#034275",
            fontSize: "30px",
            width: "100%",
            textAlign: "center",
            mt: "80px",
            mb: "50px",
            fontFamily: BOLD,
          }}
          variant="h5"
        >
          Preview
        </CustomTypography>
        <Card
          variant="outlined"
          sx={{
            width: "100%",
            backgroundColor: "#F2F8FD",
            pb: "80px",
            boder: "none",
            overflow: "visible",
          }}
        >
          <CardContent>
            <Box
              sx={{
                backgroundColor: "#D4F0FC",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <Box
                sx={{
                  height: "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  // position: "relative",
                  // top: "-220px",
                  // mt: "80px",
                }}
              >
                <Box
                  sx={{
                    height: "270px",
                    width: "270px",
                    border: "5px solid rgba(2, 169, 247, 0.6)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                  }}
                >
                  <Avatar
                    alt=""
                    src={`https://preprod.recroot.au/api/getCompanyPhotos?compPhotos=${logo}`}
                    sx={{ height: "228px", width: "228px" }}
                  />
                </Box>
                <CustomTypography
                  className={styles.comapnyNameTypo}
                  variant="h5"
                >
                  {final?.basicInformation?.cmpname}
                </CustomTypography>
              </Box>
              <Box className={styles.PreviewTypoBox}>
                <EmailOutlinedIcon className={styles.PreviewIcon} />
                <CustomTypography
                  variant="subtitle2"
                  className={styles.PreviewTypo}
                >
                  &nbsp;&nbsp;{final?.basicInformation?.cmpemail}
                </CustomTypography>
              </Box>
              <Divider />
              {/* <Box className={styles.PreviewTypoBox}>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.PreviewTypo}
                      >
                        <PhoneOutlinedIcon className={styles.PreviewIcon} />
                        &nbsp;&nbsp;+91 00000-00000
                      </CustomTypography>
                    </Box> */}
              <Divider />
              {final.address?.length !== 0
                ? final.address?.map((addd, index) => (
                    <Box className={styles.PreviewTypoBox}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <PlaceOutlinedIcon className={styles.PreviewIcon} />
                        &nbsp;&nbsp;
                        <>
                          <CustomTypography>
                            {addd?.address?.label}
                            {}
                          </CustomTypography>
                        </>
                      </Box>
                    </Box>
                  ))
                : "No Provided"}
              <Divider />
              <Box className={styles.PreviewTypoBox}>
                <CustomTypography
                  variant="subtitle2"
                  className={styles.PreviewTypo}
                >
                  <LanguageOutlinedIcon className={styles.PreviewIcon} />
                  &nbsp;&nbsp;{final?.basicInformation?.cmpwebsite}
                </CustomTypography>
              </Box>
            </Box>
            <Box className={styles.PreviewTypoContainer}>
              <Box className={styles.PreviewTypoBox}>
                <FactoryOutlinedIcon className={styles.PreviewIcon} />
                <CustomTypography
                  variant="subtitle2"
                  className={styles.PreviewTypo}
                >
                  &nbsp;&nbsp;&nbsp;{final?.companyInformation?.infosector}
                </CustomTypography>
              </Box>
              <Divider />
              <Box className={styles.PreviewTypoBox}>
                <ErrorOutlineOutlinedIcon className={styles.PreviewIcon} />
                <Box sx={{ mt: 2, ml: 2 }}>
                  <ReactQuill
                    value={final?.companyInformation?.infodes}
                    readOnly={true}
                    theme={"bubble"}
                  />
                </Box>
              </Box>
            </Box>
            <Box className={styles.PreviewTypoContainer}>
              {final?.members?.map((mem, index) => (
                <>
                  <Box className={styles.PreviewTypoBox}>
                    <BoyIcon className={styles.PreviewIcon} />
                    <CustomTypography
                      variant="subtitle2"
                      className={styles.PreviewTypo}
                      sx={{ width: "50%" }}
                    >
                      &nbsp;&nbsp;{mem?.fname}
                    </CustomTypography>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <CustomTypography
                      variant="subtitle2"
                      className={styles.PreviewTypo}
                    >
                      &nbsp;&nbsp;{mem?.role}
                    </CustomTypography>
                  </Box>
                  <Divider />
                </>
              ))}
            </Box>
            <Box className={styles.PreviewTypoContainer}>
              <Box className={styles.PreviewTypoBox}>
                <LinkedInIcon sx={{ color: "#00339b" }} />
                <CustomTypography
                  variant="subtitle2"
                  className={styles.PreviewTypo}
                >
                  &nbsp;&nbsp;{" "}
                  {final?.links?.linkin !== undefined ||
                  final?.links?.linkin !== null
                    ? final?.links?.linkin
                    : "No Provided"}
                </CustomTypography>
              </Box>
              <Divider />
              <Box className={styles.PreviewTypoBox}>
                <FacebookIcon sx={{ color: "#00339b" }} />
                <CustomTypography
                  variant="subtitle2"
                  className={styles.PreviewTypo}
                >
                  &nbsp;&nbsp;
                  {final?.links?.fb !== undefined || final?.links?.fb !== null
                    ? final?.links?.fb
                    : "No Provided"}
                </CustomTypography>
              </Box>
              <Divider />
              <Box className={styles.PreviewTypoBox}>
                <TwitterIcon sx={{ color: "#00339b" }} />
                <CustomTypography
                  variant="subtitle2"
                  className={styles.PreviewTypo}
                >
                  &nbsp;&nbsp;
                  {final?.links?.twitter !== undefined ||
                  final?.links?.twitter !== null
                    ? final?.links?.twitter
                    : "No Provided"}
                </CustomTypography>
              </Box>
              <Divider />
              <Box className={styles.PreviewTypoBox}>
                <YouTubeIcon sx={{ color: "#00339b" }} />
                <CustomTypography
                  variant="subtitle2"
                  className={styles.PreviewTypo}
                >
                  &nbsp;&nbsp;
                  {final?.links?.utube !== undefined ||
                  final?.links?.utube !== null
                    ? final?.links?.utube
                    : "No Provided"}
                </CustomTypography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Employer>
    </>
  );
};

export default CompanyPreview;
