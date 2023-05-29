"use client";
import { configureStore } from "@reduxjs/toolkit";
import alert from "../slices/alert";
import authReducer from "../slices/auth";
import candidateReducer from "../slices/candidate";
// import messageReducer from "./slices/message";
// import jobReducer from "./slices/job";
// import applyReducer from "./slices/applyJobs";
import personalReducer from "../slices/personal";
import searchReducer from "../slices/search";
// import resumeReducer from "./slices/UploadingResume";
// import cmpReducer from "./slices/companyslice";
// import intReducer from "./slices/interviewslice";
// import SubscriptionSlice from "./slices/Subscription";
// import AlertSlice from "./slices/AlertSlice";
// import retrenchedReducer from "./slices/Retrenched";

const reducer = {
  auth: authReducer,
  //   message: messageReducer,
  //   apply: applyReducer,
  //   jobs: jobReducer,
  personal: personalReducer,
  candidate: candidateReducer,
  searchJobs: searchReducer,
  //   resume: resumeReducer,
  //   company: cmpReducer,
  //   sinterview: intReducer,
  //   subscription: SubscriptionSlice,
  alertMessage: alert,
  //   retrenched: retrenchedReducer,
};

export const Rstore = configureStore({
  reducer: reducer,
  devTools: true,
});
// export default store;
