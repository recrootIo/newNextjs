import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Box, CardContent, IconButton, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { StyledCard } from "../ProfileStyles";
import AddIcon from "@mui/icons-material/Add";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { BOLD } from "@/theme/fonts";
import { NEUTRAL } from "@/theme/colors";
import { useDispatch, useSelector } from "react-redux";
import { deleteJob, getSavedJobs, setJobID } from "@/redux/slices/personal";
import { getSalary } from "@/components/JobListings/SearchSection";
import styles from "./savedJobs.module.css";
import Link from "next/link";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { openAlert } from "@/redux/slices/alert";
import { SUCCESS } from "@/utils/constants";
import moment from "moment";
import { useRouter } from "next/router";

const SavedJobs = () => {
  const savedJobs = useSelector((state) => state.personal.savedJobs);
  const { appliedJobs = [] } = useSelector((state) => state?.personal);

  const appliedIds = appliedJobs.map((i) => i.jobId[0]);
  // const isApplied = appliedIds.includes(_id);
  // const appliedJob = appliedJobs.find((i) => i.jobId[0]);
  const { data } = useSelector((state) => state?.personal);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getSavedJobs());
  }, [dispatch]);

  const deleteTheJobs = (id) => {
    console.log(id);
    dispatch(deleteJob(id))
      .unwrap()
      .then(() => {
        dispatch(getSavedJobs());
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "Successfully Removed",
          })
        );
      });
  };

  const disabled = data?.profilePercentage < 69;

  const getBtnText = (_id) => {
    const appliedIdcheck = appliedIds.includes(_id);
    const appliedJob = appliedJobs.find((i) => i.jobId[0] === _id);
    return disabled
      ? "Complete Profile"
      : appliedIdcheck
      ? `Applied ${moment(appliedJob.createdAt).endOf("day").fromNow()}`
      : "Apply";
  };

  const disabledBtn = (_id) => {
    if (getBtnText(_id) === "Apply") return false;
    return true;
  };

  const gotApply = (job) => {
    // console.log(appliedJob, "_id");
    dispatch(
      setJobID({
        companyId: job.company?._id,
        jobId: job._id,
        question: job.question,
        name: job.jobRole,
        show: job.queshow,
      })
    );

    router.push(`/applyJob?jobid=${job._id}`);
  };

  return (
    <StyledCard variant="outlined" id="savedJob_details_section">
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: { md: "10px 30px", xs: "10px", sm: "10px" },
          backgroundColor: "#5CA9E814",
        }}
      >
        <CustomTypography
          sx={{
            fontFamily: BOLD,
            color: "#00339B",
            fontSize: "20px",
          }}
        >
          Saved Jobs
        </CustomTypography>
      </Stack>

      <CardContent
        sx={{ padding: { md: "30px 30px", xs: "16px 10px", sm: "16px 10px" } }}
      >
        <Stack sx={{ gap: "10px" }}>
          {savedJobs.map((saved, index) => (
            <Stack
              key={index}
              sx={{
                backgroundColor: "#F6FCFF",
                borderRadius: "10px",
                padding: { md: "30px 30px", xs: "16px 10px", sm: "16px 10px" },
                border: "1px solid #D3EAFF",
                gap: "5px",
              }}
            >
              <Stack
                direction={"row"}
                sx={{
                  alignItems: "center",
                  gap: "10px",
                  justifyContent: "space-between",
                }}
              >
                <Stack>
                  <CustomTypography sx={{ fontFamily: BOLD, fontSize: "25px" }}>
                    {saved.job.jobRole}
                  </CustomTypography>
                  <CustomTypography>
                    {saved?.job?.company?.company_name}
                  </CustomTypography>
                </Stack>
                <Stack>
                  <Box>
                    <IconButton onClick={() => deleteTheJobs(saved?._id)}>
                      <HighlightOffIcon />
                    </IconButton>
                  </Box>
                </Stack>
              </Stack>
              <Stack direction={"row"} sx={{ gap: "20px" }}>
                <CustomTypography sx={{ color: "gray", fontSize: "13px" }}>
                  {saved.job?.jobType}
                </CustomTypography>
                <CustomTypography sx={{ color: "gray", fontSize: "13px" }}>
                  {saved.job?.essentialInformation.experience}
                </CustomTypography>
                <CustomTypography sx={{ color: "gray", fontSize: "13px" }}>
                  {saved.job?.essentialInformation.careerlevel}
                </CustomTypography>
                <Box sx={{ color: "gray !important", fontSize: "13px" }}>
                  {getSalary(saved.job?.salary, true, "13px")}
                </Box>
              </Stack>
              <Stack
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: { md: "row", sm: "column", xs: "column" },
                  gap: "20px",
                  mt: "20px",
                }}
              >
                <Link
                  href={`/jobs/${saved.job.jobTitle}/${saved.job.jobRole}/${saved.job._id}`}
                >
                  <CustomTypography
                    sx={{
                      color: "#00339B",
                      textDecoration: "underline",
                      fontSize: "15px",
                    }}
                  >
                    See Full Description
                  </CustomTypography>
                </Link>

                <button
                  className={
                    disabledBtn(saved.job._id)
                      ? styles.disabledBtn
                      : styles.activeBtn
                  }
                  disabled={disabledBtn(saved.job._id)}
                  onClick={() => gotApply(saved.job)}
                >
                  {getBtnText(saved?.job?._id)}
                </button>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

export default SavedJobs;
