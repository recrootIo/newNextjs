export default function validator(values) {
  let errors = {};

  Object.entries(values).map((item) => {
    switch (item[0]) {
      case "jobTitle":
        validateJobTitle(item[1], errors);
        break;
      case "jobRole":
        validateRole(item[1], errors);
        break;
      case "applicationDeadline":
        validateDead(item[1], errors);
        break;
      case "jobType":
        validateTypee(item[1], errors);
        break;
      case "notice":
        validateNotice(item[1], errors);
        break;
      case "qualification":
        validateQual(item[1], errors);
        break;
      case "experience":
        validateExperi(item[1], errors);
        break;
      case "careerlevel":
        validateCarlevel(item[1], errors);
        break;
      case "address":
        validateAddress(item[1], errors);
        break;
      case "salary":
        validateSalry(item[1], errors);
        break;
      case "salaryType":
        validateSalryTypee(item[1], errors);
        break;
      case "salaryCrrancy":
        validateScurrn(item[1], errors);
        break;
      case "maxSalary":
        validateMax(item[1], errors);
        break;
      case "minSalary":
        validateMin(item[1], errors);
        break;
      default:
    }
    return errors;
  });
  return errors;
}

// ******************************

// ******************************
function validateJobTitle(jobTitle, errors) {
  let result = true;
  let element = null;
  if (!jobTitle || jobTitle === undefined || jobTitle === "") {
    errors.jobTitle = "Job Category is Required";
    element = document.getElementById("add_jobtitle");
    element.scrollIntoView({
      behavior: "smooth",
    });
    result = false;
  }
  return result;
}
function validateRole(jobRole, errors) {
  let result = true;

  if (!jobRole) {
    errors.jobRole = "Job Title is Required";
    result = false;
  }
  return result;
}
function validateDead(applicationDeadline, errors) {
  let result = true;
  let element = null;

  if (!applicationDeadline) {
    errors.applicationDeadline = "Deadline is Required";
    element = document.getElementById("add_deadline");
    element.scrollIntoView({
      behavior: "smooth",
    });
    result = false;
  }
  return result;
}

function validateTypee(jobType, errors) {
  let result = true;
  let element = null;

  if (!jobType || jobType === undefined) {
    errors.jobType = "Job Type is Required";
    element = document.getElementById("add_jobType");
    element.scrollIntoView({
      behavior: "smooth",
    });
    result = false;
  }
  return result;
}
function validateNotice(notice, errors) {
  let result = true;
  let element = null;

  if (!notice || notice === undefined) {
    errors.notice = "Notice Period is Required";
    element = document.getElementById("add_noticeperiod");
    element.scrollIntoView({
      behavior: "smooth",
    });
    result = false;
  }
  return result;
}
function validateMax(maxSalary, errors) {
  let result = true;
  let element = null;

  if (!maxSalary) {
    errors.maxSalary = "Maximum Salary is Required";
    element = document.getElementById("add_maxSalary");
    element.scrollIntoView({
      behavior: "smooth",
    });
    result = false;
  }
  return result;
}
function validateMin(minSalary, errors) {
  let result = true;
  let element = null;

  if (!minSalary) {
    errors.minSalary = "Minimum Salary is Required";
    element = document.getElementById("add_minSalary");
    element.scrollIntoView({
      behavior: "smooth",
    });
    result = false;
  }
  return result;
}
function validateScurrn(salaryCrrancy, errors) {
  let result = true;
  let element = null;

  if (!salaryCrrancy) {
    errors.salaryCrrancy = "Salary Currency is Required";
    element = document.getElementById("add_salaryCurrency");
    element.scrollIntoView({
      behavior: "smooth",
    });
    result = false;
  }
  return result;
}
function validateSalry(salaryType, errors) {
  let result = true;

  if (!salaryType.salaryType) {
    errors.salaryType = "Salary Type is Required";
    result = false;
  }
  return result;
}
function validateSalryTypee(salaryType, errors) {
  let result = true;
  let element = null;

  if (!salaryType) {
    errors.salaryType = "Salary Type is Required";
    element = document.getElementById("add_salaryType");
    element.scrollIntoView({
      behavior: "smooth",
    });
    result = false;
  }
  return result;
}
function validateExperi(experience, errors) {
  let result = true;
  let element = null;

  if (!experience) {
    errors.experience = "Experience is Required";
    element = document.getElementById("add_experience");
    element.scrollIntoView({
      behavior: "smooth",
    });
    result = false;
  }
  return result;
}
function validateQual(qualification, errors) {
  let result = true;
  let element = null;

  if (!qualification) {
    errors.qualification = "Qualification is Required";
    element = document.getElementById("add_qualification");
    element.scrollIntoView({
      behavior: "smooth",
    });
    result = false;
  }
  return result;
}
function validateCarlevel(careerlevel, errors) {
  let result = true;
  let element = null;

  if (!careerlevel) {
    errors.careerlevel = "Career Level is Required";
    element = document.getElementById("add_careerlevel");
    element.scrollIntoView({
      behavior: "smooth",
    });
    result = false;
  }
  return result;
}

function validateAddress(address, errors) {
  let result = true;

  if (!address) {
    errors.address = "Address is Required";
    result = false;
  }
  return result;
}
