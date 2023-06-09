import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import AssistantIcon from "@mui/icons-material/Assistant";
import ShareIcon from "@mui/icons-material/Share";
import { Box, IconButton } from "@mui/material";

const BlogsCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "381px",
        borderRadius: "20px",
        borderColor: "#D4F0FC",
        pb: "20px",
      }}
    >
      <CardMedia
        sx={{ height: 240 }}
        image="/blogs-card-img.png"
        title="blogs image"
      />
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <AccessTimeIcon sx={{ color: "#02A9F7" }} />
            <CustomTypography
              gutterBottom
              sx={{ fontSize: "16px", color: "#01313F" }}
            >
              14-05 -2023
            </CustomTypography>
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <AssistantIcon sx={{ color: "#02A9F7" }} />
            <CustomTypography
              gutterBottom
              sx={{ fontSize: "16px", color: "#01313F" }}
            >
              Recruitment
            </CustomTypography>
          </Box>
        </Box>
        <CustomTypography
          gutterBottom
          sx={{ mt: "30px", fontWeight: 700, fontSize: "18px" }}
        >
          How to Use Social Media to Find the Best
        </CustomTypography>
        <CustomTypography sx={{ color: "#01313F", fontSize: "17px" }}>
          In today's digital age, social media platforms have become a powerful
          tool for recruiters to find top talent.{" "}
          <span style={{ color: "#1097CD", textDecoration: "underline" }}>
            Read more
          </span>
        </CustomTypography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#02A9F7 !important",
            height: "50px",
            width: "150px",
            borderRadius: "8px",
          }}
        >
          READ MORE
        </Button>
        <IconButton aria-label="share">
          <ShareIcon sx={{ color: "#0183C9", fontSize: "30px" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default BlogsCard;
