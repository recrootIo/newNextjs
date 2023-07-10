/* eslint-disable @next/next/no-img-element */
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import { getCurrencyCode } from "@/utils/currency";
import { Button } from "@mui/base";
import {
  Alert,
  Card,
  Container,
  Divider,
  Grid,
  TextField,
  styled,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import { ERROR, NEW_PRICING_PLAN } from "@/utils/constants";
import {
  AddCircleOutlineRounded,
  RemoveCircleOutline,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import AddCardIcon from "@mui/icons-material/AddCard";
import { changeValue, updatePromotion } from "@/redux/slices/Subscription";
import { openAlert } from "@/redux/slices/alert";
import { useRouter } from "next/navigation";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import dynamic from "next/dynamic";
const Tour = dynamic(() => import("reactour"), { ssr: false });
import styles from "../../components/Employers/styles.module.css";
import companyservice from "@/redux/services/company.service";

const StyledButton = styled(Button)({
  color: "#ffff",
  padding: "10px",
  borderRadius: "10px",
  border: "2px solid #e7eaef",
  background: "#00339B !important",
  textTransform: "capitalize",
  width: "100%",
  marginBottom: "10px",
});
const BasicButton = styled(Button)({
  color: "#ffff",
  // padding: "10px",
  borderRadius: "10px",
  border: "2px solid #e7eaef",
  background: "#4fa9ff !important",
  textTransform: "capitalize",
  width: "100%",
  marginBottom: "10px",
});

const currencyConvert = (value, currency = "US Dollar", fractions = 0) => {
  const code = getCurrencyCode(currency);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: code?.code,
    minimumFractionDigits: fractions,
  });

  return formatter.format(value);
};
function SubscribePrice() {
  const dispatch = useDispatch();
  const User = Cookies.get();
  const { push } = useRouter();
  const [promo, setPromo] = useState(null);
  const [isValid, setIsValid] = useState(false);
  // const [discount, setDiscount] = useState(0);
  const [alertType, setAlertType] = useState("info");
  const [isTourOpen, setTourOpen] = React.useState(false);
  const { price: subscriptionPrice } = useSelector(
    (state) => state.subscription
  );

  const { package: subscriptionpackage } = useSelector(
    (state) => state.subscription
  );

  const { timePeriod: subscriptionTimePackage } = useSelector(
    (state) => state.subscription
  );

  const { companyId: subscriptioncompanyId } = useSelector(
    (state) => state.subscription
  );
  const value = useSelector((state) => state.subscription);
  const { country: userCountry } = useSelector((state) => state.subscription);
  console.log(subscriptionpackage, subscriptionPrice, "pppp", userCountry);
  const [newTotal, setNewTotal] = useState(subscriptionPrice);
  const county = userCountry === "INR";
  const lakn = userCountry === "LKR";
  const validatePromo = async () => {
    const data = {
      code: promo,
      packageName: subscriptionpackage,
      price: subscriptionPrice,
      packageTime:
        subscriptionTimePackage === "mothly"
          ? "monthly"
          : subscriptionTimePackage,
    };

    const headers = { "x-access-token": `${User.token}` };

    axios
      .put(
        ` http://localhost:3000/api/${User?.companyId}/applyPromoCode`,
        data,
        {
          headers,
        }
      )
      .then((response) => {
        setIsValid(true);
        setNewTotal(response.data.updatedPrice);
        //setDiscount(response.data.percentage);
        setAlertType("success");
      })
      .catch((error) => {
        setAlertType("error");
      });
  };

  useEffect(() => {
    if (subscriptioncompanyId === null) {
      push("/Pricing", { replace: true });
    }
  });

  const navigateToPaymentGateway = () => {
    if (value?.count === 0) {
      dispatch(
        openAlert({
          type: ERROR,
          message: "Job Count Needs To Be Greater Than Zero",
        })
      );
      return;
    }
    dispatch(updatePromotion({ price: subscriptionPrice }));
    push("/Subscription/Payment", { replace: true });
  };

  const navigateToPricing = () => {
    push("/Pricing", { replace: false });
  };

  const changeApply = (e) => {
    setPromo(e.target.value);
  };

  const getAlertType = () => {
    if (alertType === "info") {
      return "info";
    }
    if (alertType === "success") {
      return "success";
    }
    if (alertType === "error") {
      return "error";
    }
  };

  const getAlertMessage = () => {
    if (alertType === "info") {
      return "Please enter your promo code .";
    }
    if (alertType === "success") {
      return "success";
    }
    if (alertType === "error") {
      return "Entered promo code id not valid anymore. Try with another one .";
    }
  };
  const handleCount = (e) => {
    if (e === "add") {
      dispatch(changeValue(value?.count + 1));
    } else if (e === "min") {
      if (value?.count === 0) {
        return;
      }
      dispatch(changeValue(value?.count - 1));
    } else {
      if (e.target.value === "") {
        dispatch(changeValue(0));
      } else {
        dispatch(changeValue(e.target.value));
      }
    }
  };

  const updateValue = async () => {
    const companyService = new companyservice();
    await companyService.updateTourValue({ payment: false });
  };

  const closeTour = () => {
    setTourOpen(false);
    updateValue();
  };

  const accentColor = "#5cb7b7";

  const tourConfig = [
    {
      selector: ".paymentCard",
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
            Select the pricing plan that match with your hiring needs
          </CustomTypography>
          <Button onClick={() => closeTour()} variant="outline">
            Done
          </Button>
        </Stack>
      ),
    },
  ];

  const company = useSelector((state) => state?.company?.companyDetl);

  useEffect(() => {
    setTourOpen(() => company?.tours?.payment);
  }, [company?.tours?.payment]);

  return (
    <div>
      <EmployerNavbar></EmployerNavbar>
      <Box
        sx={{
          backgroundImage: 'url("/EmployerDashboardBG.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "220px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomTypography
          sx={{
            color: "white",
            fontSize: "2rem",
            fontWeight: 600,
            textAlign: "center",
            m: "45px auto 0 auto",
          }}
        >
          Subscription
        </CustomTypography>
      </Box>
      <Container>
        <Card
          sx={{
            background: "#F2F8FD",
            borderRadius: "15px",
            padding: { xs: "10px", md: "65px" },
            position: "relative",
            top: "-80px",
          }}
        >
          <Card sx={{ padding: "20px" }}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sm={8}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "30px", sm: "30px", md: "60px" },
                  alignItems: "center",
                  p: "10px",
                }}
              >
                <Box
                  sx={{
                    background: "#015FB1",
                    p: "15px",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: { xs: "30px", sm: "30px", md: "60px" },
                  }}
                >
                  <Box
                    variant="outlined"
                    className="goldbutton1"
                    sx={{
                      background: "#4fa9ff",
                      borderRadius: "10px",
                      display: "flex",
                      p: {
                        xs: "15px 40px 15px 40px",
                        sm: "15px 30px 15px 30px",
                        md: "15px 40px 15px 40px",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        gap: "5px",
                      }}
                    >
                      <img src="/thumbup.png" alt="vector" />
                      <CustomTypography
                        sx={{
                          fontFamily: "'Inter'",
                          fontStyle: "normal",
                          fontWeight: 800,
                          fontSize: { xs: "30px", md: "40px" },
                          lineHeight: "145%",
                          color: "#fff",
                        }}
                      >
                        {subscriptionpackage}
                      </CustomTypography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CustomTypography
                      sx={{
                        fontFamily: "'Inter'",
                        fontStyle: "normal",
                        fontWeight: 800,
                        fontSize: "40px",
                        lineHeight: "145%",
                        color: "#fff",
                      }}
                    >
                      {subscriptionpackage === "Pro Plan" ||
                      subscriptionpackage === "Premium"
                        ? county
                          ? currencyConvert(
                              subscriptionPrice,
                              "Indian Rupee",
                              2
                            )
                          : lakn
                          ? `Rs.${subscriptionPrice}.00`
                          : currencyConvert(subscriptionPrice, "US Dollar", 2)
                        : currencyConvert(
                            subscriptionPrice,
                            "US Dollar",
                            2
                          )}{" "}
                    </CustomTypography>
                    <CustomTypography
                      sx={{
                        fontFamily: "'Inter'",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "30px",
                        lineHeight: "145%",
                        color: "#fff",
                      }}
                    >
                      {subscriptionpackage === "Pro Plan" ||
                      subscriptionpackage === "Premium"
                        ? "(monthly)"
                        : subscriptionTimePackage}
                    </CustomTypography>
                  </Box>
                </Box>
                <div className="pricig-body">
                  <ul style={{ marginBottom: "20px", ml: "-40px" }}>
                    {NEW_PRICING_PLAN[subscriptionpackage]?.packageList?.map(
                      (de, id) => (
                        <li key={id} style={{ listStyleType: "none" }}>
                          <Stack
                            direction={"row"}
                            sx={{
                              alignItems: "center",
                            }}
                            gap={2}
                          >
                            <CheckCircleOutlineTwoToneIcon
                              fontSize="small"
                              sx={{ color: "#1097CD" }}
                            />
                            <CustomTypography
                              fontSize={"19px"}
                              sx={{ lineHeight: "30.7px", color: "#034275" }}
                            >
                              {de}
                            </CustomTypography>
                          </Stack>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <StyledButton onClick={() => navigateToPricing()}>
                  {" "}
                  Change Plan
                </StyledButton>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ display: "flex", padding: "10px" }}
              >
                <Grid container spacing={2}>
                  <Grid item md={12}>
                    <Stack direction={"column"} spacing={3}>
                      <Stack direction={"row"} spacing={1}>
                        <TextField
                          sx={{ width: "80%" }}
                          onChange={changeApply}
                          label={"Promo Code"}
                        />
                        <BasicButton
                          variant="contained"
                          sx={{ width: "20%" }}
                          onClick={() => validatePromo()}
                        >
                          Apply
                        </BasicButton>
                      </Stack>
                      <Alert severity={getAlertType()}>
                        {getAlertMessage()}
                      </Alert>
                      <Divider sx={{ mt: "10px" }} />
                    </Stack>
                  </Grid>
                  {subscriptionpackage === "Pro Plan" ||
                  subscriptionpackage === "Premium" ? (
                    <>
                      <Grid
                        item
                        xs={6}
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          textAlign: "left",
                        }}
                      >
                        <CustomTypography fontSize={"20px"}>
                          Job Count
                        </CustomTypography>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "right",
                        }}
                      >
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <Button onClick={() => handleCount("min")}>
                            <RemoveCircleOutline />
                          </Button>
                          <TextField
                            sx={{ width: "70px" }}
                            inputProps={{
                              style: { textAlign: "center" },
                            }}
                            value={value?.count || ""}
                            type="number"
                            onChange={handleCount}
                          />
                          <Button onClick={() => handleCount("add")}>
                            <AddCircleOutlineRounded />
                          </Button>
                        </Box>
                      </Grid>
                    </>
                  ) : (
                    ""
                  )}
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      textAlign: "right",
                    }}
                  >
                    <CustomTypography fontSize={"20px"}>
                      Sub Total
                    </CustomTypography>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      textAlign: "right",
                    }}
                  >
                    <CustomTypography fontSize={"20px"}>
                      {subscriptionpackage === "Pro Plan" ||
                      subscriptionpackage === "Premium"
                        ? county
                          ? currencyConvert(
                              subscriptionPrice,
                              "Indian Rupee",
                              2
                            )
                          : lakn
                          ? `Rs.${subscriptionPrice}.00`
                          : currencyConvert(subscriptionPrice, "US Dollar", 2)
                        : currencyConvert(subscriptionPrice, "US Dollar", 2)}
                    </CustomTypography>
                  </Grid>

                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      textAlign: "right",
                    }}
                  >
                    {isValid && (
                      <CustomTypography fontSize={"20px"}>
                        Discount
                      </CustomTypography>
                    )}
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      textAlign: "right",
                    }}
                  >
                    {isValid && (
                      <CustomTypography fontSize={"20px"}>
                        {currencyConvert(
                          subscriptionPrice - newTotal,
                          "US Dollar",
                          2
                        )}
                      </CustomTypography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      textAlign: "right",
                    }}
                  >
                    <CustomTypography fontSize={"30px"}>Total</CustomTypography>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      textAlign: "right",
                    }}
                  >
                    <CustomTypography fontSize={"30px"}>
                      {subscriptionpackage === "Pro Plan" ||
                      subscriptionpackage === "Premium"
                        ? county
                          ? currencyConvert(
                              subscriptionPrice,
                              "Indian Rupee",
                              2
                            )
                          : lakn
                          ? `Rs.${subscriptionPrice}.00`
                          : currencyConvert(subscriptionPrice, "US Dollar", 2)
                        : currencyConvert(subscriptionPrice, "US Dollar", 2)}
                    </CustomTypography>
                  </Grid>
                  <Grid
                    className="paymentCard"
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      textAlign: "right",
                    }}
                  >
                    <StyledButton
                      variant="contained"
                      // endIcon={}
                      sx={{ width: "100%" }}
                      color="success"
                      onClick={() => navigateToPaymentGateway()}
                    >
                      Card <AddCardIcon />
                    </StyledButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Card>
      </Container>
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
    </div>
  );
}

export default SubscribePrice;
