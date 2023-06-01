"use client";
import * as React from "react";
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
  IconButton,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import { styles } from "@/components/Employers/CompanyProfile/CompanyProfileStyle";
import { useSelector } from "react-redux";
import Image from "next/image";
import Layout from "../layout";

const Members = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  //   const member = useSelector((state) => state.company.members);
  //   const [memberrole, setMemberrole] = React.useState(member);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleAddInput = () => {
    setMemberrole([
      ...memberrole,
      { id: uuidv4(), memberId: "", role: "", fname: "" },
    ]);
  };

  return (
    <Layout>
      <Stack sx={{ width: "100%" }}>
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
        <Stack direction="row" spacing={7}>
          <Card
            sx={{
              width: "100%",
              height: "190px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              backgroundImage: 'url("/activejob-bg.svg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "25px",
              }}
            >
              <Image src="/basic-info-img.png" alt="" width="60" height="42" />
            </Box>
            <CardContent>
              <CustomTypography
                sx={{ color: "white", fontSize: "30px" }}
                variant="h5"
              >
                Basic Info
              </CustomTypography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: "100%",
              height: "190px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              backgroundImage: 'url("/inactivejobs-bg.svg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "25px",
              }}
            >
              <Image src="/members-img.png" alt="" width="60" height="62" />
            </Box>
            <CardContent>
              <CustomTypography
                sx={{ color: "white", fontSize: "30px" }}
                variant="h5"
              >
                Members
              </CustomTypography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: "100%",
              height: "190px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              backgroundImage: 'url("/interviews-bg.svg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "25px",
              }}
            >
              <Image
                src="/preview-img.png"
                alt=""
                width="70"
                height="62"
                style={{
                  width: "60px",
                }}
              />
            </Box>
            <CardContent>
              <CustomTypography
                sx={{ color: "white", fontSize: "30px" }}
                variant="h5"
              >
                Preview
              </CustomTypography>
            </CardContent>
          </Card>
        </Stack>
        <Card
          sx={{
            width: "100%",
            backgroundColor: "#F2F8FD",
            mt: "40px",
            pb: "80px",
          }}
        >
          <CardContent>
            <Box>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "20px",
                }}
              >
                <CustomTypography
                  sx={{
                    color: "#034275",
                    fontFamily: BOLD,
                    fontSize: "28px",
                  }}
                >
                  Members
                </CustomTypography>
                {/* {memberrole.length === index + 1 ? ( */}
                <Button
                  variant="text"
                  //onClick={handleAddInput}
                  sx={{
                    color: "#034275",
                  }}
                >
                  + Add New Member
                </Button>
                {/* ) : (
                        ""
                      )} */}
              </Stack>
              <Box sx={{ display: "flex", mt: "20px" }}>
                <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
                  <Box
                    sx={{
                      width: "45%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FormControl sx={{ width: "100%", bgcolor: "white" }}>
                      <InputLabel
                        id="demo-simple-select-label"
                        sx={{ color: "#BAD4DF" }}
                      >
                        Member Name
                      </InputLabel>
                      <Select
                        name="memberId"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={member.memberId}
                        // onChange={(e) => {
                        //   handleMemChange(member.id, e);
                        // }}
                        label="Account Members"
                        sx={styles.naminput2}
                        // error={errors.cmpemail ? true : false}
                        // helperText={errors.cmpemail}
                      >
                        {/* {result.map((res) => (
                          <MenuItem
                            key={res.firstName}
                            value={res._id}
                            hidden={mems.some(
                              (vendor) => vendor["memberId"] === res._id
                            )}
                          >
                            {res.firstName} {res.lastName}
                          </MenuItem>
                        ))} */}
                      </Select>
                    </FormControl>
                  </Box>
                  <Box
                    sx={{
                      width: "45%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FormControl sx={{ width: "100%", bgcolor: "white" }}>
                      <InputLabel
                        id="demo-simple-select-label"
                        sx={{ color: "#BAD4DF" }}
                      >
                        Roles
                      </InputLabel>
                      {/* {user?.User?.memberType === "jobsAdmin" ? ( */}
                      <Select
                        name="role"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //value={member && member.role}
                        label="Roles"
                        sx={styles.naminput2}
                        // onChange={(e) => {
                        //   handleMemChange(member.id, e);
                        // }}
                      >
                        <MenuItem value="HiringManager">
                          Hiring Manager
                        </MenuItem>
                      </Select>
                      {/* ) : (
                          <Select
                            name="role"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={member && member.role}
                            label="Roles"
                            sx={styles.naminput2}
                            onChange={(e) => {
                              handleMemChange(member.id, e);
                            }}
                          >
                            <MenuItem value="SuperAdmin">
                              {" "}
                              Super Admin{" "}
                            </MenuItem>
                            <MenuItem value="jobsAdmin">Jobs Admin</MenuItem>
                            <MenuItem value="HiringManager">
                              Hiring Manager
                            </MenuItem>
                          </Select>
                        )} */}
                    </FormControl>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      ml: "20px",
                      width: "10%",
                    }}
                  >
                    {/* {memberrole.length > 1 ? ( */}
                    <IconButton
                      variant="contained"
                      sx={styles.addbtn}
                      //   onClick={() => {
                      //     handleMemRemove(member.id);
                      //   }}
                    >
                      <RemoveCircleIcon
                        sx={{
                          fontSize: { sm: "2.5rem", xs: "1.5rem" },
                          color: "#FF543E",
                        }}
                      />
                    </IconButton>
                    {/* ) : (
                        ""
                      )} */}
                  </Box>
                </Stack>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Stack>
    </Layout>
  );
};

export default Members;
