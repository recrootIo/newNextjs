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
import Link from "next/link";
import moment from "moment";
import ShareForm from "../ShareForm/ShareForm";

const BlogsCard = ({blog,API_URL}) => {
  function removeHtmlTags(text) {
    // Create a regular expression to match all HTML tags.
    const regex = /<\/?[^>]+>/g;
  
    // Replace all HTML tags with an empty string.
    return text.replace(regex, "");
  }
  const imageUrl = `${API_URL}/getCompanyPhotos?compPhotos=${blog?.blogImage}`;
  const handleUrl = (title, id) => {
    var regexPattern = /\s+/g;
    var ans = title.replace(regexPattern, "%20");
    const current = window.location.href;
    return `${current}/${ans}/${id}`;
  };
  return (
    <Card
      variant="outlined"
      sx={{
        width: { xs: "100%", sm: "100%", md: "100%", lg: "370px" },
        borderRadius: "20px",
        borderColor: "#D4F0FC",
        pb: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <CardMedia
        sx={{ height: 240 }}
        title="blogs image"
        image={imageUrl}
        />
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <AccessTimeIcon sx={{ color: "#02A9F7" }} />
            <CustomTypography
              gutterBottom
              sx={{ fontSize: "16px", color: "#01313F" }}
            >
             {moment(blog.updatedAt).format("DD-MM-YYYY")}
            </CustomTypography>
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <AssistantIcon sx={{ color: "#02A9F7" }} />
            <CustomTypography
              gutterBottom
              sx={{ fontSize: "16px", color: "#01313F" }}
            >
              {blog.category.category}
            </CustomTypography>
          </Box>
        </Box>
        <Link
        href={`/Blogs/${blog?.title}/${blog?._id}`}
        style={{color:'white'}}
                          >

        <CustomTypography
          gutterBottom
          sx={{ mt: "30px",color:'white',fontWeight: 700, fontSize: "18px" ,textTransform:'capitalize' }}
        >
          {blog.title}
        </CustomTypography>
                          </Link>
        <CustomTypography sx={{ color: "#01313F", fontSize: "17px" ,height:'80px',overflow:'hidden'}}>
        { removeHtmlTags(blog?.description)}
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
        > <Link
        className="read-more"
        href={`/Blogs/${blog?.title}/${blog?._id}`}
      >
          READ MORE
      </Link>
        </Button>
        <ShareForm   url={handleUrl(blog?.title, blog?._id)}
                            roundedButtons={true}
                            title={blog?.title}
                            description={blog?.description}
                             />
      </CardActions>
    </Card>
  );
};

export default BlogsCard;
