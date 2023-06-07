import { min } from "lodash";
import * as YUP from "yup";

export const FORM_VALIDATION = YUP.object().shape({
  firstName: YUP.string().required("First Name Required"),
  lastName: YUP.string().required("Last Name Required"),
  jobTitle: YUP.string().required("Job Title  Required"),
  mobile: YUP.string().min(5).required("Mobile  Required"),
  languages: YUP.array().min(1).required("Languages required"),
  salaryCurrency: YUP.string().required("Salary currency required"),
  currentSalary: YUP.number().required("Current Salary required"),
  currentSalaryDenomination: YUP.string().required("Salary currency required"),
  expectedSalary: YUP.number().required("Expected Salary required"),
  expectedSalaryDenomination: YUP.string().required(
    "Expected Salary denomination required"
  ),
  workPrefence: YUP.array().min(1).required("Languages required"),
  country: YUP.string().required("Country required"),
  state: YUP.string().required("State required"),
  city: YUP.string().required("City required"),
  totalWorkExperience: YUP.number().required("Years of Experience required"),
  about: YUP.string().required("About required"),
});
