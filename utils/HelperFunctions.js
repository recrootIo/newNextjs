import moment from "moment";
// import { BILLION, CORE, LAKH, MILLION, YYYY_MM_DD } from "../constants";
import { getCurrencyCode } from "./currency";
import { YYYY_MM_DD } from "./constants";

export const getToken = () => {
  return localStorage.getItem("token");
};
export const removeToken = () => {
  localStorage.removeItem("token");
};
export const setToken = (val) => {
  localStorage.setItem("token", val);
};

/**
 * Get Currency
 * @param {*} value
 * @param {*} currency
 * @returns
 */
export const currencyConvert = (
  value,
  currency = "US Dollar",
  fractions = 0
) => {
  const code = getCurrencyCode(currency);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: code?.code,
    minimumFractionDigits: fractions,
  });

  return formatter.format(value);
};

/**
 * Get date difference
 * @param {*} date
 * @returns boolean
 */
export const getDateDifference = (date) => {
  const today = moment.utc().format(YYYY_MM_DD);
  const passedDay = moment.utc(date).format(YYYY_MM_DD);
  return passedDay < today;
};

/**
 *
 * @param {*} func
 * @param {*} delay
 * @param {*} timetoLoad
 * @param {*} setTimeTLoad
 * @param  {...any} props
 */
export const debounce = (func, delay, timetoLoad, setTimeTLoad, ...props) => {
  clearTimeout(timetoLoad);
  setTimeTLoad(
    setTimeout(() => {
      func(...props);
    }, delay || 1000)
  );
};

/**
 * Get zeros for values
 * @param {*} value
 * @param {*} denominator
 * @returns
 */
export const getZerosCurrencies = (value, denominator) => {
  // switch (denominator) {
  //   case LAKH:
  //     return `${value}00000`;
  //   case MILLION:
  //     return `${value}000000`;
  //   case CORE:
  //     return `${value}0000000`;
  //   case BILLION:
  //     return `{value}000000000`;
  //   default:
  //     return `${value}000`;
  // }
};

/**
 *
 * @param {*} date
 * @returns
 */
export const convertDate = (date) => {
  const dateObj = new Date(date);
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  const year = String(dateObj.getFullYear());

  return `${month}/${day}/${year}`;
};

/**
 * Returns Users Id
 * @returns id
 */
export const getUserId = () => {
  const user = JSON.parse(localStorage?.getItem("User"));
  return user?.User?._id;
};

/**
 *
 * @param {*} strng
 * @returns
 */
export const reduceLength = (string) => {
  if (string?.length > 100) return `${string?.slice(0, 60)}...`;
  return string;
};

/**
 *
 * @param {*} address
 * @returns
 */
export const getAddress = (address) => {
  if (address.length > 1) {
    const newAddress = address[0].split(",");
    return reduceLength(newAddress[newAddress.length - 1]);
  } else {
    return reduceLength(address[0]);
  }
};

/**
 * Action to Capitalize
 * @param {*} string
 * @returns string first letter will be Capital
 */
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export { capitalizeFirstLetter };

export const convertFormat = (dateString) => {
  const dateObject = new Date(dateString);

  if (!dateString) return "";

  // Step 2: Extract year, month, and day from the Date object
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so add 1
  const day = String(dateObject.getDate()).padStart(2, "0");

  // Step 3: Format the values into the desired format
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

/**
 * returns url
 * @param {*} inputString
 * @returns
 */
export const replaceSlashes = (inputString) => {
  return inputString.replace(/\//g, "%20");
};
