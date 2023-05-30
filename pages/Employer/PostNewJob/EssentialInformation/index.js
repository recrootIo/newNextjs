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
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Divider,
  Switch,
  FormControlLabel,
  InputAdornment,
  TextField,
  FormHelperText,
  FormGroup,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import { styles } from "@/components/Employers/CompanyProfile/CompanyProfileStyle";
import Image from "next/image";

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

const EssentialInformation = () => {
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
        <div
        //style={{ position: "absolute" }}
        >
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
                  Hello User
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
                        src="/post-newjob-secondstep-img.png"
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
                      Essential Information
                    </CustomTypography>
                    <Divider
                      sx={{ bgcolor: "rgba(122, 193, 218, 0.6)", mb: "40px" }}
                    />
                    <Stack spacing={3}>
                      <Stack direction="row" spacing={2}>
                        <FormControl
                          sx={{
                            ...style.txtinput,
                            bgcolor: "white",
                            width: "50%",
                          }}
                        >
                          <InputLabel
                            id="demo-simple-select-label"
                            sx={{ color: "#BAD4DF" }}
                          >
                            Career Level
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Career Level"
                            //value={level.careerlevel}
                            name="careerlevel"
                            // onChange={(e) => {
                            //   handleChangeLevel(e);
                            // }}
                            // error={errors.careerlevel ? true : false}
                            // helperText={errors.careerlevel}
                          >
                            {/* {CAREER_LEVEL.map((CareerLevel) => ( */}
                            <MenuItem
                            //   key={CareerLevel} value={CareerLevel}
                            >
                              <CustomTypography textAlign="center">
                                {/* {CareerLevel} */}
                              </CustomTypography>
                            </MenuItem>
                            {/* ))} */}
                          </Select>
                          {/* {!!errors.careerlevel && ( */}
                          <FormHelperText error id="accountId-error">
                            {/* {errors.careerlevel} */}
                          </FormHelperText>
                          {/* )} */}
                        </FormControl>
                        <FormControl
                          sx={{
                            ...style.txtinput,
                            bgcolor: "white",
                            width: "50%",
                          }}
                        >
                          <InputLabel
                            id="demo-simple-select-label"
                            sx={{ color: "#BAD4DF" }}
                          >
                            Experience
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Experience"
                            sx={styles.naminput2}
                            // value={level.experience}
                            // name="experience"
                            // onChange={(e) => {
                            //   handleChangeLevel(e);
                            // }}
                            // error={errors.experience ? true : false}
                            // helperText={errors.experience}
                          >
                            {/* {USER_EXPERIENCES.map((Experiences) => ( */}
                            <MenuItem
                            //key={Experiences} value={Experiences}
                            >
                              <CustomTypography textAlign="center">
                                {/* {Experiences} */}
                              </CustomTypography>
                            </MenuItem>
                            {/* ))} */}
                          </Select>
                          {/* {!!errors.experience && ( */}
                          <FormHelperText error id="accountId-error">
                            {/* {errors.experience} */}
                          </FormHelperText>
                          {/* )} */}
                        </FormControl>
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <FormControl
                          sx={{
                            ...style.txtinput,
                            bgcolor: "white",
                            width: "50%",
                          }}
                        >
                          <InputLabel
                            id="demo-simple-select-label"
                            sx={{ color: "#BAD4DF" }}
                          >
                            Qualifications
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Qualifications"
                            sx={styles.naminput2}
                            //value={level.qualification}
                            name="qualification"
                            // error={errors.qualification ? true : false}
                            // helperText={errors.qualification}
                            // onChange={(e) => {
                            //   handleChangeLevel(e);
                            // }}
                          >
                            {/* {EDUCATION_LEVELS.map((Qualifications) => ( */}
                            <MenuItem
                            // key={Qualifications}
                            // value={Qualifications}
                            >
                              <CustomTypography textAlign="center">
                                {/* {Qualifications} */}
                              </CustomTypography>
                            </MenuItem>
                            {/* ))} */}
                          </Select>
                          {/* {!!errors.qualification && (
                            <FormHelperText error id="accountId-error">
                              {errors.qualification}
                            </FormHelperText>
                          )} */}
                        </FormControl>
                        <Box sx={{ width: "50%" }}>
                          <LocalizationProvider
                            dateAdapter={AdapterDateFns}
                            style={{ width: "50%", bgcolor: "white" }}
                          >
                            <MobileDatePicker
                              slotProps={{
                                textField: {
                                  ...style.txtinput,
                                  bgcolor: "white",
                                  width: "50%",
                                },
                              }}
                              style={{ width: "50%", bgcolor: "white" }}
                              label="Deadline"
                              name="applicationDeadline"
                              inputFormat="dd/MM/yyyy"
                              minDate={new Date()}
                              //   value={
                              //     jobs === ""
                              //       ? value
                              //       : jobs && jobs.applicationDeadline
                              //   }
                              //   onChange={handleChangeDate}
                              renderInput={(params) => (
                                <TextField
                                  error={
                                    errors.applicationDeadline ? true : false
                                  }
                                  {...params}
                                  style={{ width: "100% !important" }}
                                />
                              )}
                            />
                          </LocalizationProvider>
                          {/* {!!errors.applicationDeadline && (
                            <FormHelperText error id="accountId-error">
                              {errors.applicationDeadline}
                            </FormHelperText>
                          )} */}
                        </Box>
                      </Stack>
                      <FormControl sx={{ ...style.txtinput, bgcolor: "white" }}>
                        <InputLabel
                          id="demo-simple-select-label"
                          sx={{ color: "#BAD4DF" }}
                        >
                          Notice Period
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          //   value={jobs && jobs?.notice}
                          //   onChange={(e) => {
                          //     handleChangesChild(e);
                          //   }}
                          name="notice"
                          //   error={errors.notice ? true : false}
                          //   helperText={errors.notice}
                          label="notice period"
                          sx={styles.naminput2}
                        >
                          {/* {NoticePeriod.map((not, ind) => (
                            <MenuItem key={ind} value={not}>
                              {not}
                            </MenuItem>
                          ))} */}
                        </Select>
                        {/* {!!errors.notice && (
                          <FormHelperText error id="accountId-error">
                            {errors.notice}
                          </FormHelperText>
                        )} */}
                      </FormControl>
                      <FormControl sx={{ ...style.txtinput, bgcolor: "white" }}>
                        <InputLabel
                          id="demo-simple-select-label"
                          sx={{ color: "#BAD4DF" }}
                        >
                          Job Type
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          //   value={jobs && jobs.jobType}
                          //   onChange={(e) => {
                          //     handleChangesChild(e);
                          //   }}
                          name="jobType"
                          //   error={errors.jobType ? true : false}
                          //   helperText={errors.jobType}
                          label="Job Type"
                          sx={styles.naminput2}
                        >
                          <MenuItem value={"Remote"}>Remote</MenuItem>
                          <MenuItem value={"Onsite"}>Onsite</MenuItem>
                          <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
                        </Select>
                        {/* {!!errors.jobType && (
                          <FormHelperText error id="accountId-error">
                            {errors.jobType}
                          </FormHelperText>
                        )} */}
                      </FormControl>
                      <FormControl sx={{ ...style.txtinput, bgcolor: "white" }}>
                        <InputLabel
                          id="demo-simple-select-label"
                          sx={{ color: "#BAD4DF" }}
                        >
                          Salary Type
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          //   value={jobs?.salary?.salaryType}
                          //   name={"salaryType"}
                          //   onChange={(e) => {
                          //     handleChangesSalary(e);
                          //   }}
                          label="Salary Type"
                          //   error={errors.salaryType ? true : false}
                          //   helperText={errors.salaryType}
                          sx={styles.naminput2}
                        >
                          <MenuItem selected value={"noprovide"}>
                            Negotiable
                          </MenuItem>
                          <MenuItem value={"yearly"}>Yearly</MenuItem>
                          <MenuItem value={"monthly"}>Monthly</MenuItem>
                          <MenuItem value={"hourly"}>Hourly</MenuItem>
                        </Select>
                      </FormControl>
                      <Stack direction="row" spacing={2}>
                        <FormControl
                          sx={{
                            ...style.txtinput,
                            bgcolor: "white",
                            width: "50%",
                          }}
                        >
                          <InputLabel
                            id="demo-simple-select-label"
                            sx={{ color: "#BAD4DF" }}
                          >
                            Salary Currency
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="salaryCrrancy"
                            label="Salary Currency"
                            //   value={jobs.salary && jobs.salary.salaryCrrancy}
                            //   onChange={(e) => {
                            //     handleChangesSalary(e);
                            //   }}
                            //   error={errors.salaryCrrancy ? true : false}
                            //   helperText={errors.salaryCrrancy}
                          >
                            {/* {CURRENCY.map((cur, ind) => (
                            <MenuItem key={ind} value={cur.symbol}>
                              {cur.country}-{cur.symbol}
                            </MenuItem>
                          ))} */}
                          </Select>
                          {/* {!!errors.salaryCrrancy && (
                          <FormHelperText error id="accountId-error">
                            {errors.salaryCrrancy}
                          </FormHelperText>
                        )} */}
                        </FormControl>
                        <TextField
                          InputLabelProps={{ style: { color: "#BAD4DF" } }}
                          id="outlined-basic"
                          label="Min Salary"
                          //   value={jobs.salary && jobs.salary.minSalary}
                          //   onChange={(e) => {
                          //     handleChangesSalary(e);
                          //   }}
                          type="number"
                          name="minSalary"
                          //   error={errors.minSalary ? true : false}
                          //   helperText={errors.minSalary}
                          placeholder="Enter Min Salary"
                          variant="outlined"
                          sx={{
                            ...style.txtinput,
                            bgcolor: "white",
                            width: "25%",
                          }}
                        />
                        <TextField
                          InputLabelProps={{ style: { color: "#BAD4DF" } }}
                          id="outlined-basic"
                          //   value={jobs.salary && jobs.salary.maxSalary}
                          //   onChange={(e) => {
                          //     handleChangesSalary(e);
                          //   }}
                          label="Max Salary"
                          //   error={errors.maxSalary ? true : false}
                          //   helperText={errors.maxSalary}
                          type="number"
                          name="maxSalary"
                          placeholder="Enter Max Salary"
                          variant="outlined"
                          sx={{
                            ...style.txtinput,
                            bgcolor: "white",
                            width: "25%",
                          }}
                        />
                      </Stack>
                      <Box>
                        <FormGroup>
                          <FormControlLabel
                            sx={{ justifyContent: "flex-end", ml: 0 }}
                            control={
                              <Switch
                                // checked={feature}
                                // onChange={handleFeatureType}
                                inputProps={{ "aria-label": "controlled" }}
                              />
                            }
                            label={
                              <CustomTypography
                                sx={{
                                  fontWeight: "300",
                                  fontSize: "16px",
                                  lineHeight: "30px",
                                  color: "#01313F",
                                }}
                              >
                                Make this job a featured job
                              </CustomTypography>
                            }
                            labelPlacement="start"
                          />
                        </FormGroup>
                      </Box>
                      <Box>
                        <FormGroup>
                          <FormControlLabel
                            sx={{ justifyContent: "flex-end", ml: 0 }}
                            control={
                              <Switch
                                // checked={immediate}
                                // onChange={handleImmediateType}
                                inputProps={{ "aria-label": "controlled" }}
                              />
                            }
                            label={
                              <CustomTypography
                                sx={{
                                  fontWeight: "300",
                                  fontSize: "16px",
                                  lineHeight: "30px",
                                  color: "#01313F",
                                }}
                              >
                                Make this job an immediate job
                              </CustomTypography>
                            }
                            labelPlacement="start"
                          />
                        </FormGroup>
                      </Box>
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
                      <Button
                        variant="outlined"
                        sx={{ width: "50%", height: "55px" }}
                      >
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
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default EssentialInformation;
