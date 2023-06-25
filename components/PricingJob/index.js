import { Card, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
function PricingTable() {
  return (
    <div>
      <Card
        sx={{
          p: 2,
          borderRadius: 5,
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;",
        }}
      >
        <Grid container sx={{ p: 4 }} spacing={1}>
          <Grid item sm={5} xs={4}>
            <Typography
              sx={{
                overflowWrap: { sm: "normal", xs: "anywhere" },
                fontWeight: 600,
                fontSize: "1.3rem",
              }}
            >
              Services
            </Typography>
          </Grid>
          <Grid item sm={3.5} xs={2.6}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1.3rem",
              }}
            >
              Free
            </Typography>
          </Grid>
          <Grid item sm={3.5} xs={2.6}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1.3rem",
              }}
            >
              Premium
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container sx={{ p: 2 }} spacing={1}>
          <Grid item sm={5} xs={4}>
            <Typography
              sx={{
                overflowWrap: { sm: "normal", xs: "anywhere" },
               
                fontSize: { sm: "1.19rem", xs: "1rem" },
                ml: "10px",
              }}
            >
              Job Postings
            </Typography>
          </Grid>
          <Grid item sm={3.5} xs={2.6}>
            <Typography
              sx={{
               
                fontSize: { sm: "1.19rem", xs: "1rem" },
                ml: "10px",
              }}
            >
              3 Per day
            </Typography>
          </Grid>
          <Grid item sm={3.5} xs={2.6}>
            <Typography
              sx={{
               
                fontSize: { sm: "1.19rem", xs: "1rem" },
                ml: "10px",
                overflowWrap: "anywhere",
              }}
            >
              Customize
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container sx={{ p: 2 }} spacing={1}>
          <Grid item sm={5} xs={4}>
            <Typography
              sx={{
                overflowWrap: { sm: "normal", xs: "anywhere" },
               
                fontSize: { sm: "1.19rem", xs: "1rem" },
                ml: "10px",
              }}
            >
          Job Applicants
            </Typography>
          </Grid>
          <Grid item sm={3.5} xs={2.6}>
          <Typography
              sx={{
               
                fontSize: { sm: "1.19rem", xs: "1rem" },
                ml: "10px",
              }}
            >
             10 Per Job
            </Typography>
          </Grid>
          {/* <Grid item sm={3.5} xs={2.6}>
            <CheckCircleRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#2f95f6" }}
            />
          </Grid> */}
          <Grid item sm={3.5} xs={2.6}>
          <Typography
              sx={{
               
                fontSize: { sm: "1.19rem", xs: "1rem" },
                ml: "10px",
              }}
            >
             Unlimited
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container sx={{ p: 2 }} spacing={1}>
          <Grid item sm={5} xs={4}>
            <Typography
              sx={{
                overflowWrap: { sm: "normal", xs: "anywhere" },
               
                fontSize: { sm: "1.19rem", xs: "1rem" },
                ml: "10px",
              }}
            >
              Featured Job Posting
            </Typography>
          </Grid>
          <Grid item sm={3.5} xs={2.6}>
            <CancelRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#e85050" }}
            />
          </Grid>
          {/* <Grid item sm={3.5} xs={2.6}>
            <CancelRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#e85050" }}
            />
          </Grid> */}
          <Grid item sm={3.5} xs={2.6}>
            <CheckCircleRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#2f95f6" }}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container sx={{ p: 2 }} spacing={1}>
          <Grid item sm={5} xs={4}>
            <Typography
              sx={{
                overflowWrap: { sm: "normal", xs: "anywhere" },
               
                fontSize: { sm: "1.19rem", xs: "1rem" },
                ml: "10px",
              }}
            >
          Validity
            </Typography>
          </Grid>
          <Grid item sm={3.5} xs={2.6}>
          <Typography
              sx={{
               
                fontSize: { sm: "1.19rem", xs: "1rem" },
                ml: "10px",
              }}
            >
            48 Hours
            </Typography>
          </Grid>
          {/* <Grid item sm={3.5} xs={2.6}>
            <CheckCircleRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#2f95f6" }}
            />
          </Grid> */}
          <Grid item sm={3.5} xs={2.6}>
          <Typography
              sx={{
               
                fontSize: { sm: "1.19rem", xs: "1rem" },
                ml: "10px",
              }}
            >
             30 Days
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container sx={{ p: 2 }} spacing={1}>
          <Grid item sm={5} xs={4}>
            <Typography
              sx={{
                overflowWrap: { sm: "normal", xs: "anywhere" },
               
                fontSize: { sm: "1.19rem", xs: "1rem" },
                ml: "10px",
              }}
            >
              Profiles from Candidate Database
            </Typography>
          </Grid>
          <Grid item sm={3.5} xs={2.6}>
          <CancelRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#e85050" }}
            />
          </Grid>
          <Grid item sm={3.5} xs={2.6}>
          <CheckCircleRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#2f95f6" }}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container sx={{ p: 2 }} spacing={1}>
          <Grid item sm={5} xs={4}>
            <Typography
              sx={{
                overflowWrap: { sm: "normal", xs: "anywhere" },
               
                fontSize: { sm: "1.19rem", xs: "1rem" },
                ml: "10px",
              }}
            >
              AI Matching Criteria
            </Typography>
          </Grid>
          <Grid item sm={3.5} xs={2.6}>
            <CheckCircleRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#2f95f6" }}
            />
          </Grid>
          {/* <Grid item sm={3.5} xs={2.6}>
            <CheckCircleRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#2f95f6" }}
            />
          </Grid> */}
          <Grid item sm={3.5} xs={2.6}>
            <CheckCircleRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#2f95f6" }}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container sx={{ p: 2 }} spacing={1}>
          <Grid item sm={5} xs={4}>
            <Typography
              sx={{
                overflowWrap: { sm: "normal", xs: "anywhere" },
               
                fontSize: { sm: "1.19rem", xs: "1rem" },
                ml: "10px",
              }}
            >
              Personalized Ads
            </Typography>
          </Grid>
          <Grid item sm={3.5} xs={2.6}>
            <CancelRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#e85050" }}
            />
          </Grid>
          {/* <Grid item sm={3.5} xs={2.6}>
            <CancelRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#e85050" }}
            />
          </Grid> */}
          <Grid item sm={3.5} xs={2.6}>
            <CheckCircleRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#2f95f6" }}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container sx={{ p: 2 }} spacing={1}>
          <Grid item sm={5} xs={4}>
            <Typography
              sx={{
                overflowWrap: { sm: "normal", xs: "anywhere" },
               
                fontSize: { sm: "1.19rem", xs: "1rem" },
                ml: "10px",
              }}
            >
              Team Members Access
            </Typography>
          </Grid>
          <Grid item sm={3.5} xs={2.6}>
            <CancelRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#e85050" }}
            />
          </Grid>
          {/* <Grid item sm={3.5} xs={2.6}>
            <CheckCircleRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#2f95f6" }}
            />
          </Grid> */}
          <Grid item sm={3.5} xs={2.6}>
            <CheckCircleRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#2f95f6" }}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container sx={{ p: 2 }} spacing={1}>
          <Grid item sm={5} xs={4}>
            <Typography
              sx={{
                overflowWrap: { sm: "normal", xs: "anywhere" },
               
                fontSize: { sm: "1.19rem", xs: "1rem" },
                ml: "10px",
              }}
            >
              Dedicated Candidate Manager
            </Typography>
          </Grid>
          <Grid item sm={3.5} xs={2.6}>
            <CancelRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#e85050" }}
            />
          </Grid>
          {/* <Grid item sm={3.5} xs={2.6}>
            <CancelRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#e85050" }}
            />
          </Grid> */}
          <Grid item sm={3.5} xs={2.6}>
            <CheckCircleRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#2f95f6" }}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container sx={{ p: 2 }} spacing={1}>
          <Grid item sm={5} xs={4}>
            <Typography
              sx={{
                overflowWrap: { sm: "normal", xs: "anywhere" },
               
                fontSize: { sm: "1.19rem", xs: "1rem" },
                ml: "10px",
              }}
            >
              Guaranteed Hiring in 24 hours
            </Typography>
          </Grid>
          <Grid item sm={3.5} xs={2.6}>
            <CancelRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#e85050" }}
            />
          </Grid>
          {/* <Grid item sm={3.5} xs={2.6}>
            <CheckCircleRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#2f95f6" }}
            />
          </Grid> */}
          <Grid item sm={3.5} xs={2.6}>
            <CheckCircleRoundedIcon
              sx={{ ml: "5px", fontSize: "1.7rem", color: "#2f95f6" }}
            />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default PricingTable;
