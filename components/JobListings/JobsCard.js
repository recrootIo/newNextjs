import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  styled,
} from "@mui/material";
import { bull, getImageLogo, getSalary, StyledAvatar } from "./SearchSection";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import dynamic from "next/dynamic";
import moment from "moment";
import VerifiedIcon from "@mui/icons-material/Verified";
import { PRIMARY } from "@/theme/colors";
import styles from "./joblistings.module.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const StyledIconWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2px",
});

const JobsCard = ({ handleNavigate, ...lateJob }) => {
  return (
    <Card className={styles.jobCard}>
      <CardHeader
        avatar={
          <StyledAvatar
            className={styles.recentAvatar}
            alt="logo"
            src={getImageLogo(lateJob?.company?.companyLogo?.logo)}
            size={100}
          />
        }
        titleTypographyProps={{
          fontSize: 18,
          fontWeight: "bold",
          color: "#034275",
        }}
        subheaderTypographyProps={{
          fontSize: 15,
          color: "#034275",
        }}
        title={lateJob?.jobRole}
        subheader={lateJob?.company?.company_name}
        action={
          <>
            <Box className={styles.searchRstBtn} sx={{ mb: "7px" }}>
              {/* <Button
                className="bookmarkBtn"
                size="small"
                variant="outlined"
                bgcolor="#02A9F7 !important"
              >
                <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
              </Button> */}
              <Button
                variant="contained"
                size="medium"
                sx={{
                  ml: "8px",
                  bgcolor: "#02A9F7 !important",
                  fontSize: "14px",
                }}
                onClick={() =>
                  handleNavigate(
                    lateJob?.jobTitle,
                    lateJob?.jobRole,
                    lateJob?._id
                  )
                }
              >
                View Details
              </Button>
            </Box>
            <CustomTypography
              className={styles.searchRstTypo}
              variant="body2"
              color="text.secondary"
            >
              {moment(lateJob.createdAt).fromNow()}
            </CustomTypography>
          </>
        }
      />
      <CardContent sx={{ pt: 0 }} className={styles.searchCard}>
        <Stack direction={"row"} sx={{ gap: "15px", margin: "10px 0" }}>
          {lateJob?.featureType && (
            <StyledIconWrapper>
              <span style={{ color: PRIMARY }}>Featured</span>
              <TurnedInNotOutlinedIcon color="primary" fontSize="medium" />
            </StyledIconWrapper>
          )}
          {lateJob?.immediate && (
            <StyledIconWrapper>
              <span style={{ color: PRIMARY }}>Immediate</span>
              <VerifiedIcon color="primary" fontSize="medium" />
            </StyledIconWrapper>
          )}
        </Stack>

        <CustomTypography
          variant="body2"
          color="text.secondary"
          fontSize={15}
          mb={1}
        >
          {lateJob?.jobType}&nbsp;{bull}&nbsp;Part Time&nbsp;
          {bull}
          &nbsp;{lateJob?.essentialInformation?.experience}
          s&nbsp;
          {bull}
          &nbsp;{getSalary(lateJob?.salary)}
        </CustomTypography>
        <CustomTypography variant="body2" color="text.secondary" fontSize={15}>
          <div
            style={{
              overflow: "hidden",
              maxHeight: "100px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <ReactQuill
              value={lateJob?.jobDescription}
              readOnly={true}
              theme={"bubble"}
            />
          </div>
        </CustomTypography>
        <Box className={styles.mobileBtn}>
          <Box className={styles.btnBox}>
            <Button
              className={styles.bookmarkBtn}
              size="small"
              variant="outlined"
              bgcolor="#02A9F7 !important"
            >
              <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
            </Button>
            <Button
              className={styles.viewDetailBtn}
              variant="contained"
              size="medium"
              onClick={() =>
                handleNavigate(
                  lateJob?.jobTitle,
                  lateJob?.jobRole,
                  lateJob?._id
                )
              }
            >
              View Details
            </Button>
          </Box>
          <Box className={styles.recentTypoBox}>
            <CustomTypography
              className={styles.recentTypo}
              variant="body2"
              color="text.secondary"
            >
              {moment(lateJob.createdAt).fromNow()} days ago
            </CustomTypography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobsCard;
