"use client";
import {
  Typography,
  Box,
  Grid,
  Stack,
  IconButton,
  Divider,
  Button,
  Avatar,
  Collapse,
  Pagination,
  PaginationItem,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Tabs,
  Tab,
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
import MainFilter from "./MainFilter";

//Filter tab
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  "& .MuiAvatar-img": {
    width: "20px",
    height: "20px",
  },
  height: "40px",
  width: "40px",
}));

const StyledFormLabel = styled(FormControlLabel)(({ theme }) => ({
  color: "#01313F",
  "& .MuiTypography-root": {
    fontSize: "1rem",
  },
}));

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#034275",
    },
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

function BpCheckbox(props) {
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

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

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

// dialog box for mobile filter
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const SearchSection = (props) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function searchJobs() {
    dispatch(jobssSet([]));
    dispatch(searchKeys({ keyword: keyword, location: location, type: type }));
    dispatch(keywordSearch({ keyword, location, type }))
      .then(() => {
        navigate("/Jobs", { replace: false });
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const classes = useStyles();

  const handleCategoryChipClick = () => {
    console.info("You clicked the Chip.");
  };

  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  //filter tab view
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  //filter checkboxes
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckBoxChange = (event) => {
    const { value } = event.target;
    setSelectedValues((selectedValues) =>
      selectedValues.includes(value)
        ? selectedValues.filter((val) => val !== value)
        : [...selectedValues, value]
    );
  };

  const handleDelete = (value) => {
    setSelectedValues((selectedValues) =>
      selectedValues.filter((val) => val !== value)
    );
  };

  return (
    <div>
      <Box
        sx={{
          mt: "10px",
          mb: "40px",
        }}
      >
        <Box className="outerSearchBox">
          <Container>
            <Box className="searchBox">
              <Box className="locationContainer">
                <SearchIcon className="searchIcon" />
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Keyword or title"
                  inputProps={{ "aria-label": "Keyword or title" }}
                />
              </Box>
              <Divider
                className="searchDivider"
                sx={{ height: 28, m: 0.5 }}
                orientation="vertical"
              />
              <Box className="locationContainer">
                <LocationOnOutlinedIcon className="searchIcon" />
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Location"
                  inputProps={{ "aria-label": "Location" }}
                />
              </Box>
              <Button variant="contained" className="searchButton">
                Search
              </Button>
            </Box>
          </Container>
        </Box>

        <Container>
          <Grid container spacing={2} style={{ marginBottom: 30 }}>
            <Grid className="filter" item xs={0} md={4}>
              <Card sx={{ width: "100%", height: "100%" }}>
                <CardContent>
                  <MainFilter />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ display: "flex", marginTop: "10px" }}>
                <div className="filterBtn">
                  <IconButton onClick={handleClickOpen} aria-label="filter">
                    <FilterAltOutlinedIcon />
                  </IconButton>
                  <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                    fullScreen={fullScreen}
                  >
                    <BootstrapDialogTitle
                      id="customized-dialog-title"
                      onClose={handleClose}
                    ></BootstrapDialogTitle>
                    <DialogContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "10px",
                        }}
                      >
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
                        <Button variant="text" size="small">
                          <Typography
                            sx={{
                              fontSize: 16,
                              textDecoration: "underline",
                            }}
                            color="#777777"
                            gutterBottom
                          >
                            Clear
                          </Typography>
                        </Button>
                      </Box>
                      <Box>
                        {selectedValues.map((value) => (
                          <Chip
                            key={value}
                            label={value}
                            color="primary"
                            style={{
                              fontWeight: 500,
                              marginTop: "10px",
                              marginRight: "10px",
                              backgroundColor: "#D4F0FC",
                              color: "rgba(3, 66, 117, 0.69)",
                            }}
                            onDelete={() => handleDelete(value)}
                          />
                        ))}
                      </Box>
                      <Divider className="divider" />
                      <Box
                        sx={{
                          flexGrow: 1,
                          bgcolor: "background.paper",
                          display: "flex",
                          height: 300,
                        }}
                      >
                        <Tabs
                          orientation="vertical"
                          variant="scrollable"
                          value={value}
                          onChange={handleTabChange}
                          aria-label="Vertical tabs example"
                          sx={{ borderRight: 1, borderColor: "divider" }}
                        >
                          <Tab label="Professional Level" {...a11yProps(0)} />
                          <Tab label="Industry" {...a11yProps(1)} />
                          <Tab label="Role" {...a11yProps(2)} />
                          <Tab label="Experience" {...a11yProps(3)} />
                          <Tab label="Job Type" {...a11yProps(4)} />
                        </Tabs>
                        <TabPanel
                          value={value}
                          index={0}
                          style={{ p: "0px !important" }}
                        >
                          <FormGroup>
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="Experienced"
                              value="Experienced"
                              checked={selectedValues.includes("Experienced")}
                              onChange={handleCheckBoxChange}
                            />
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="Fresher"
                              value="Fresher"
                              checked={selectedValues.includes("Fresher")}
                              onChange={handleCheckBoxChange}
                            />
                          </FormGroup>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                          <FormGroup sx={{ width: "150px" }}>
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="IT"
                              value="IT"
                              checked={selectedValues.includes("IT")}
                              onChange={handleCheckBoxChange}
                            />
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="Management"
                              value="Management"
                              checked={selectedValues.includes("Management")}
                              onChange={handleCheckBoxChange}
                            />
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="Finance"
                              value="Finance"
                              checked={selectedValues.includes("Finance")}
                              onChange={handleCheckBoxChange}
                            />
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="E-Commerce"
                              value="E-Commerce"
                              checked={selectedValues.includes("E-Commerce")}
                              onChange={handleCheckBoxChange}
                            />
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="Market Research"
                              value="Market Research"
                              checked={selectedValues.includes(
                                "Market Research"
                              )}
                              onChange={handleCheckBoxChange}
                            />
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="Pharmacy"
                              value="Pharmacy"
                              checked={selectedValues.includes("Pharmacy")}
                              onChange={handleCheckBoxChange}
                            />
                          </FormGroup>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                          <FormGroup sx={{ width: "160px" }}>
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="Graphic Designer"
                              value="Graphic Designer"
                              checked={selectedValues.includes(
                                "Graphic Designer"
                              )}
                              onChange={handleCheckBoxChange}
                            />
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="Java Developer"
                              value="Java Developer"
                              checked={selectedValues.includes(
                                "Java Developer"
                              )}
                              onChange={handleCheckBoxChange}
                            />
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="React.Js Developer"
                              value="React.Js Developer"
                              checked={selectedValues.includes(
                                "React.Js Developer"
                              )}
                              onChange={handleCheckBoxChange}
                            />
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="Project Manager"
                              value="Project Manager"
                              checked={selectedValues.includes(
                                "Project Manager"
                              )}
                              onChange={handleCheckBoxChange}
                            />
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="Data Analyst"
                              value="Data Analyst"
                              checked={selectedValues.includes("Data Analyst")}
                              onChange={handleCheckBoxChange}
                            />
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="Tester"
                              value="Tester"
                              checked={selectedValues.includes("Tester")}
                              onChange={handleCheckBoxChange}
                            />
                          </FormGroup>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                          <FormGroup sx={{ width: "130px" }}>
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="2-4 Years"
                              value="2-4 Years"
                              checked={selectedValues.includes("2-4 Years")}
                              onChange={handleCheckBoxChange}
                            />
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="5-7 Years"
                              value="5-7 Years"
                              checked={selectedValues.includes("5-7 Years")}
                              onChange={handleCheckBoxChange}
                            />
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="8-12 Years"
                              value="8-12 Years"
                              checked={selectedValues.includes("8-12 Years")}
                              onChange={handleCheckBoxChange}
                            />
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="11-13 Years"
                              value="11-13 Years"
                              checked={selectedValues.includes("11-13 Years")}
                              onChange={handleCheckBoxChange}
                            />
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="13-15 Years"
                              value="13-15 Years"
                              checked={selectedValues.includes("13-15 Years")}
                              onChange={handleCheckBoxChange}
                            />
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="15-18 Years"
                              value="15-18 Years"
                              checked={selectedValues.includes("15-18 Years")}
                              onChange={handleCheckBoxChange}
                            />
                          </FormGroup>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                          <FormGroup>
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="Remote"
                              value="remote"
                              checked={selectedValues.includes("remote")}
                              onChange={handleCheckBoxChange}
                            />
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="On Site"
                              value="on-site"
                              checked={selectedValues.includes("on-site")}
                              onChange={handleCheckBoxChange}
                            />
                            <StyledFormLabel
                              control={<BpCheckbox size="small" />}
                              label="Hybrid"
                              value="hybrid"
                              checked={selectedValues.includes("hybrid")}
                              onChange={handleCheckBoxChange}
                            />
                          </FormGroup>
                        </TabPanel>
                      </Box>
                    </DialogContent>
                    <DialogActions sx={{ display: "block" }}>
                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="outlined"
                          onClick={handleClose}
                          sx={{ width: "50% !important" }}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#00339B !important",
                            width: "50% !important",
                          }}
                        >
                          Apply
                        </Button>
                      </Stack>
                    </DialogActions>
                  </BootstrapDialog>
                </div>
                <Stack
                  className="categoryChipStack"
                  direction="row"
                  spacing={1}
                >
                  <Chip
                    className="categoryChip"
                    label="Experienced"
                    size="medium"
                    onClick={handleCategoryChipClick}
                  />
                  <Chip
                    className="categoryChip"
                    label="IT"
                    size="medium"
                    onClick={handleCategoryChipClick}
                  />
                  <Chip
                    className="categoryChip"
                    label="Role"
                    size="medium"
                    onClick={handleCategoryChipClick}
                  />
                  <Chip
                    className="categoryChip"
                    label="Experience"
                    size="medium"
                    onClick={handleCategoryChipClick}
                  />
                </Stack>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: "10px",
                }}
              >
                <Typography
                  className="jobResult"
                  sx={{ alignItems: "flex-end" }}
                  variant="body2"
                  color="rgba(3, 66, 117, 0.6);"
                  fontSize={14}
                >
                  120 Jobs Result
                </Typography>
                <FormControl
                  className="sortBy"
                  variant="standard"
                  size="small"
                  sx={{
                    m: 0,
                    mb: 1,
                    mr: 1,
                    minWidth: 120,
                    height: "20px",
                    color: "rgba(3, 66, 117, 0.6) !important",
                    fontSize: "12px",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "14px", mr: "5px" }}
                    >
                      Sort by:
                    </Typography>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      sx={{ fontSize: "14px" }}
                    >
                      <MenuItem value="">
                        <em>All</em>
                      </MenuItem>
                      <MenuItem value={20}>Featured</MenuItem>
                      <MenuItem value={30}>Recent</MenuItem>
                      <MenuItem value={40}>Most viewed</MenuItem>
                    </Select>
                  </Box>
                </FormControl>
              </Box>
              <Stack spacing={2}>
                <Card className="jobCard">
                  <CardHeader
                    avatar={
                      <StyledAvatar
                        className="recentAvatar"
                        alt="logo"
                        src="/logo 2.png"
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
                    title="Graphic Designer"
                    subheader="Recroot"
                    action={
                      <>
                        <Box className="searchRstBtn" sx={{ mb: "7px" }}>
                          <Button
                            className="bookmarkBtn"
                            size="small"
                            variant="outlined"
                            bgcolor="#02A9F7 !important"
                          >
                            <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
                          </Button>
                          <Button
                            variant="contained"
                            size="medium"
                            sx={{
                              ml: "8px",
                              bgcolor: "#02A9F7 !important",
                              fontSize: "14px",
                            }}
                          >
                            View Details
                          </Button>
                        </Box>
                        <Typography
                          className="searchRstTypo"
                          variant="body2"
                          color="text.secondary"
                        >
                          10 days ago
                        </Typography>
                      </>
                    }
                  />
                  <CardContent sx={{ pt: 0 }} className="searchCard">
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontSize={15}
                      mb={1}
                    >
                      Remote&nbsp;{bull}&nbsp;Part Time&nbsp;{bull}&nbsp;3-6
                      Years&nbsp;{bull}&nbsp;3-6 LPA
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontSize={15}
                    >
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </Typography>
                    <Box className="mobileBtn">
                      <Box className="btnBox">
                        <Button
                          className="bookmarkBtn"
                          size="small"
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
                      <Box className="recentTypoBox">
                        <Typography
                          className="recentTypo"
                          variant="body2"
                          color="text.secondary"
                        >
                          10 days ago
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
                <Card className="jobCard">
                  <CardHeader
                    avatar={
                      <StyledAvatar
                        className="recentAvatar"
                        alt="logo"
                        src="/logo 2.png"
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
                    title="Graphic Designer"
                    subheader="Recroot"
                    action={
                      <>
                        <Box className="searchRstBtn" sx={{ mb: "7px" }}>
                          <Button
                            className="bookmarkBtn"
                            size="small"
                            variant="outlined"
                            bgcolor="#02A9F7 !important"
                          >
                            <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
                          </Button>
                          <Button
                            className="ViewSecondBtn"
                            variant="outlined"
                            size="medium"
                          >
                            View Details
                          </Button>
                        </Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className="searchRstTypo"
                        >
                          10 days ago
                        </Typography>
                      </>
                    }
                  />
                  <CardContent className="searchCard">
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontSize={15}
                      mb={1}
                    >
                      Remote&nbsp;{bull}&nbsp;Part Time&nbsp;{bull}&nbsp;3-6
                      Years&nbsp;{bull}&nbsp;3-6 LPA
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontSize={15}
                    >
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </Typography>
                    <Box className="mobileBtn">
                      <Box className="btnBox">
                        <Button
                          className="bookmarkBtn"
                          size="small"
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
                      <Box className="recentTypoBox">
                        <Typography
                          className="recentTypo"
                          variant="body2"
                          color="text.secondary"
                        >
                          10 days ago
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
                <Card className="jobCard">
                  <CardHeader
                    avatar={
                      <StyledAvatar
                        className="recentAvatar"
                        alt="logo"
                        src="/logo 2.png"
                        size={80}
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
                    title="Graphic Designer"
                    subheader="Recroot"
                    action={
                      <>
                        <Box className="searchRstBtn" sx={{ mb: "7px" }}>
                          <Button
                            className="bookmarkBtn"
                            size="small"
                            variant="outlined"
                            bgcolor="#02A9F7 !important"
                          >
                            <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
                          </Button>
                          <Button
                            className="ViewSecondBtn"
                            variant="outlined"
                            size="medium"
                          >
                            View Details
                          </Button>
                        </Box>
                        <Typography
                          className="searchRstTypo"
                          variant="body2"
                          color="text.secondary"
                        >
                          10 days ago
                        </Typography>
                      </>
                    }
                  />
                  <CardContent className="searchCard">
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontSize={15}
                      mb={1}
                    >
                      Remote&nbsp;{bull}&nbsp;Part Time&nbsp;{bull}&nbsp;3-6
                      Years&nbsp;{bull}&nbsp;3-6 LPA
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontSize={15}
                    >
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </Typography>
                    <Box className="mobileBtn">
                      <Box className="btnBox">
                        <Button
                          className="bookmarkBtn"
                          size="small"
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
                      <Box className="recentTypoBox">
                        <Typography
                          className="recentTypo"
                          variant="body2"
                          color="text.secondary"
                        >
                          10 days ago
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
                <Card className="jobCard">
                  <CardHeader
                    avatar={
                      <StyledAvatar
                        className="recentAvatar"
                        alt="logo"
                        src="/logo 2.png"
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
                    title="Graphic Designer"
                    subheader="Recroot"
                    action={
                      <>
                        <Box className="searchRstBtn" sx={{ mb: "7px" }}>
                          <Button
                            className="bookmarkBtn"
                            size="small"
                            variant="outlined"
                            bgcolor="#02A9F7 !important"
                          >
                            <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
                          </Button>
                          <Button
                            className="ViewSecondBtn"
                            variant="outlined"
                            size="medium"
                          >
                            View Details
                          </Button>
                        </Box>
                        <Typography
                          className="searchRstTypo"
                          variant="body2"
                          color="text.secondary"
                        >
                          10 days ago
                        </Typography>
                      </>
                    }
                  />
                  <CardContent className="searchCard">
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontSize={15}
                      mb={1}
                    >
                      Remote&nbsp;{bull}&nbsp;Part Time&nbsp;{bull}&nbsp;3-6
                      Years&nbsp;{bull}&nbsp;3-6 LPA
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontSize={15}
                    >
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </Typography>
                    <Box className="mobileBtn">
                      <Box className="btnBox">
                        <Button
                          className="bookmarkBtn"
                          size="small"
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
                      <Box className="recentTypoBox">
                        <Typography
                          className="recentTypo"
                          variant="body2"
                          color="text.secondary"
                        >
                          10 days ago
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Grid
            container
            className="paginationcontainer"
            spacing={2}
            sx={{ mt: "10px" }}
          >
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={8}>
              <Stack
                spacing={2}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Pagination
                  classes={{ ul: classes.ul }}
                  count={3}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                      variant="outlined"
                      shape="rounded"
                      sx={{
                        border: "1.5px solid #034275",
                        "& .MuiButtonBase-root-MuiPaginationItem-root .Mui-selected":
                          {
                            backgroundColor: "red",
                            border: "1.5px solid #034275",
                          },
                      }}
                    />
                  )}
                  size="small"
                  color="primary"
                />
              </Stack>
            </Grid>
          </Grid>
          {!isShown && (
            <Box className="viewmoreContainer">
              <Button
                className="searchcardsviewmorebtn"
                onClick={handleClick}
                variant="contained"
              >
                View more
              </Button>
            </Box>
          )}
          {isShown && (
            <div>
              <Card className="jobCard">
                <CardHeader
                  avatar={
                    <StyledAvatar
                      className="recentAvatar"
                      alt="logo"
                      src="/logo 2.png"
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
                  title="Graphic Designer"
                  subheader="Recroot"
                  action={
                    <>
                      <Box className="searchRstBtn" sx={{ mb: "7px" }}>
                        <Button
                          className="bookmarkBtn"
                          size="small"
                          variant="outlined"
                          bgcolor="#02A9F7 !important"
                        >
                          <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
                        </Button>
                        <Button
                          className="ViewSecondBtn"
                          variant="outlined"
                          size="medium"
                        >
                          View Details
                        </Button>
                      </Box>
                      <Typography
                        className="searchRstTypo"
                        variant="body2"
                        color="text.secondary"
                      >
                        10 days ago
                      </Typography>
                    </>
                  }
                />
                <CardContent className="searchCard">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontSize={15}
                    mb={1}
                  >
                    Remote&nbsp;{bull}&nbsp;Part Time&nbsp;{bull}&nbsp;3-6
                    Years&nbsp;{bull}&nbsp;3-6 LPA
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontSize={15}
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </Typography>
                  <Box className="mobileBtn">
                    <Box className="btnBox">
                      <Button
                        className="bookmarkBtn"
                        size="small"
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
                    <Box className="recentTypoBox">
                      <Typography
                        className="recentTypo"
                        variant="body2"
                        color="text.secondary"
                      >
                        10 days ago
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
              <Card className="jobCard">
                <CardHeader
                  avatar={
                    <StyledAvatar
                      className="recentAvatar"
                      alt="logo"
                      src="/logo 2.png"
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
                  title="Graphic Designer"
                  subheader="Recroot"
                  action={
                    <>
                      <Box className="searchRstBtn" sx={{ mb: "7px" }}>
                        <Button
                          className="bookmarkBtn"
                          size="small"
                          variant="outlined"
                          bgcolor="#02A9F7 !important"
                        >
                          <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
                        </Button>
                        <Button
                          className="ViewSecondBtn"
                          variant="outlined"
                          size="medium"
                        >
                          View Details
                        </Button>
                      </Box>
                      <Typography
                        className="searchRstTypo"
                        variant="body2"
                        color="text.secondary"
                      >
                        10 days ago
                      </Typography>
                    </>
                  }
                />
                <CardContent className="searchCard">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontSize={15}
                    mb={1}
                  >
                    Remote&nbsp;{bull}&nbsp;Part Time&nbsp;{bull}&nbsp;3-6
                    Years&nbsp;{bull}&nbsp;3-6 LPA
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontSize={15}
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </Typography>
                  <Box className="mobileBtn">
                    <Box className="btnBox">
                      <Button
                        className="bookmarkBtn"
                        size="small"
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
                    <Box className="recentTypoBox">
                      <Typography
                        className="recentTypo"
                        variant="body2"
                        color="text.secondary"
                      >
                        10 days ago
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
              <Box className="viewmoreContainer">
                <Button
                  className="searchcardsviewlessbtn"
                  onClick={handleClick}
                  variant="contained"
                >
                  View less
                </Button>
              </Box>
            </div>
          )}
        </Container>
      </Box>
    </div>
  );
};

export default SearchSection;
