"use client";
import {
  Box,
  Grid,
  Stack,
  IconButton,
  Divider,
  Button,
  Avatar,
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
  RadioGroup,
  Radio,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MainFilter from "./MainFilter";
import { useDispatch, useSelector } from "react-redux";
import { searchJobs } from "@/redux/slices/search";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import LoadingSearchCards from "./LoadingSearchCards";
import { useRouter } from "next/router";
import { USER_EXPERIENCES, WORK_PREFERENCE } from "@/utils/constants";
import JobsCard from "./JobsCard";
import { isEmpty } from "lodash";
import { currencyConvert, replaceSlashes } from "@/utils/HelperFunctions";
import { removeApplyPath } from "@/redux/slices/applyJobs";

export const getSalary = (salary, defaults = true, font = 16, black = null) => {
  if (salary?.salaryType !== "noprovide") {
    return (
      <CustomTypography
        variant="body2"
        sx={{
          color: black
            ? "rgba(1, 49, 63, 0.8);"
            : defaults
            ? "rgb(115, 115, 115)"
            : "#034275",
        }}
        fontSize={font}
      >
        {salary?.salaryCrrancy?.length > 2
          ? `${currencyConvert(salary?.minSalary, salary?.salaryCrrancy, 2)} ${
              salary?.salaryDenomination
            }`
          : `${salary?.salaryCrrancy} ${salary?.minSalary}`}{" "}
        -{" "}
        {salary?.salaryCrrancy?.length > 2
          ? `${salary?.maxSalary} ${salary?.salaryDenomination}`
          : salary?.maxSalary}{" "}
        {salary?.salaryType === "monthly" ? "Per Month" : ""}
        {salary?.salaryType === "hourly" ? "Per Hour" : ""}
        {salary?.salaryType === "yearly" ? "Yearly" : ""}
      </CustomTypography>
    );
  } else {
    return (
      <CustomTypography
        fontSize={font}
        sx={{
          fontWeight: "400",
          fontSize: font,
          lineHeight: "24px",
          color: black
            ? "rgba(1, 49, 63, 0.8);"
            : defaults
            ? "rgb(115, 115, 115)"
            : "#034275",
        }}
      >
        Salary - Negotiable
      </CustomTypography>
    );
  }
};

export const getImageLogo = (url) => {
  return `https://api.arinnovate.io/api/getCompanyPhotos?compPhotos=${url}`;
};

// dialog box for mobile filter
export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const BpIcon = styled("span")(({ theme }) => ({
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

export const BpCheckedIcon = styled(BpIcon)({
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

export const BpCheckbox = (props) => {
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
};

export const BpRadio = (props) => {
  return (
    <Radio
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
};

export const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const TabPanel = (props) => {
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
          <CustomTypography>{children}</CustomTypography>
        </Box>
      )}
    </div>
  );
};

export const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

export const StyledAvatar = styled(Avatar)(({}) => ({
  "& .MuiAvatar-img": {
    width: "25px",
    height: "25px",
  },
  height: "100px",
  width: "100px",
}));

export const StyledFormLabel = styled(FormControlLabel)(({}) => ({
  color: "#01313F",
  "& .MuiTypography-root": {
    fontSize: "1rem",
  },
}));

export const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#034275",
    },
  },
}));

export const BootstrapDialogTitle = (props) => {
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
};

const SearchSection = ({ ...props }) => {
  const {
    sectors,
    companies,
    categories,
    category,
    sector,
    company,
    experience,
    jobType,
    // page,
    variant,
  } = props;
  const latestJobs = useSelector((state) => state.searchJobs.searchDetails);
  const totalPage = useSelector((state) => state.searchJobs.totalPage);
  const count = useSelector((state) => state.searchJobs.count);
  const selector = useSelector((state) => state?.apply?.applyPath);

  useEffect(() => {
    const redirect = selector;
    if (redirect !== null) {
      dispatch(removeApplyPath());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loading = useSelector((state) => state.searchJobs.loading);
  // console.log(page,'pagessss')
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [names, setNames] = useState(
    isEmpty(jobType?.[0]) ? [] : jobType || []
  );
  const [exper, setExper] = useState(experience);
  const [titlef, setTitlef] = useState("");
  const [title, setTitle] = useState(props.title || "");
  const [addressf, setAddressf] = useState("");
  const [address, setAddress] = useState(props.address || "");
  const [jobVariant, setJobVariant] = useState(variant || "");
  // const [selectedCompanies, setSelectedCompanies] = useState(company || "");
  const [selectedSector, setSelectedSector] = useState(sector || []);
  const [selectedCategory, setSelectedCategory] = useState(category || []);
  useEffect(() => {
    setTitlef(props.title);
    setAddressf(props.address);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setJobVariant(variant);
  }, [variant]);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const loadingCount = [1, 2, 3, 4];
  const classes = useStyles;
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { page = 1 } = router.query;

  const getJobs = () => {
    dispatch(
      searchJobs({
        value: page,
        names,
        exper: exper,
        title,
        address,
        jobVariant: variant,
        // selectedCompanies,
        selectedSector,
        selectedCategory,
        limit: 10,
      })
    )
      .then(() => {})
      .catch((error) => {
        console.warn(error);
      });
  };

  const handleChange = (event) => {
    setJobVariant(() => event.target.value);
    const { ...otherParams } = router.query;
    const updatedQueryParams = {
      ...otherParams,
      variant: event.target.value,
      page: 1,
    };

    router.push({
      pathname: router.pathname,
      query: updatedQueryParams,
    });
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSector = (re) => {
    const { name, checked } = re.target;
    let newJobs = selectedSector;

    if (checked) {
      newJobs.push(name);
    } else {
      newJobs = selectedSector.filter((arr) => name != arr);
    }

    setSelectedSector(() => [...newJobs]);
  };
  const handleCate = (re) => {
    const { name, checked } = re.target;
    let newJobs = selectedCategory;

    if (checked) {
      newJobs.push(name);
    } else {
      newJobs = selectedCategory.filter((arr) => name != arr);
    }

    setSelectedCategory(() => [...newJobs]);
  };
  const handleName = (re) => {
    const { name, checked } = re.target;
    let newJobs = names;

    if (checked) {
      newJobs.push(name);
    } else {
      newJobs = names.filter((arr) => name != arr);
    }

    setNames(() => [...newJobs]);
  };

  const updateTitle = (e) => {
    const newTitle = e.target.value;
    setTitle(() => newTitle);
  };

  const updateAddress = (e) => {
    const newAddress = e.target.value;
    setAddress(() => newAddress);
  };

  const changePage = (e, page) => {
    const { ...otherParams } = router.query;
    const updatedQueryParams = {
      ...otherParams,
      page: page,
    };

    router.push(
      {
        pathname: router.pathname,
        query: updatedQueryParams,
      },
      undefined,
      { shallow: true }
    );
  };

  const handleNavigate = (jobTitle, jobRole, _id) => {
    router.push(
      `/jobs/${replaceSlashes(jobTitle)}/${replaceSlashes(jobRole)}/${_id}`
    );
  };

  const handleExperience = (re) => {
    const { name, checked } = re.target;
    setExper(name);
  };

  const clearSearch = () => {
    setExper("");
    setNames(() => []);
    setSelectedSector([]);
    setJobVariant("");
    setAddress("");
    setTitle("");
    setSelectedCategory([]);

    router.push(
      {
        pathname: router.pathname,
        query: {
          page: 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const setSearchFields = () => {
    const { ...otherParams } = router.query;
    const updatedQueryParams = {
      ...otherParams,
      address,
      title,
      category,
    };
    setTitlef(title);
    setAddressf(address);
    router.push({
      pathname: router.pathname,
      query: updatedQueryParams,
    });
  };

  const mobileSearch = () => {
    const { ...otherParams } = router.query;
    const updatedQueryParams = {
      ...otherParams,
      // address,
      // title,
      category: selectedCategory,
      sector: selectedSector,
      // company: selectedCompanies,
      experience: exper,
      jobType: names,
      page: 1,
    };
    router.push({
      pathname: router.pathname,
      query: updatedQueryParams,
    });
  };

  const deleteQueries = (query) => {
    const { ...otherParams } = router.query;

    const updatedQueryParams = {
      ...otherParams,
      [query]: "",
      page: 1,
    };

    router.push(
      {
        pathname: router.pathname,
        query: updatedQueryParams,
      },
      undefined,
      { shallow: true }
    );
  };

  const handleDeleteSector = (e) => {
    const newNames = selectedSector.filter((n) => e !== n);

    const { ...otherParams } = router.query;

    const updatedQueryParams = {
      ...otherParams,
      sector: newNames,
      page: 1,
    };

    router.push(
      {
        pathname: router.pathname,
        query: updatedQueryParams,
      },
      undefined,
      { shallow: true }
    );

    setSelectedSector(() => [...newNames]);
  };

  const handleDeleteCategory = (e) => {
    const newNames = selectedCategory.filter((n) => e !== n);

    const { ...otherParams } = router.query;

    const updatedQueryParams = {
      ...otherParams,
      category: newNames,
      page: 1,
    };

    router.push(
      {
        pathname: router.pathname,
        query: updatedQueryParams,
      },
      undefined,
      { shallow: true }
    );

    setSelectedCategory(() => [...newNames]);
  };

  // const handleDeleteCompany = () => {
  //   setSelectedCompanies(() => "");
  //   deleteQueries("company");
  // };

  const handleDeleteExp = (e) => {
    setExper("");

    const { ...otherParams } = router.query;

    const updatedQueryParams = {
      ...otherParams,
      experience: "",
      page: 1,
    };

    router.push(
      {
        pathname: router.pathname,
        query: updatedQueryParams,
      },
      undefined,
      { shallow: true }
    );
  };

  const handleDeleteNames = (e) => {
    const newNames = names.filter((n) => e !== n);

    const { ...otherParams } = router.query;

    const updatedQueryParams = {
      ...otherParams,
      jobType: newNames,
      page: 1,
    };

    router.push(
      {
        pathname: router.pathname,
        query: updatedQueryParams,
      },
      undefined,
      { shallow: true }
    );

    setNames(() => [...newNames]);
  };

  const handleDeleteTitle = () => {
    deleteQueries("title");
    setTitle(() => "");
    setTitlef(() => "");
  };

  const handleDeleteAddress = () => {
    deleteQueries("address");
    setAddress(() => "");
    setAddressf(() => "");
  };

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    category,
    sector,
    company,
    page,
    names,
    exper,
    selectedCategory,
    selectedSector,
    variant,
  ]);

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
                  value={title}
                  onChange={updateTitle}
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
                  onChange={updateAddress}
                  value={address}
                />
              </Box>
              <Button
                variant="contained"
                className="searchButton"
                sx={{
                  marginTop: { md: "0", sm: "10px", xs: "10px" },
                }}
                onClick={() => setSearchFields()}
              >
                Search
              </Button>
            </Box>
          </Container>
        </Box>

        <Container>
          <Grid container spacing={2} style={{ marginBottom: 30 }}>
            <Grid className="filter" item xs={0} md={4}>
              <Card
                sx={{
                  width: "100%",
                  height: "auto",
                  boxShadow: "4px 4px 10px rgba(3, 66, 117, 0.1)",
                  // boxShadow:
                  //   "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }}
                variant="outline"
              >
                <CardContent>
                  <MainFilter
                    setNames={setNames}
                    names={names}
                    exper={exper}
                    setExper={setExper}
                    clearSearch={clearSearch}
                    sectors={sectors}
                    selectedSector={selectedSector}
                    setSelectedSector={setSelectedSector}
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
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
                        <CustomTypography
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
                        </CustomTypography>
                        <Button
                          size="small"
                          onClick={() => clearSearch()}
                          variant="outlined"
                        >
                          Clear
                        </Button>
                      </Box>
                      <Stack direction={"row"} sx={{ flexWrap: "wrap" }}>
                        {titlef && (
                          <Chip
                            key={titlef}
                            label={titlef}
                            color="primary"
                            style={{
                              fontWeight: 500,
                              marginTop: "10px",
                              marginRight: "10px",
                              backgroundColor: "#D4F0FC",
                              color: "rgba(3, 66, 117, 0.69)",
                            }}
                            onDelete={handleDeleteTitle}
                          />
                        )}

                        {addressf && (
                          <Chip
                            label={addressf}
                            color="primary"
                            style={{
                              fontWeight: 500,
                              marginTop: "10px",
                              marginRight: "10px",
                              backgroundColor: "#D4F0FC",
                              color: "rgba(3, 66, 117, 0.69)",
                            }}
                            onDelete={handleDeleteAddress}
                          />
                        )}

                        {selectedSector.map((sce) => (
                          <Chip
                            key={sce}
                            label={sce}
                            color="primary"
                            style={{
                              fontWeight: 500,
                              marginTop: "10px",
                              marginRight: "10px",
                              backgroundColor: "#D4F0FC",
                              color: "rgba(3, 66, 117, 0.69)",
                            }}
                            onDelete={() => handleDeleteSector(sce)}
                          />
                        ))}

                        {/* {selectedCompanies && (
                          <Chip
                            label={
                              companies.filter(
                                (f) => f.id === selectedCompanies
                              )[0]?.company_name
                            }
                            color="primary"
                            onDelete={handleDeleteCompany}
                            style={{
                              fontWeight: 500,
                              marginTop: "10px",
                              marginRight: "10px",
                              backgroundColor: "#D4F0FC",
                              color: "rgba(3, 66, 117, 0.69)",
                            }}
                          />
                        )} */}

                        {!isEmpty(exper) && (
                          <Chip
                            onDelete={(ex) => handleDeleteExp(ex)}
                            label={exper}
                            color="primary"
                            style={{
                              fontWeight: 500,
                              marginTop: "10px",
                              marginRight: "10px",
                              backgroundColor: "#D4F0FC",
                              color: "rgba(3, 66, 117, 0.69)",
                            }}
                          />
                        )}

                        {selectedCategory.map((e) => (
                          <Chip
                            label={e}
                            key={e}
                            color="primary"
                            style={{
                              fontWeight: 500,
                              marginTop: "10px",
                              marginRight: "10px",
                              backgroundColor: "#D4F0FC",
                              color: "rgba(3, 66, 117, 0.69)",
                            }}
                            onDelete={() => handleDeleteCategory(e)}
                          />
                        ))}

                        {!isEmpty(names) &&
                          names.map((j) => (
                            <Chip
                              key={j}
                              label={j}
                              color="primary"
                              onDelete={() => handleDeleteNames(j)}
                              style={{
                                fontWeight: 500,
                                marginTop: "10px",
                                marginRight: "10px",
                                backgroundColor: "#D4F0FC",
                                color: "rgba(3, 66, 117, 0.69)",
                              }}
                            />
                          ))}
                      </Stack>
                      <Divider className="divider" />
                      <Box
                        sx={{
                          flexGrow: 1,
                          bgcolor: "background.paper",
                          display: "flex",
                          height: 300,
                          overflow: "auto",
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
                          {/* <Tab label="Professional Level" {...a11yProps(0)} /> */}
                          <Tab label="Industry" {...a11yProps(0)} />
                          <Tab label="Category" {...a11yProps(1)} />
                          {/* <Tab label="Companies" {...a11yProps(2)} /> */}
                          <Tab label="Experience" {...a11yProps(2)} />
                          <Tab label="Job Type" {...a11yProps(3)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                          <Box sx={{ width: { sm: "300px", xs: "100px" } }}>
                            {sectors.map((sec, index) => (
                              <StyledFormLabel
                                key={index}
                                control={
                                  <BpCheckbox
                                    size="small"
                                    checked={selectedSector.includes(sec)}
                                    name={sec}
                                    onChange={handleSector}
                                  />
                                }
                                label={sec}
                              />
                            ))}
                          </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                          <Box sx={{ width: { sm: "300px", xs: "100px" } }}>
                            {categories.map((sec, index) => (
                              <StyledFormLabel
                                key={index}
                                control={
                                  <BpCheckbox
                                    size="small"
                                    checked={selectedCategory.includes(sec)}
                                    name={sec}
                                    onChange={handleCate}
                                  />
                                }
                                label={sec}
                              />
                            ))}
                          </Box>
                        </TabPanel>
                        {/* <TabPanel value={value} index={2}>
                          <RadioGroup
                            onChange={(e, a) => setSelectedCompanies(a)}
                            value={selectedCompanies}
                          >
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
                        </TabPanel> */}
                        <TabPanel value={value} index={2}>
                          <FormControl>
                            <RadioGroup
                              onChange={handleExperience}
                              value={exper}
                            >
                              {USER_EXPERIENCES.map((com, index) => (
                                <FormControlLabel
                                  key={index}
                                  control={<BpRadio size="small" />}
                                  label={com}
                                  value={com}
                                  name={com}
                                />
                              ))}
                            </RadioGroup>
                          </FormControl>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                          <FormGroup>
                            {WORK_PREFERENCE.map((work, index) => (
                              <StyledFormLabel
                                key={index}
                                control={
                                  <BpCheckbox
                                    size="small"
                                    checked={names.includes(work)}
                                    name={work}
                                    onChange={handleName}
                                  />
                                }
                                label={work}
                              />
                            ))}
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
                          onClick={() => {
                            mobileSearch();
                            handleClose();
                          }}
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
                  flexWrap={"wrap"}
                  direction="row"
                >
                  {titlef && (
                    <Chip
                      key={titlef}
                      label={titlef}
                      color="primary"
                      onDelete={handleDeleteTitle}
                      style={{
                        fontWeight: 500,
                        marginTop: "10px",
                        marginRight: "10px",
                        backgroundColor: "#D4F0FC",
                        color: "rgba(3, 66, 117, 0.69)",
                      }}
                    />
                  )}

                  {addressf && (
                    <Chip
                      label={addressf}
                      color="primary"
                      style={{
                        fontWeight: 500,
                        marginTop: "10px",
                        marginRight: "10px",
                        backgroundColor: "#D4F0FC",
                        color: "rgba(3, 66, 117, 0.69)",
                      }}
                      onDelete={handleDeleteAddress}
                    />
                  )}

                  {selectedSector.map((e) => (
                    <Chip
                      key={e}
                      label={e}
                      color="primary"
                      style={{
                        fontWeight: 500,
                        marginTop: "10px",
                        marginRight: "10px",
                        backgroundColor: "#D4F0FC",
                        color: "rgba(3, 66, 117, 0.69)",
                      }}
                      onDelete={() => handleDeleteSector(e)}
                    />
                  ))}

                  {/* {selectedCompanies && (
                    <Chip
                      label={
                        companies.filter((f) => f.id === selectedCompanies)[0]
                          ?.company_name
                      }
                      color="primary"
                      style={{
                        fontWeight: 500,
                        marginTop: "10px",
                        marginRight: "10px",
                        backgroundColor: "#D4F0FC",
                        color: "rgba(3, 66, 117, 0.69)",
                      }}
                      onDelete={handleDeleteCompany}
                    />
                  )} */}

                  {!isEmpty(exper) && (
                    <Chip
                      label={exper}
                      onDelete={() => handleDeleteExp()}
                      color="primary"
                      style={{
                        fontWeight: 500,
                        marginTop: "10px",
                        marginRight: "10px",
                        backgroundColor: "#D4F0FC",
                        color: "rgba(3, 66, 117, 0.69)",
                      }}
                    />
                  )}

                  {selectedCategory.map((e) => (
                    <Chip
                      label={e}
                      key={e}
                      color="primary"
                      style={{
                        fontWeight: 500,
                        marginTop: "10px",
                        marginRight: "10px",
                        backgroundColor: "#D4F0FC",
                        color: "rgba(3, 66, 117, 0.69)",
                      }}
                      onDelete={() => handleDeleteCategory(e)}
                    />
                  ))}

                  {!isEmpty(names) &&
                    names.map((j) => (
                      <Chip
                        key={j}
                        label={j}
                        onDelete={() => handleDeleteNames(j)}
                        color="primary"
                        style={{
                          fontWeight: 500,
                          marginTop: "10px",
                          marginRight: "10px",
                          backgroundColor: "#D4F0FC",
                          color: "rgba(3, 66, 117, 0.69)",
                        }}
                      />
                    ))}
                </Stack>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: "10px",
                  mt: "10px",
                }}
              >
                <CustomTypography
                  className="jobResult"
                  sx={{ alignItems: "flex-end" }}
                  variant="body2"
                  color="rgba(3, 66, 117, 0.6);"
                  fontSize={14}
                >
                  {isEmpty(count) ? 0 : count[0]?.count}
                  {""} Jobs Result
                  {/* {Array.isArray(count) ? count[0].count : 0 ?? 0}  */}
                </CustomTypography>
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
                    <CustomTypography
                      variant="body2"
                      sx={{ fontSize: "14px", mr: "5px" }}
                    >
                      Sort by:
                    </CustomTypography>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={jobVariant}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      sx={{ fontSize: "14px" }}
                    >
                      <MenuItem value={""}>Recent</MenuItem>
                      <MenuItem value={"featured"}>Featured</MenuItem>
                      <MenuItem value={"immediate"}>Immediate</MenuItem>
                      <MenuItem value={"mostViewed"}>Most viewed</MenuItem>
                    </Select>
                  </Box>
                </FormControl>
              </Box>
              <Stack>
                {loading ? (
                  <Stack spacing={2}>
                    {loadingCount.map((a, index) => (
                      <LoadingSearchCards key={index} />
                    ))}
                  </Stack>
                ) : (
                  <Stack spacing={2}>
                    {latestJobs.map((lateJob, index) => (
                      <JobsCard
                        key={index}
                        {...lateJob}
                        handleNavigate={handleNavigate}
                      />
                    ))}
                  </Stack>
                )}
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
                  count={totalPage}
                  onChange={changePage}
                  page={Number(page)}
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
        </Container>
      </Box>
    </div>
  );
};

export default SearchSection;
