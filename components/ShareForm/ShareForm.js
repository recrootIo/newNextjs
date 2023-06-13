import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  RedditShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditIcon,
} from "next-share";
import PropTypes from "prop-types";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ShareIcon from "@mui/icons-material/Share";
import { Button, IconButton } from "@mui/material";

const ShareForm = ({ ...props }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { url, title, tags, roundedButtons } = props;

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!url) return null;

  return (
    <>
      <Button
        className="bookmarkBtn"
        size="small"
        variant="outlined"
        bgcolor="#02A9F7 !important"
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ padding: 0 }}
      >
        <ShareIcon sx={{ fontSize: "21px" }} />
      </Button>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>
          <FacebookShareButton url={url} title={title} hashtag={tags}>
            <FacebookIcon size={40} round={roundedButtons} />
          </FacebookShareButton>
        </MenuItem>
        <MenuItem>
          <TwitterShareButton url={url} title={title} hashtags={tags}>
            <TwitterIcon size={40} round={roundedButtons} />
          </TwitterShareButton>
        </MenuItem>
        <MenuItem>
          <EmailShareButton url={url} subject={title}>
            <EmailIcon size={40} round={roundedButtons} />
          </EmailShareButton>
        </MenuItem>
        <MenuItem>
          <WhatsappShareButton url={url} title={title}>
            <WhatsappIcon size={40} round={roundedButtons} />
          </WhatsappShareButton>
        </MenuItem>
        <MenuItem>
          <RedditShareButton url={url} title={title}>
            <RedditIcon size={40} round={roundedButtons} />
          </RedditShareButton>
        </MenuItem>
      </Menu>
    </>
  );
};

ShareForm.propTypes = {
  // Url to share
  url: PropTypes.string.isRequired,
  // Title of the page
  title: PropTypes.string,
  // Tabs
  tag: PropTypes.string,
  // Button setting
  roundedButtons: PropTypes.bool,
  // Facebook visibilty
  facebook: PropTypes.bool,

  description: PropTypes.string,
};

ShareForm.defaultProps = {
  url: "",
  title: "",
  tag: "",
  roundedButtons: false,
  facebook: true,
  description: "",
};

export default ShareForm;
