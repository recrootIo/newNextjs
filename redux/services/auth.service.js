import axios from "axios";
import Cookies from "js-cookie";
const API_URL = "https://preprod.recroot.au/";

const register = (
  email,
  password,
  firstName,
  lastName,
  sector,
  organization,
  recrootUserType,
  companyId,
  immediate
) => {
  return axios.post(API_URL + "register", {
    email,
    password,
    firstName,
    lastName,
    sector,
    organization,
    recrootUserType,
    companyId,
    immediate,
  });
};

const reRegister = (
  email,
  password,
  firstName,
  lastName,
  recrootUserType,
  id
) => {
  return axios.post(API_URL + "reRegister", {
    email,
    password,
    firstName,
    lastName,
    recrootUserType,
    id,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("User", JSON.stringify(response.data));
        Cookies.set("userID",response.data?.User?._id,{expires:1})
        Cookies.set("verifyCode",response.data?.User?.referral_code,{expires:1})
        Cookies.set("token",response.data?.token,{expires:1})
        Cookies.set("userType",response.data?.User?.recrootUserType,{expires:1})
        Cookies.set("memberType",response.data?.User?.memberType,{expires:1})
      }
      return response;
    });
};

const logout = () => {
  const allcook = Cookies.get()
  Object.keys(allcook).map((cook)=>{
    Cookies.remove(cook)
  })
  localStorage.removeItem("User");
};

const authService = {
  register,
  reRegister,
  login,
  logout,
};
export default authService;
