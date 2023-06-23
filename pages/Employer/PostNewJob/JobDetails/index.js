"use client";
import React, { useEffect, useState } from "react";
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
  TextField,
  Autocomplete,
  Chip,
  Typography,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  CircularProgress,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Close } from "@mui/icons-material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import AddIcon from "@mui/icons-material/Add";
import EditorToolbar, {
  modules,
  formats,
} from "@/components/EditorToolbar/EditorToolbar";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import ScreeningQuestions from "@/components/Employers/ScreeningQuestions/ScreeningQuestions";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import Image from "next/image";
import axios from "axios";
import {
  descSet,
  errorJobs,
  jobPackType,
  quesSend,
  roleSet,
  skillSet,
  titleSet,
} from "@/redux/slices/job";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import { isEmpty } from "lodash";
import Address from "@/components/Address";
import styles from "../../../../components/Employers/styles.module.css";
import companyservice from "@/redux/services/company.service";
const Tour = dynamic(() => import("reactour"), { ssr: false });
uuidv4();
const style = {
  txtinput: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        width: { md: "100%", xs: "100%" },
        height: "60px",
        color: "#BAD4DF",
      },
      "&:hover fieldset": {
        borderColor: "#BAD4DF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#BAD4DF",
      },
    },
  },
};

const JobDetails = () => {
  const user = Cookies.get();

  let dispatch = useDispatch();
  const [isTourOpen, setTourOpen] = React.useState(false);
  const jobsall = useSelector((state) => state.jobs);
  const jobs = useSelector((state) => state.jobs?.details);
  const companyDet = useSelector((state) => state.company?.companyDetl);
  const descript = useSelector((state) => state.jobs?.jobDescription);
  const level = useSelector((state) => state.jobs?.jobRole);
  const title = useSelector((state) => state.jobs?.jobTitle);
  const pack = useSelector((state) => state.jobs?.packageType);
  useEffect(() => {
    axios
      .get("https://preprod.recroot.au/api/getTypesJobs", {
        headers: { "x-access-token": `${user?.token}` },
      })
      .then((response) => setType(response.data));
  }, [user?.token]);

  const errors = useSelector((state) => state.jobs?.error);

  const [role, setRole] = useState({ skill: "", id: uuidv4() });
  const [roles, setRoles] = useState(jobs && jobs?.requiredSkill);
  const [category, setCategory] = useState(false);

  const handleChangesRole = (e) => {
    const news = titleDesc.filter((i) => i.rol.role === e.target.value);
    dispatch(roleSet(e.target.value));
    dispatch(errorJobs({ jobRole: "" }));

    if (news[0] !== undefined) {
      dispatch(quesSend(news[0].rol.ques));
      dispatch(titleSet(news[0].catg));
      setCategory(false);
    }

    if (news.length !== 0) {
      // dispatch(descSet(news[0].rol.desc));
      dispatch(
        descSet(
          " <p>Are you looking for the next professional opportunity that will challenge you and advance your career? Join our team now!</p><p><strong>Requirements:</strong></p><ul><li>Collaborate with other team members and stakeholders</li><li>Contribute to team productivity, product quality, and tech adoption</li><li>Communicate technical design, requirements, functionality, and limitations</li><li>Be overall responsible for all the deliverables and for meeting targets</li><li>Recommend and execute improvements</li></ul><p><strong>Job Requirements:</strong></p><ul><li>Bachelor's degree</li><li>At least 1+ years of prior experience in a similar area</li><li>Ability to work effectively both individually and in a team environment</li><li>Excellent verbal and written communication skills</li><li>Great attention to detail</li><li>Organizational skills</li><li>Effective time management skills and the ability to meet deadlines</li></ul>"
        )
      );
      setCategory(false);
    } else {
      if (e.target.value.length === 0) {
        setCategory(false);
        // dispatch(descSet(""));
        return null;
      }
      setCategory(true);
      dispatch(
        descSet(
          " <p>Are you looking for the next professional opportunity that will challenge you and advance your career? Join our team now!</p><p><strong>Requirements:</strong></p><ul><li>Collaborate with other team members and stakeholders</li><li>Contribute to team productivity, product quality, and tech adoption</li><li>Communicate technical design, requirements, functionality, and limitations</li><li>Be overall responsible for all the deliverables and for meeting targets</li><li>Recommend and execute improvements</li></ul><p><strong>Job Requirements:</strong></p><ul><li>Bachelor's degree</li><li>At least 1+ years of prior experience in a similar area</li><li>Ability to work effectively both individually and in a team environment</li><li>Excellent verbal and written communication skills</li><li>Great attention to detail</li><li>Organizational skills</li><li>Effective time management skills and the ability to meet deadlines</li></ul>"
        )
      );
    }
  };

  const handleChangeDesc = (value) => {
    dispatch(descSet(value));
    // let myArray = removeDuplicates(
    //   searchKeywords(value?.replace(/<\/?[^>]+(>|$)/g, ""))
    // ).map((str) => ({ skill: str, id: uuidv4() }));
    // let deleteArr = deletedSkills.map((str) => str.toLowerCase());
    // let newArray = myArray.filter(
    //   (obj) => !deleteArr.includes(obj.skill.toLowerCase())
    // );
    // setRoles(newArray);
    // dispatch(skillSet(newArray));
  };

  const handleChangesTitle = (e) => {
    dispatch(titleSet(e));
  };

  const addSkil = () => {
    if (role.skill === "") {
      return;
    }
    setRoles([...roles, role]);
    dispatch(skillSet([...roles, role]));
    setRole({ skill: "", id: "" });
    setArrskills([]);
    setLoad(false);
  };
  const [type, setType] = useState([]);

  var titleDesc = [];

  type.map((typ) => {
    typ.roleAndDesc.map((rol) => {
      titleDesc.push({ rol, catg: typ.jobNam });
      return null;
    });
    return null;
  });

  var myHeaders = new Headers();
  myHeaders.append("apikey", "pTpYIFKqYkVkRSBgriOF1KTp4kNrHRpe");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };
  const cjobs = useSelector((state) => state.jobs?.companyJobs) || [];
  const [timer, setTimer] = useState(null);
  const [arrskills, setArrskills] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [load, setLoad] = React.useState(false);
  const [deletedSkills, setdeletedSkills] = useState([]);
  const loading = open && arrskills.length === 0;
  const freePack = companyDet.package?.subscription_package === "Free";
  const freeCount =
    freePack === true ? (cjobs !== undefined ? 3 - cjobs?.length : 0) : 0;
  const proCOunt = companyDet?.jobCounts?.proCount;
  const preCOunt = companyDet?.jobCounts?.premiumCount;
  const inputChanged = (e) => {
    if (e.target.value === "") {
      setArrskills([]);
      setLoad(false);
      return;
    }
    setLoad(true);
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      if (e.target.value === "") {
        setArrskills([]);
        return;
      }
      skillApi(e.target.value);
    }, 500);

    setTimer(newTimer);
  };

  const skillApi = (skil) => {
    fetch(`https://api.apilayer.com/skills?q=${skil}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setArrskills(result);
      })
      .catch((error) => console.warn("error", error));
  };

  // const oneskill = skills.filter((w) => w.length !== 1);

  // function searchKeywords(text) {
  //   let keys = oneskill;
  //   let re = new RegExp("(" + keys.join("|") + ")", "g");
  //   return text?.match(re);
  // }

  // function removeDuplicates(arr) {
  //   return [...new Set(arr)];
  // }

  const handleKey = (e) => {
    setRole({ skill: e.target.value, id: uuidv4() });
    if (e.keyCode === 13) {
      addSkil();
    }
  };

  const handleRemove = (id) => {
    let values = [...roles].filter((fiel) => fiel.id !== id);
    setdeletedSkills([
      ...deletedSkills,
      [...roles].find((x) => x.id === id).skill,
    ]);
    setRoles(values);
    dispatch(skillSet(values));
  };
  const handlePack = (e) => {
    dispatch(jobPackType(e.target.value));
  };
  const country = Cookies.get("country");

  const updateValue = async () => {
    const companyService = new companyservice();
    await companyService.updateTourValue({ jobDetails: false });
  };

  const closeTour = () => {
    setTourOpen(false);
    updateValue();
  };

  const accentColor = "#5cb7b7";

  const tourConfig = [
    {
      selector: ".plan",
      style: {
        color: "black",
      },
      content: ({ goTo }) => (
        <Stack
          sx={{
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomTypography>
            Select the pricing plan in which you are posting the job
          </CustomTypography>
          <Button onClick={() => closeTour()}>SKIP</Button>
        </Stack>
      ),
    },
    {
      selector: ".title",
      style: {
        color: "black",
      },
      content: ({ goTo }) => (
        <Stack
          sx={{
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomTypography>
            Fill in the job details with job title, job details, skills, and
            location
          </CustomTypography>
          <Button onClick={() => closeTour()}>Done</Button>
        </Stack>
      ),
    },
    {
      selector: ".questions",
      style: {
        color: "black",
      },
      content: ({ goTo }) => (
        <Stack
          sx={{
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomTypography>
            Add screening questions with preferred answers for your job post if
            necessary
          </CustomTypography>
          <Button onClick={() => closeTour()}>SKIP</Button>
        </Stack>
      ),
    },
    {
      selector: ".nextButton",
      style: {
        color: "black",
      },
      content: ({ goTo }) => (
        <Stack
          sx={{
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomTypography>
            Add screening questions with preferred answers for your job post if
            necessary
          </CustomTypography>
          <Button onClick={() => closeTour()}>Done</Button>
        </Stack>
      ),
    },
  ];

  const company = useSelector((state) => state?.company?.companyDetl);

  useEffect(() => {
    setTourOpen(() => company?.tours?.jobDetails);
  }, [company?.tours?.jobDetails]);

  return (
    <>
      <CardContent>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "30px",
              mb: "90px",
            }}
          >
            <Image
              src="/post-newjob-firststep-img.png"
              alt=""
              width="320"
              height="20"
            />
          </Box>
          <CustomTypography
            sx={{
              color: "#034275",
              fontFamily: BOLD,
              fontSize: "28px",
              mb: "25px",
            }}
          >
            Job Details
          </CustomTypography>
          <Divider sx={{ bgcolor: "rgba(122, 193, 218, 0.6)", mb: "40px" }} />
          {country === "LK" ||
          (companyDet.jobSlot === true &&
            companyDet.package?.paymentStatus === "Completed") ? (
            <Box sx={{ width: "100%", p: "0 0 20px 0" }} className="plan">
              <FormControl
                fullWidth
                sx={{ ...style.txtinput, bgcolor: "white" }}
              >
                <InputLabel id="demo-simple-select-label">
                  Choose a plan
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Choose a plan"
                  // sx={styles.naminput2}
                  value={pack || ""}
                  name="careerlevel"
                  onChange={(e) => {
                    handlePack(e);
                  }}
                >
                  <MenuItem value="free" disabled={freeCount === 0}>
                    <CustomTypography>
                      Free Job Post - Jobs Left : {freeCount}
                    </CustomTypography>
                  </MenuItem>
                  <MenuItem
                    value="pro"
                    disabled={proCOunt === 0 || proCOunt === undefined}
                  >
                    <CustomTypography>
                      Pro Job Post - Jobs Left : {proCOunt}
                    </CustomTypography>
                  </MenuItem>
                  <MenuItem
                    value="premium"
                    disabled={preCOunt === 0 || preCOunt === undefined}
                  >
                    <CustomTypography>
                      Premium Job Post - Jobs Left : {preCOunt}
                    </CustomTypography>
                  </MenuItem>
                  <MenuItem
                    value="jSlot"
                    disabled={
                      !(
                        companyDet.package?.paymentStatus === "Completed" &&
                        companyDet.package?.subscription_package === "Growth"
                      )
                    }
                  >
                    <CustomTypography>Growth Plan - Job Slot</CustomTypography>
                  </MenuItem>

                  {companyDet?.jobSlotGold === true ? (
                    <MenuItem
                      value="jSlot"
                      disabled={
                        !(
                          companyDet.package?.paymentStatus === "Completed" &&
                          companyDet.package?.subscription_package === "Gold"
                        )
                      }
                    >
                      <CustomTypography>Gold Plan - Job Slot</CustomTypography>
                    </MenuItem>
                  ) : (
                    ""
                  )}
                </Select>
              </FormControl>
            </Box>
          ) : (
            ""
          )}
          <Stack spacing={3}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              fullWidth
              name="jobRole"
              value={level}
              onBlur={(value) => {
                handleChangesRole(value);
              }}
              className="title"
              options={titleDesc.map((option) => option.rol.role)}
              renderInput={(params) => (
                <TextField
                  sx={{ ...style.txtinput, bgcolor: "white" }}
                  {...params}
                  label="Job Title"
                  error={errors?.jobRole ? true : false}
                  helperText={errors?.jobRole}
                  name="jobRole"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
            {category && (
              <Box sx={{ width: "100%" }}>
                <Autocomplete
                  fullWidth
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  value={title}
                  onInputChange={(event, value) => {
                    handleChangesTitle(value);
                  }}
                  name="jobTitle"
                  options={type.map((option) => option.jobNam)}
                  renderInput={(params) => (
                    <TextField
                      sx={{ textTransform: "capitalize" }}
                      error={errors?.jobTitle ? true : false}
                      helperText={errors?.jobTitle}
                      value="hhhi"
                      name="jobTitle"
                      {...params}
                      label="Job Category"
                      placeholder="Please Provide Category"
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                      }}
                    />
                  )}
                />
              </Box>
            )}
            <Box
              sx={{
                width: "100%",
                height: "auto",
                bgcolor: "white",
              }}
            >
              <EditorToolbar sx={{ bgcolor: "#F2F8FD" }} />
              <ReactQuill
                placeholder="Add Description"
                value={descript}
                onChange={handleChangeDesc}
                // onBlur={handleChangeDesc}
                modules={modules}
                formats={formats}
                className="textareaQuestion"
                style={{ height: "250px" }}
              />
            </Box>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable={false}
                name="skills"
                sx={{
                  ...style.txtinput,
                  bgcolor: "white",
                  width: { xs: "95%", md: "80%" },
                }}
                value={role.skill}
                onBlurCapture={(e) =>
                  setRole({ skill: e.target.value, id: uuidv4() })
                }
                open={open}
                onOpen={() => {
                  setOpen(true);
                }}
                onClose={() => {
                  setOpen(false);
                }}
                onKeyUp={(e) => {
                  handleKey(e);
                }}
                options={arrskills.map((option) => option)}
                loading={loading}
                renderInput={(params) => (
                  <TextField
                    sx={style.txtinput}
                    {...params}
                    label="Skills"
                    onChange={(e) => {
                      inputChanged(e);
                    }}
                    name="jobRole"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                      endAdornment: (
                        <React.Fragment>
                          {loading && load ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : null}
                        </React.Fragment>
                      ),
                    }}
                  />
                )}
              />
              <Button
                sx={{
                  width: "20%",
                  bgcolor: "white !important",
                  color: "#01313F",
                  textTransform: "capitalize",
                  display: { xs: "none", md: "block" },
                  whiteSpace: "nowrap",
                }}
                //sx={styles.roleblue2}
                onClick={() => {
                  addSkil();
                }}
                startIcon={<AddIcon />}
              >
                Add Skills
              </Button>
              <AddIcon
                onClick={() => {
                  addSkil();
                }}
                sx={{ display: { xs: "block", md: "none" }, cursor: "pointer" }}
              />
            </Stack>
            {isEmpty(!jobs?.requiredSkill) && (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {jobs?.requiredSkill &&
                  jobs?.requiredSkill.map((role, index) => (
                    <Box key={index}>
                      <Chip
                        label={role?.skill}
                        onDelete={() => {
                          handleRemove(role?.id);
                        }}
                        sx={{ bgcolor: "#D4F0FC" }}
                      />
                    </Box>
                  ))}
              </Box>
            )}
            <Address />
            <Box className="questions">
              {" "}
              <ScreeningQuestions />
            </Box>
          </Stack>
        </Box>
      </CardContent>
      <Tour
        onRequestClose={closeTour}
        disableInteraction={true}
        steps={tourConfig}
        isOpen={isTourOpen}
        maskClassName={styles.mask}
        className={styles.helper}
        rounded={8}
        accentColor={accentColor}
      />
    </>
  );
};

export default JobDetails;
