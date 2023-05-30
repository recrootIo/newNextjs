import * as React from "react";
import {
  Box,
  Grid,
  Container,
  List,
  ListItemButton,
  Button,
  Card,
  Stack,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Divider,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./subscription.module.css";
import FooterHome from "@/components/Home/FooterHome";
import Image from "next/image";

//Table
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Subscriptions = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
                  Subscriptions
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
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <Stack spacing={2} sx={{ height: "100%" }}>
                    <Card
                      sx={{
                        width: "100%",
                        borderRadius: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "rgba(255, 252, 252, 0.91)",
                          height: "67px",
                          display: "flex",
                          alignItems: "center",
                          p: "0px 15px 0px 15px",
                        }}
                      >
                        <CustomTypography
                          sx={{
                            color: "#01313F",
                            fontWeight: 600,
                            fontSize: "20px",
                          }}
                        >
                          Current subscription Plan
                        </CustomTypography>
                      </Box>
                      <Box
                        sx={{
                          backgroundColor: "blue",
                          height: "210px",
                          p: "0px 15px 0px 15px",
                        }}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={8}>
                            <Stack spacing={3}>
                              <Box
                                sx={{
                                  bgcolor: "#03E7F4",
                                  width: "40%",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  borderRadius: "6px",
                                }}
                              >
                                <CustomTypography
                                  sx={{
                                    color: "#00339B",
                                    fontWeight: 600,
                                    fontSize: "24px",
                                  }}
                                >
                                  Pro Plan
                                </CustomTypography>
                              </Box>
                              <Box
                                sx={{
                                  width: "30%",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  border: "1px solid #CEF4F6",
                                  borderRadius: "6px",
                                }}
                              >
                                <CustomTypography
                                  sx={{
                                    color: "#85F8FF",
                                    fontWeight: 600,
                                    fontSize: "24px",
                                  }}
                                >
                                  ₹ 600
                                </CustomTypography>
                              </Box>
                              <Stack direction="row" spacing={2}>
                                <Button
                                  variant="contained"
                                  sx={{
                                    bgcolor: "white !important",
                                    color: "#01313F",
                                    textTransform: "capitalize",
                                    fontSize: "16px",
                                    width: "50%",
                                  }}
                                >
                                  View Detail
                                </Button>
                                <Button
                                  variant="contained"
                                  sx={{
                                    bgcolor: "white !important",
                                    color: "#01313F",
                                    textTransform: "capitalize",
                                    fontSize: "16px",
                                    width: "50%",
                                  }}
                                >
                                  Change Plan
                                </Button>
                              </Stack>
                            </Stack>
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            sx={{
                              backgroundImage:
                                'url("/thubs-up-bg-vector.svg.svg")',
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "contain",
                            }}
                          >
                            <Image
                              src="/current-sub-card-thumb-up-img.png"
                              alt=""
                              width="130"
                              height="130"
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    </Card>
                    <Card
                      sx={{
                        width: "100%",
                        borderRadius: "10px",
                        p: "15px",
                        // backgroundImage: 'url("/manage-payments-card-bg.svg")',
                        // backgroundRepeat: "no-repeat",
                        // backgroundSize: "cover",
                        bgcolor: "blue",
                      }}
                    >
                      <Box
                        sx={{
                          height: "160px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={8}>
                            <Stack spacing={2}>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <CustomTypography
                                  sx={{
                                    color: "white",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                  }}
                                >
                                  Next Payment
                                </CustomTypography>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <CustomTypography
                                  sx={{
                                    color: "#85F8FF",
                                    fontWeight: 600,
                                    fontSize: "24px",
                                  }}
                                >
                                  ₹ 600
                                </CustomTypography>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <CustomTypography
                                  sx={{
                                    color: "white",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                  }}
                                >
                                  On 06/07/2023
                                </CustomTypography>
                              </Box>
                            </Stack>
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Button
                              variant="contained"
                              sx={{
                                bgcolor: "white !important",
                                color: "#01313F",
                                textTransform: "capitalize",
                                fontSize: "15px",
                                width: "100%",
                              }}
                            >
                              Manage Payments
                            </Button>
                          </Grid>
                        </Grid>
                      </Box>
                    </Card>
                  </Stack>
                </Grid>
                <Grid item xs={5}>
                  <Card sx={{ borderRadius: "10px" }}>
                    <Box
                      sx={{
                        backgroundColor: "#02A9F7",
                        height: "54px",
                        display: "flex",
                        alignItems: "center",
                        p: "0px 15px 0px 15px",
                      }}
                    >
                      <CustomTypography
                        sx={{
                          color: "white",
                          fontWeight: 600,
                          fontSize: "24px",
                        }}
                      >
                        Invoice Information
                      </CustomTypography>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: "#F2F8FD",
                        height: "360px",
                        display: "flex",
                        alignItems: "center",
                        p: "0px 15px 0px 15px",
                      }}
                    >
                      <Stack spacing={2} sx={{ width: "100%" }}>
                        <Box className={styles.SubsInvoiceTypoBox}>
                          <CustomTypography className={styles.SubsInvoiceTypo}>
                            Invoice Information
                          </CustomTypography>
                          <CustomTypography
                            className={styles.SubsInvoiceDataTypo}
                          >
                            17ea6d71669bde6
                          </CustomTypography>
                        </Box>
                        <Box className={styles.SubsInvoiceTypoBox}>
                          <CustomTypography className={styles.SubsInvoiceTypo}>
                            Date
                          </CustomTypography>
                          <CustomTypography
                            className={styles.SubsInvoiceDataTypo}
                          >
                            05/07/2023
                          </CustomTypography>
                        </Box>
                        <Box className={styles.SubsInvoiceTypoBox}>
                          <CustomTypography className={styles.SubsInvoiceTypo}>
                            Description
                          </CustomTypography>
                          <CustomTypography
                            className={styles.SubsInvoiceDataTypo}
                          >
                            Pro Plan Package
                          </CustomTypography>
                        </Box>
                        <Box className={styles.SubsInvoiceTypoBox}>
                          <CustomTypography className={styles.SubsInvoiceTypo}>
                            Transaction
                          </CustomTypography>
                          <CustomTypography
                            className={styles.SubsInvoiceDataTypo}
                          >
                            Incompleted
                          </CustomTypography>
                        </Box>
                        <Box className={styles.SubsInvoiceTypoBox}>
                          <CustomTypography className={styles.SubsInvoiceTypo}>
                            Amount
                          </CustomTypography>
                          <CustomTypography
                            className={styles.SubsInvoiceDataTypo}
                          >
                            ₹ 600
                          </CustomTypography>
                        </Box>
                        <Divider />
                        <Box className={styles.SubsInvoiceTypoBox}>
                          <CustomTypography className={styles.SubsInvoiceTypo}>
                            Sub Total
                          </CustomTypography>
                          <CustomTypography
                            className={styles.SubsInvoiceDataTypo}
                          >
                            ₹ 600
                          </CustomTypography>
                        </Box>
                        <Box className={styles.SubsInvoiceTypoBox}>
                          <CustomTypography className={styles.SubsInvoiceTypo}>
                            Tax
                          </CustomTypography>
                          <CustomTypography
                            className={styles.SubsInvoiceDataTypo}
                          >
                            ₹ 000
                          </CustomTypography>
                        </Box>
                      </Stack>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: "#02A9F7",
                        height: "54px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        p: "0px 15px 0px 15px",
                      }}
                    >
                      <CustomTypography className={styles.SubsInvoiceTotalTypo}>
                        Total
                      </CustomTypography>
                      <CustomTypography
                        className={styles.SubsInvoiceTotalDataTypo}
                      >
                        ₹ 600
                      </CustomTypography>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#015FB1 !important",
                    height: "54px",
                    width: "40%",
                    borderRadius: "8px",
                    mt: "80px",
                  }}
                >
                  Download Invoice
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ width: "100%" }}>
              <CustomTypography
                sx={{
                  color: "#01313F",
                  fontWeight: 600,
                  fontSize: "24px",
                }}
              >
                Billing History
              </CustomTypography>
            </Box>
            <TableContainer
              component={Paper}
              sx={{ bgcolor: "#F2F8FD", mt: "20px" }}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={styles.TableHeadings}>
                      Payment ID{" "}
                    </TableCell>
                    <TableCell align="right" className={styles.TableHeadings}>
                      Amount
                    </TableCell>
                    <TableCell align="right" className={styles.TableHeadings}>
                      Package
                    </TableCell>
                    <TableCell align="right" className={styles.TableHeadings}>
                      Status
                    </TableCell>
                    <TableCell align="right" className={styles.TableHeadings}>
                      Payment Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </div>
      </Container>
      <FooterHome />
    </>
  );
};

export default Subscriptions;
