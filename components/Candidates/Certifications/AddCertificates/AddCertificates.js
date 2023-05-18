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
import {
  DatePicker,
  LocalizationProvider,
  MobileDatePicker,
} from "@mui/x-date-pickers";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import {
  AddCertificateAndThenGet,
  AddEditCertificates,
  addEditCertificates,
  retrievePersonal,
} from "@/redux/slices/personal";
import moment from "moment";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { convertDate } from "@/utils/HelperFunctions";
import personalService from "@/redux/services/personal.service";
import resumeService from "@/redux/services/resume.service";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";

const AddCertificates = ({}) => {
  const certOne = useSelector((state) => state.personal.certone);
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

  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");

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
      id: certOne && certOne._id,
    });
    setValue(() => dayjs(certOne?.issueDate));
    setValue2(() => dayjs(certOne?.expireDate));
  }, [certOne]);

  const onChange = (e, n) => {
    let { name, value } = e.target;

    setInputCertificate({
      ...inputCertificate,
      [name]: value,
    });
  };

  const fileChange = (e) => {
    setInputCertificate({
      ...inputCertificate,
      certificate: e.target.files[0],
    });
  };

  const handleChangeForm = (newValue) => {
    let val = convertDate(newValue);
    setValue(() => newValue);
    setInputCertificate((state) => ({
      ...state,
      issueDate: val,
    }));
  };

  const handleChangeto = (newValue2) => {
    let val = convertDate(newValue2);
    setValue2(() => newValue2);
    setInputCertificate((state) => ({
      ...state,
      expireDate: val,
    }));
  };

  const saveCertificates = () => {
    if (certOne?._id) {
      editNewCertification();
    } else {
      addNewCertificate();
    }
  };

  const addNewCertificate = () => {
    resumeService
      .certificatesAdd(inputCertificate)
      .then(() => {
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "Certifications has been added",
          })
        );
        dispatch(updateCurrentScreen(""));
        dispatch(retrievePersonal());
      })
      .catch((error) => {
        dispatch(
          openAlert({
            type: ERROR,
            message: error.response.data.message || "Something went wrong",
          })
        );
      });
  };

  const editNewCertification = () => {
    resumeService
      .certificatesEdit(inputCertificate)
      .then(() => {
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "Certifications has been updated",
          })
        );
        dispatch(updateCurrentScreen(""));
        dispatch(retrievePersonal());
      })
      .catch((error) => {
        dispatch(
          openAlert({
            type: ERROR,
            message: error.response.data.message || "Something went wrong",
          })
        );
      });
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

          <CardContent sx={{ p: "50px", paddingBottom: "100px !important" }}>
            <CustomTypography
              className="personalDetailTitle"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "Inter-bold",
                fontSize: "33px",
              }}
            >
              Add Certificates
            </CustomTypography>
            <Stack spacing={2} sx={{ mt: "50px" }}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                value={inputCertificate?.title}
                name="title"
                onChange={onChange}
              />
              <TextField
                id="outlined-basic"
                label="Organization"
                variant="outlined"
                name="organization"
                value={inputCertificate.organization}
                onChange={onChange}
              />
              <Stack direction="row" spacing={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    label="From"
                    // inputFormat="MM/dd/YYYY"
                    name="fromDate"
                    value={value}
                    onChange={handleChangeForm}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: "100%" }} />
                    )}
                  />

                  <MobileDatePicker
                    label="To"
                    // inputFormat="MM/dd/YYYY"
                    name="toDate"
                    value={value2}
                    onChange={handleChangeto}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: "100%" }} />
                    )}
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
                  onChange={onChange}
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
                    onChange={fileChange}
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
