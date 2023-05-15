"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  TextField,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { AddCertificateAndThenGet } from "@/redux/slices/personal";
import moment from "moment";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const AddCertificates = ({}) => {
  const certOne = useSelector((state) => state.personal.certone);

  console.log(moment(certOne?.expireDate).format("YYYY/MM/DD"));

  const dispatch = useDispatch();

  const gotToCertificates = () => {
    dispatch(updateCurrentScreen(""));
  };

  const [inputCertificate, setInputCertificate] = React.useState({
    title: "",
    organization: "",
    certificate: "",
    certificateLink: "",
    issueDate: "",
    expireDate: "",
  });

  React.useEffect(() => {
    setInputCertificate({
      title: certOne && certOne.title,
      organization: certOne && certOne.organization,
      certificate: null,
      certificateName: certOne && certOne.certificateName,
      certificatepath: certOne && certOne.certificatepath,
      certificateLink: certOne && certOne.certificateLink,
      expireDate: certOne?.expireDate,
      issueDate: certOne?.issueDate,
      // expireDate: certOne && ,
      id: certOne && certOne._id,
    });
  }, [certOne]);

  const handleChange = (e, time) => {
    if (time === "issueDate") {
      setInputCertificate({
        ...inputCertificate,
        issueDate: e,
      });
      return null;
    }

    if (time === "expireDate") {
      setInputCertificate({
        ...inputCertificate,
        expireDate: e,
      });
      return null;
    }

    console.log(e, time);

    if (e.target.files !== null) {
      setInputCertificate({
        ...inputCertificate,
        certificate: e.target.files[0],
      });
    } else {
      let { name, value } = e.target;
      setInputCertificate({ ...inputCertificate, [name]: value });
    }
  };

  const saveCertificates = () => {
    if (certOne) {
      dispatch(AddCertificateAndThenGet(inputCertificate));
    } else {
      dispatch(addEditCertificates(inputCertificate));
    }
  };

  return (
    <div>
      <Container>
        <Card variant="outlined">
          <Box sx={{ bgcolor: "#2699FF" }}>
            <Button
              variant="text"
              startIcon={<ArrowBackIcon />}
              sx={{
                color: "white",
                textTransform: "capitalize",
                fontSize: "18px",
              }}
              onClick={() => gotToCertificates()}
            >
              Back
            </Button>
          </Box>

          <CardContent sx={{ p: "70px", paddingBottom: "100px !important" }}>
            <CustomTypography
              className="personalDetailTitle"
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: 600,
                fontFamily: "Inter-bold",
                mt: "60px",
              }}
              gutterBottom
            >
              Add Certificates
            </CustomTypography>
            <Stack spacing={2} sx={{ mt: "100px" }}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                value={inputCertificate?.title}
                name="title"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Project Name"
                variant="outlined"
                name="organization"
                value={inputCertificate.organization}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <Stack direction="row" spacing={2}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="From"
                    value={inputCertificate?.issueDate}
                    inputFormat="MM/dd/yyyy"
                    name="issueDate"
                    onChange={(e) => {
                      handleChange(e, "issueDate");
                    }}
                    sx={{ width: "50%" }}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="From"
                    name="expireDate"
                    inputFormat="MM/dd/yyyy"
                    value={dayjs(inputCertificate?.expireDate)}
                    onChange={(e) => {
                      handleChange(e, "expireDate");
                    }}
                    sx={{ width: "50%" }}
                  />
                </LocalizationProvider>
              </Stack>
              <Stack direction="row" spacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Certificate link"
                  variant="outlined"
                  sx={{ width: "95%" }}
                  value={inputCertificate?.certificateLink}
                  name="certificateLink"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <Button
                  variant="outlined"
                  component="label"
                  sx={{
                    bgcolor: "transparent",
                    borderColor: "#a3c2c2",
                    width: "5%",
                  }}
                >
                  <img src="/upload.png" alt="" style={{ width: "20px" }} />
                  <input
                    type="file"
                    accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf,.jpg,.jpeg,.png"
                    hidden
                    name="certificate"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </Button>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#015FB1 !important",
                    width: "50%",
                    borderRadius: "8px",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#015FB1 !important", width: "50%" }}
                  onClick={() => saveCertificates()}
                >
                  Add
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default React.memo(AddCertificates);
