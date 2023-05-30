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

const style = {
  txtinput: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        width: { md: "100%", xs: "100%" },
        height: "60px",
        color: "#BAD4DF",
        backgroundColor: "white",
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
    <>
      <EmployerNavbar />
      <Box
        sx={{
          backgroundImage: 'url("/EmployerDashboardBG.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "250px",
        }}
      ></Box>

      <Container>
        <div style={{ position: "relative", top: "-150px" }}>
          <Grid container spacing={2} sx={{ pb: "50px" }}>
            <Grid item xs={2}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 110,
                  bgcolor: "#034275",
                  borderRadius: "10px",
                  pb: "20px",
                }}
              >
                <List component="nav" aria-label="main mailbox folders">
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                  >
                    <Image src="/empImg.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <Divider variant="middle" color="gray" />
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                  >
                    <Image src="/home.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                  >
                    <Image src="/profile.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                  >
                    <Image src="/jobs.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                  >
                    <Image src="/team.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}
                  >
                    <Image src="/convo.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 6}
                    onClick={(event) => handleListItemClick(event, 6)}
                  >
                    <Image
                      src="/subscription.png"
                      alt=""
                      width="40"
                      height="40"
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 7}
                    onClick={(event) => handleListItemClick(event, 7)}
                  >
                    <Image src="/myAccount.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 8}
                    onClick={(event) => handleListItemClick(event, 8)}
                  >
                    <Image
                      src="/power-icon.png"
                      alt=""
                      width="40"
                      height="40"
                    />
                  </ListItemButton>
                </List>
              </Box>
            </Grid>
            <Grid item xs={10}>
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
                    <Divider
                      sx={{ bgcolor: "rgba(122, 193, 218, 0.6)", mb: "40px" }}
                    />
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
                            sx={style.txtinput}
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
                          sx={{ width: "80%" }}
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
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default JobDetails;
