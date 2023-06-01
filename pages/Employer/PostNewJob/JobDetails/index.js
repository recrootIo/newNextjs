"use client";
import React, { useState } from "react";
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
// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import ScreeningQuestions from "@/components/Employers/ScreeningQuestions/ScreeningQuestions";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import Image from "next/image";
import Layout from "../../layout";

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
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [apiAddress, setapiAddress] = useState("");
  //   const member = useSelector((state) => state.company.members);
  //   const [memberrole, setMemberrole] = React.useState(member);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", width: "100%", mb: "30px" }}>
        <CustomTypography
          variant="h6"
          sx={{
            fontFamily: BOLD,
            fontSize: "28px",
            flex: 1,
            color: "white",
          }}
          gutterBottom
        >
          Create New Job
        </CustomTypography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "white !important",
            color: "#01313F",
            height: "42px",
          }}
        >
          Post New Job
        </Button>
      </Box>
      <Card
        sx={{
          width: "100%",
          backgroundColor: "#F2F8FD",
          mt: "40px",
          p: "25px 25px 80px 25px",
        }}
      >
        <CardContent>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "30px",
                mb: "100px",
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
            <Stack spacing={3}>
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                fullWidth
                name="jobRole"
                // value={level}
                // onBlur={(value) => {
                //   handleChangesRole(value);
                // }}
                // options={titleDesc.map((option) => option.rol.role)}
                renderInput={(params) => (
                  <TextField
                    sx={{ ...style.txtinput, bgcolor: "white" }}
                    {...params}
                    label="Job Title"
                    //error={errors.jobRole ? true : false}
                    //helperText={errors.jobRole}
                    name="jobRole"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                    color="warning"
                    //sx={{ color: "" }}
                  />
                )}
              />
              <Box
                sx={{
                  width: "100%",
                  height: "320px",
                }}
              >
                <EditorToolbar sx={{ bgcolor: "#F2F8FD" }} />
                <ReactQuill
                  placeholder="Add Description"
                  // value={cmpin.infodes}
                  // onChange={handleDesc}
                  // onBlur={handleBlurDes}
                  // modules={modules}
                  // formats={formats}
                  // className="textareaQuestion"
                  style={{ height: "250px" }}
                />
              </Box>
              <Stack direction="row" spacing={2}>
                <Autocomplete
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable={false}
                  name="skills"
                  sx={{
                    ...style.txtinput,
                    bgcolor: "white",
                    width: "80%",
                  }}
                  // value={role.skill}
                  // onBlurCapture={(e) =>
                  //   setRole({ skill: e.target.value, id: uuidv4() })
                  // }
                  // open={open}
                  // onOpen={() => {
                  //   setOpen(true);
                  // }}
                  // onClose={() => {
                  //   setOpen(false);
                  // }}
                  // onBlur={addSkil}
                  // onKeyUp={(e) => {
                  //   handleKey(e);
                  // }}
                  // options={arrskills.map((option) => option)}
                  // loading={loading}
                  renderInput={(params) => (
                    <TextField
                      sx={style.txtinput}
                      {...params}
                      label="Skills"
                      // error={errors.jobRole ? true : false}
                      // helperText={errors.jobRole}
                      // onChange={(e) => {
                      //   inputChanged(e);
                      // }}
                      name="jobRole"
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                        endAdornment: (
                          <React.Fragment>
                            {/* {loading && load ? (
                                  <CircularProgress color="inherit" size={20} />
                                ) : null} */}
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
                  }}
                  //sx={styles.roleblue2}
                  // onClick={() => {
                  //   addSkil();
                  // }}
                  startIcon={<AddIcon />}
                >
                  Add Skills
                </Button>
              </Stack>
              {/* {isEmpty(!jobs.requiredSkill) && ( */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {/* {jobs.requiredSkill &&
                            jobs.requiredSkill.map((role, index) => ( */}
                <Box
                //key={index}
                >
                  <Chip
                    // label={role?.skill}
                    // onDelete={() => {
                    //   handleRemove(role?.id);
                    // }}
                    sx={{ bgcolor: "#D4F0FC" }}
                  />
                </Box>
                {/* ))} */}
              </Box>
              {/* )} */}
              <Box sx={{ width: "100%" }}>
                <GooglePlacesAutocomplete
                  apiKey="AIzaSyCLT3fP1-59v2VUVoifXXJX-MQ0HA55Jp4"
                  selectProps={{
                    isClearable: true,
                    placeholder: "Job Location",

                    value: apiAddress.address || "",
                    // onChange: (val) => {
                    //   handleChange2(val);
                    // },
                    styles: {
                      input: (provided) => ({
                        ...provided,
                        color: "#BAD4DF",
                        height: "47px",
                        borderColor: "#BAD4DF",
                      }),
                      option: (provided) => ({
                        ...provided,
                        color: "#BAD4DF",
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        color: "#BAD4DF",
                        borderColor: "#BAD4DF",
                      }),
                    },
                  }}
                />
              </Box>
              <ScreeningQuestions />
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: "40px",
              }}
            >
              <Button variant="outlined" sx={{ width: "50%", height: "55px" }}>
                Previous
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: "50%",
                  bgcolor: "#015FB1 !important",
                  height: "55px",
                }}
              >
                Submit
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default JobDetails;
