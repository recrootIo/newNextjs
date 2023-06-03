"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Container,
  Stepper,
  Step,
  StepLabel,
  ListSubheader,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import Image from "next/image";
import {
  BILLION,
  CORE,
  DENOMINATIONS,
  LAKH,
  MILLION,
  THOUSAND,
} from "@/utils/constants";
import {
  COMMON_CURRENCIES,
  INDIAN_CURRENCY,
  OTHER_CURRENCIES,
} from "@/utils/currency";
import { NEUTRAL } from "@/theme/colors";
import { currencyConvert } from "@/utils/HelperFunctions";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
  "Select master blaster campaign settings",
  "Create an ad group",
];

const Salary = ({ ...props }) => {
  const { setCreateResume, saveAllData, scroll, position } = props;
  const [currency, setCurrency] = React.useState(INDIAN_CURRENCY.country);
  const [currentSalary, setCurrentSalary] = React.useState({
    denomination: THOUSAND,
    salary: "",
  });
  const [expectedSalary, setExpectedSalary] = React.useState({
    denomination: THOUSAND,
    salary: null,
  });

  const selectCurrency = (e) => {
    setCurrency(e.target.value);
  };

  const selectCurrentDenomination = (e) => {
    const value = e.target.value;
    setCurrentSalary((state) => ({ ...state, denomination: value }));
  };

  const selectCurrentSalary = (e) => {
    const value = e.target.value;
    setCurrentSalary((state) => ({ ...state, salary: value }));
  };

  const selectExpectedSalary = (e) => {
    const value = e.target.value;
    setExpectedSalary((state) => ({ ...state, salary: value }));
  };

  const selectExpectedDenomination = (e) => {
    const value = e.target.value;
    setExpectedSalary((state) => ({ ...state, denomination: value }));
  };

  const enableNext =
    currency && currentSalary.salary > 0 && expectedSalary.salary > 0;

  const actionNext = () => {
    setCreateResume((state) => ({
      ...state,
      salaryCurrency: currency,
      expectedSalary,
      currentSalary,
    }));
    // scroll(position + 1);
    saveAllData();
  };

  const getSalary = (salary) => {
    switch (salary.denomination) {
      case LAKH: {
        return currencyConvert(salary.salary * 100000, currency);
      }
      case MILLION: {
        return currencyConvert(salary.salary * 1000000, currency);
      }
      case CORE: {
        return currencyConvert(salary.salary * 10000000, currency);
      }
      case BILLION: {
        return currencyConvert(salary.salary * 1000000000, currency);
      }
      default:
        return currencyConvert(salary.salary * 1000, currency);
    }
  };

  return (
    <>
      <Container>
        <Box className="logoContainer">
          <Image
            className="logoImage"
            src="/logo 8.png"
            alt=""
            width="0"
            height="0"
            sizes="100vw"
          />
        </Box>
        <Stack
          sx={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            display: { md: "flex", padding: { md: "130px 0", xs: "20px 0" } },
          }}
        >
          <Button
            onClick={() => scroll(position - 1)}
            startIcon={<KeyboardBackspaceIcon />}
            sx={{ color: "black", textDecoration: "underline" }}
            variant="text"
          >
            Back
          </Button>
        </Stack>
        <Box className="stepperContainer">
          <Stepper sx={{ width: "50%" }} activeStep={4} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box>
          <CustomTypography
            className="resumeUploadTitle"
            variant="h5"
            gutterBottom
          >
            Fantastic Work!
          </CustomTypography>
          <CustomTypography className="resumeUploadText" gutterBottom>
            You are making great progress
          </CustomTypography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stack
            sx={{ width: { md: "70%", sm: "100%", xs: "100%" } }}
            spacing={3}
          >
            {/* Currency of your Salary */}
            <Select
              defaultValue=""
              id="grouped-select"
              label="Currency of your Salary"
              onChange={selectCurrency}
              sx={{ backgroundColor: NEUTRAL, width: "100%" }}
              value={currency}
            >
              <ListSubheader>Common</ListSubheader>
              {COMMON_CURRENCIES.map((o, id) => (
                <MenuItem value={o.country} key={id}>
                  {o.country} {o.symbol}
                </MenuItem>
              ))}
              <ListSubheader>Other</ListSubheader>
              {OTHER_CURRENCIES.map((o, id) => (
                <MenuItem value={o.country} key={id}>
                  {o.country} {o.symbol}
                </MenuItem>
              ))}
            </Select>

            <div style={{ display: "flex" }}>
              <TextField
                id="outlined-number"
                label="Current Annual Salary"
                type="number"
                onChange={selectCurrentSalary}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: "80%", mr: "5px" }}
              />
              <FormControl sx={{ width: "20%" }}>
                <InputLabel id="demo-simple-select-required-label">
                  Denomination
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={currentSalary.denomination}
                  label="Denomination *"
                  onChange={selectCurrentDenomination}
                >
                  {DENOMINATIONS.map((data, ind) => (
                    <MenuItem key={ind} value={data}>
                      {data}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            {currentSalary.salary && (
              <Stack direction={"row"} sx={{ justifyContent: "flex-start" }}>
                <CustomTypography>
                  Current Salary will be : {getSalary(currentSalary)}
                </CustomTypography>
              </Stack>
            )}

            <div style={{ display: "flex" }}>
              <TextField
                id="outlined-number"
                label="Expected Annual Salary"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={selectExpectedSalary}
                sx={{ width: "80%", mr: "5px" }}
              />
              <FormControl sx={{ width: "20%" }}>
                <InputLabel id="demo-simple-select-required-label">
                  Denomination
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={expectedSalary.denomination}
                  label="Denomination *"
                  onChange={selectExpectedDenomination}
                >
                  {DENOMINATIONS.map((data, ind) => (
                    <MenuItem key={ind} value={data}>
                      {data}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            {expectedSalary.salary && (
              <Stack direction={"row"} sx={{ justifyContent: "flex-start" }}>
                <CustomTypography>
                  Expected Salary will be : {getSalary(expectedSalary)}
                </CustomTypography>
              </Stack>
            )}

            <Box
              sx={{ display: "flex", justifyContent: "flex-end", mb: "120px" }}
            >
              <Button
                onClick={() => actionNext()}
                className={!enableNext ? "disabledButtons" : "nextBtn"}
                sx={{
                  height: "50px",
                  width: "30%",
                  textAlign: "center",
                  textTransform: "capitalize",
                  marginBottom: "50px",
                }}
                variant="contained"
                disabled={!enableNext}
              >
                Search For Jobs
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Salary;
