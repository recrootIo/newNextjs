"use client";
import {
  Typography,
  Box,
  IconButton,
  Divider,
  Button,
  Collapse,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TuneIcon from "@mui/icons-material/Tune";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@mui/material/AppBar";
import { USER_EXPERIENCES, WORK_PREFERENCE } from "@/utils/constants";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { BpRadio } from "./SearchSection";

const StyledFormLabel = styled(FormControlLabel)(({ theme }) => ({
  color: "#01313F",
  "& .MuiTypography-root": {
    fontSize: "1rem",
  },
}));

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#034275",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

function BpCheckbox({ ...props }) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MainFilter = ({ ...props }) => {
  const {
    setExper,
    exper,
    setNames,
    names,
    clearSearch,
    sectors,
    companies,
    setSelectedCompanies,
    selectedCompanies,
    selectedSector,
    setSelectedSector,
  } = props;

  const [profExpanded, setProfExpanded] = React.useState(false);
  const [industryExpanded, setIndustryExpanded] = React.useState(false);
  const [roleExpanded, setRoleExpanded] = React.useState(false);
  const [expExpanded, setExpExpanded] = React.useState(false);
  const [typeExpanded, setTypeExpanded] = React.useState(false);

  const handleIndustryExpandClick = () => {
    setIndustryExpanded(!industryExpanded);
  };

  const handleRoleExpandClick = () => {
    setRoleExpanded(!roleExpanded);
  };

  const handleExpExpandClick = () => {
    setExpExpanded(!expExpanded);
  };

  const handleTypeExpandClick = () => {
    setTypeExpanded(!typeExpanded);
  };

  const handleName = (re) => {
    const { name, checked } = re.target;
    if (checked) {
      setNames((state) => [...state, name]);
    } else {
      let newJobs = names.filter((arr) => name != arr);
      setNames(() => [...newJobs]);
    }
  };

  const handleExperience = (re, a) => {
    setExper(() => [a]);
  };

  const selectCompanies = (re, a) => {
    setSelectedCompanies(() => a);
  };

  const selectTheSector = (re, a) => {
    setSelectedSector(() => a);
  };

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            fontSize: 19,
            fontStyle: "bold",
            fontWeight: 600,
            pl: "16px",
          }}
          color="#034275"
          gutterBottom
        >
          Filter
          <TuneIcon sx={{ height: "16px" }} />
        </Typography>
        <Button variant="text" size="small" onClick={() => clearSearch()}>
          <CustomTypography
            sx={{
              fontSize: 16,
              textDecoration: "underline",
            }}
            color="#777777"
            gutterBottom
          >
            Clear
          </CustomTypography>
        </Button>
      </Box>
      <Divider className="divider" variant="middle" />
      <Box sx={{ display: "flex" }}>
        <Typography className="filterTopic" color="#034275" gutterBottom>
          Industry
        </Typography>
        <ExpandMore
          expand={industryExpanded}
          onClick={handleIndustryExpandClick}
          aria-expanded={industryExpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Box>
      <Collapse in={industryExpanded} timeout="auto" unmountOnExit>
        <CardContent
          className="scrollbar"
          id="style-1"
          sx={{ pt: 0, pb: "0px !important" }}
        >
          <RadioGroup onChange={selectTheSector} value={selectedSector}>
            {sectors.map((sec, index) => (
              <FormControlLabel
                key={index}
                control={<BpRadio size="small" />}
                label={sec}
                value={sec}
                name={sec}
              />
            ))}
          </RadioGroup>
        </CardContent>
      </Collapse>
      <Divider className="divider" variant="middle" />
      <Box sx={{ display: "flex" }}>
        <Typography className="filterTopic" color="#034275" gutterBottom>
          Companies
        </Typography>
        <ExpandMore
          expand={roleExpanded}
          onClick={handleRoleExpandClick}
          aria-expanded={roleExpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Box>
      <Collapse in={roleExpanded} timeout="auto" unmountOnExit>
        <CardContent
          className="scrollbar"
          id="style-1"
          sx={{ pt: 0, pb: "0px !important" }}
        >
          <RadioGroup onChange={selectCompanies} value={selectedCompanies}>
            {companies.map((com, index) => (
              <FormControlLabel
                key={index}
                control={<BpRadio size="small" />}
                label={com?.company_name}
                value={com?.id}
                name={com?.company_name}
              />
            ))}
          </RadioGroup>
        </CardContent>
      </Collapse>
      <Divider variant="middle" className="divider" />
      <Box sx={{ display: "flex" }}>
        <Typography className="filterTopic" color="#034275" gutterBottom>
          Experience
        </Typography>
        <ExpandMore
          expand={expExpanded}
          onClick={handleExpExpandClick}
          aria-expanded={expExpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Box>
      <Collapse in={expExpanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ pt: 0, pb: "0px !important" }}>
          <RadioGroup onChange={handleExperience} value={exper[0] || null}>
            {USER_EXPERIENCES.map((ex, index) => (
              <FormControlLabel
                key={index}
                control={<BpRadio size="small" />}
                label={ex}
                value={ex}
                name={ex}
              />
            ))}
          </RadioGroup>
        </CardContent>
      </Collapse>
      <Divider className="divider" variant="middle" />
      <Box sx={{ display: "flex" }}>
        <Typography className="filterTopic" color="#034275" gutterBottom>
          Job Type
        </Typography>
        <ExpandMore
          expand={typeExpanded}
          onClick={handleTypeExpandClick}
          aria-expanded={typeExpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Box>
      <Collapse in={typeExpanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ pt: 0, pb: "0px !important" }}>
          <FormGroup>
            {WORK_PREFERENCE.map((reference, index) => (
              <StyledFormLabel
                key={index}
                control={
                  <BpCheckbox
                    size="small"
                    name={reference}
                    onChange={(e) => handleName(e)}
                    checked={names.includes(reference)}
                  />
                }
                label={reference}
              />
            ))}
          </FormGroup>
        </CardContent>
      </Collapse>
    </div>
  );
};

export default MainFilter;
