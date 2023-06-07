/* eslint-disable @next/next/no-img-element */
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import { getCurrencyCode } from "@/utils/currency";
import { Button } from "@mui/base";
import {
  Alert,
  Card,
  Divider,
  Grid,
  TextField,
  Typography,
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
  const  {push} = useRouter()
  const [promo, setPromo] = useState(null);
  const [isValid, setIsValid] = useState(false);
  // const [discount, setDiscount] = useState(0);
  const [alertType, setAlertType] = useState("info");

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
        `https://preprod.recroot.au/api/${User?.companyId}/applyPromoCode`,
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
      dispatch(openAlert({
        type:ERROR,
        message:'Job Count Needs To Be Greater Than Zero'
      }))
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
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "2rem",
            fontWeight: 600,
            m: "45px auto 0 auto",
          }}
        >
          Subscription
        </Typography>
      </Box>
      <Card
        sx={{
          background: "#F2F8FD",
          borderRadius: "15px",
          padding: "65px",
          margin: "0 180px 0 180px",
          position: "relative",
          top: "-80px",
        }}
      >
        <Card sx={{ padding: "20px" }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                p:'10px'
              }}
            >
              <Box
                sx={{
                  background: "#015FB1",
                  p: "15px",
                  borderRadius: "10px",
                  display: "flex",
                  gap:'60px'
                }}
              >
                <Box
                  variant="outlined"
                  className="goldbutton1"
                  sx={{ background: "#4fa9ff", borderRadius: "10px" ,display:'flex',p:'0 40px 0 40px'}}
                >
                  <Box sx={{ display: "flex",alignItems: 'center',justifyContent: 'space-around' ,gap:'5px'}}>
                    <img src="/thumbup.png" alt="vector" />
                    <Typography
                      sx={{
                        fontFamily: "'Inter'",
                        fontStyle: "normal",
                        fontWeight: 800,
                        fontSize: "40px",
                        lineHeight: "145%",
                        color: "#fff",
                      }}
                    >
                      {subscriptionpackage}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{textAlign:'center',display:'flex',flexDirection:'column',}}>
                  <Typography
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
                        ? currencyConvert(subscriptionPrice, "Indian Rupee", 2)
                        : currencyConvert(subscriptionPrice, "US Dollar", 2)
                      : currencyConvert(subscriptionPrice, "US Dollar", 2)}{" "}
                    {" "}
                  </Typography>
                  <Typography  sx={{
                      fontFamily: "'Inter'",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "30px",
                      lineHeight: "145%",
                      color: "#fff",
                    }}>
                    {subscriptionpackage === "Pro Plan" ||
                    subscriptionpackage === "Premium" 
                      ? "(monthly)"
                      : subscriptionTimePackage}
                  </Typography>
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
                          <Typography fontSize={"20px"}>{de}</Typography>
                        </Stack>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <StyledButton    onClick={() => navigateToPricing()}> Change Plan</StyledButton>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", padding: "10px" }}>
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
                    <Alert severity={getAlertType()}>{getAlertMessage()}</Alert>
                    <Divider sx={{ mt: "10px" }} />
                  </Stack>
                </Grid>
                {subscriptionpackage === "Pro Plan" ||
                subscriptionpackage === "Premium" ? (
                  <>
                    <Grid
                      item
                      md={6}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        textAlign: "right",
                      }}
                    >
                      <Typography fontSize={"20px"}>Job Count</Typography>
                    </Grid>
                    <Grid
                      item
                      md={6}
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
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    textAlign: "right",
                  }}
                >
                  <Typography fontSize={"20px"}>Sub Total</Typography>
                </Grid>
                <Grid
                  item
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    textAlign: "right",
                  }}
                >
                  <Typography fontSize={"20px"}>
                    {subscriptionpackage === "Pro Plan" ||
                    subscriptionpackage === "Premium"
                      ? county
                        ? currencyConvert(subscriptionPrice, "Indian Rupee", 2)
                        : currencyConvert(subscriptionPrice, "US Dollar", 2)
                      : currencyConvert(subscriptionPrice, "US Dollar", 2)}
                  </Typography>
                </Grid>

                <Grid
                  item
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    textAlign: "right",
                  }}
                >
                  {isValid && (
                    <Typography fontSize={"20px"}>Discount</Typography>
                  )}
                </Grid>
                <Grid
                  item
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    textAlign: "right",
                  }}
                >
                  {isValid && (
                    <Typography fontSize={"20px"}>
                      {currencyConvert(
                        subscriptionPrice - newTotal,
                        "US Dollar",
                        2
                      )}
                    </Typography>
                  )}
                </Grid>
                <Grid item md={12}>
                  <Divider />
                </Grid>
                <Grid
                  item
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    textAlign: "right",
                  }}
                >
                  <Typography fontSize={"30px"}>Total</Typography>
                </Grid>
                <Grid
                  item
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    textAlign: "right",
                  }}
                >
                  <Typography fontSize={"30px"}>
                    {subscriptionpackage === "Pro Plan" ||
                    subscriptionpackage === "Premium"
                      ? county
                        ? currencyConvert(subscriptionPrice, "Indian Rupee", 2)
                        : currencyConvert(subscriptionPrice, "US Dollar", 2)
                      : currencyConvert(subscriptionPrice, "US Dollar", 2)}
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={12}
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
    </div>
  );
}

export default SubscribePrice;
