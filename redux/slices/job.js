import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jobsService from "../services/job.service";

const initialState = {
  details: { salary: {}, requiredSkill: []},
  essential: {
    careerlevel: "",
    experience: "",
    qualification: "",
    preferdCandidateLocation: [],
    typeWorks: "",
  },
  location: [],
  question: [
    { id: new Date().getTime(), questions: "", answer: "", preferedAns: "" },
  ],
  jobDescription: "",
  jobTitle: "",
  jobRole: "",
  featureType: false,
  latejob: [],
  roleType: [],
  applyIds: [],
  error: {},
  feature: false,
  immediate: false,
  queshow: "true",
  jobId: "",
  companyJobs:"",
  jLoad:false,
  jobDet:''
};

export const detailsSet = createAsyncThunk("get/jobDetails", async (data) => {
  return data;
});
export const jobssSet = createAsyncThunk("set/jobDetails", async (data) => {
  return data;
});
export const quesSet = createAsyncThunk("set/ques", async (data) => {
  return data;
});
export const quesSend = createAsyncThunk("send/ques", async (data) => {
  return data;
});
export const roleTypeSet = createAsyncThunk("tyerole/ques", async (data) => {
  return data;
});
export const descSet = createAsyncThunk("set/desc", async (data) => {
  return data;
});
export const featureSet = createAsyncThunk("set/feature", async (data) => {
  return data;
});
export const immediateSet = createAsyncThunk("set/immediate", async (data) => {
  return data;
});
export const titleSet = createAsyncThunk("set/title", async (data) => {
  return data;
});
export const roleSet = createAsyncThunk("set/rolees", async (data) => {
  return data;
});
export const salarySet = createAsyncThunk("get/salary", async (data) => {
  return data;
});
export const queShow = createAsyncThunk("que/show", async (data) => {
  return data;
});
export const skillSet = createAsyncThunk("get/Skill", async (data) => {
  return data;
});
export const essentialSet = createAsyncThunk("set/Essential", async (data) => {
  return data;
});
export const addressSet = createAsyncThunk("set/address", async (data) => {
  return data;
});
export const emptyJobs = createAsyncThunk("empty/jobs", async (data) => {
  return data;
});
export const errorJobs = createAsyncThunk("error/jobs", async (data) => {
  return data;
});
export const applCand = createAsyncThunk("appCand/jobs", async (data) => {
  return data;
});
export const setEditJob = createAsyncThunk("setEdit/jobs", async (data) => {
  return data;
});
export const featurejobs = createAsyncThunk(
  "setEdit/featurejobs",
  async (data) => {
    return data;
  }
);
export const immediatejobs = createAsyncThunk(
  "setEdit/immediatejobs",
  async (data) => {
    return data;
  }
);
export const jobId = createAsyncThunk("jobId/jobs", async (data) => {
  return data;
});


export const addJobs = createAsyncThunk("add/jobs", async (value) => {
  const user = JSON.parse(localStorage.getItem("User"));
  const res = await jobsService.addJobss(value, user.User.companyId);
  return res.data;
});
export const updateJobs = createAsyncThunk(
  "add/jobs",
  async ({ final, Cid }) => {
    const user = JSON.parse(localStorage.getItem("User"));
    const res = await jobsService.editJobss(final, Cid, user.User.companyId);
    return res.data;
  }
);
export const companyJobs = createAsyncThunk(
  "company/gjobs",
  async () => {
    const user = JSON.parse(localStorage.getItem("User"));
    const res = await jobsService.getJobss(user.User.companyId);
    return res.data;
  }
);
export const singleJobs = createAsyncThunk(
  "single/gjobs",
  async (id) => {
    const res = await jobsService.getSingleJob(id);
    return res.data;
  }
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: {
    [detailsSet.fulfilled]: (state, action) => {
      state.details = action.payload;
    },
    [jobId.fulfilled]: (state, action) => {
      state.jobId = action.payload;
    },
    [roleTypeSet.fulfilled]: (state, action) => {
      state.roleType = action.payload;
    },
    [featurejobs.fulfilled]: (state, action) => {
      state.feature = action.payload;
    },
    [immediatejobs.fulfilled]: (state, action) => {
      state.feature = action.payload;
    },
    [salarySet.fulfilled]: (state, action) => {
      state.details.salary = action.payload;
    },
    [skillSet.fulfilled]: (state, action) => {
      state.details.requiredSkill = [...action.payload];
    },
    [descSet.fulfilled]: (state, action) => {
      state.jobDescription = action.payload;
    },
    [essentialSet.fulfilled]: (state, action) => {
      state.essential = action.payload;
    },
    [queShow.fulfilled]: (state, action) => {
      state.queshow = action.payload;
    },
    [addressSet.fulfilled]: (state, action) => {
      state.location = action.payload;
    },
    [quesSet.fulfilled]: (state, action) => {
      state.question = action.payload;
    },
    [quesSend.fulfilled]: (state, action) => {
      state.question = action.payload;
    },
    [applCand.fulfilled]: (state, action) => {
      state.applyIds = action.payload;
    },
    [titleSet.fulfilled]: (state, action) => {
      state.jobTitle = action.payload;
    },
    [roleSet.fulfilled]: (state, action) => {
      state.jobRole = action.payload;
    },
    [jobssSet.fulfilled]: (state, action) => {
      state.latejob = action.payload;
    },
    [featureSet.fulfilled]: (state, action) => {
      state.featureType = action.payload;
    },
    [errorJobs.fulfilled]: (state, action) => {
      state.error = action.payload;
    },
    [immediateSet.fulfilled]: (state, action) => {
      state.immediate = action.payload;
    },
    [companyJobs.fulfilled]: (state, action) => {
      state.companyJobs = action.payload?.data;
    },
    [addJobs.pending]: (state, action) => {
      state.jLoad = true;
    },
    [addJobs.fulfilled]: (state, action) => {
      state.jLoad = false;
    },
    [updateJobs.pending]: (state, action) => {
      state.jLoad = true;
    },
    [updateJobs.fulfilled]: (state, action) => {
      state.jLoad = false;
    },

    [setEditJob.fulfilled]: (state, action) => {
      state.queshow = action.payload.queshow;
      state.details.requiredSkill = action.payload.requiredSkill;
      state.jobDescription = action.payload.jobDescription;
      state.jobTitle = action.payload.jobTitle;
      state.jobRole = action.payload.jobRole;
      state.details.salary =
        action.payload?.salary?.salaryType === undefined
          ? (state.details.salary = {
              salaryType: "noprovide",
            })
          : action.payload.salary;
      state.details.jobType = action.payload.jobType;
      state.details.notice = action.payload?.notice;
      state.details.jobApplyType = action.payload.jobApplyType;
      state.featureType = action.payload.featureType;
      state.immediate = action.payload.immediate;
      state.details.applicationDeadline = action.payload.applicationDeadline;
      state.essential =
        action.payload.essentialInformation === undefined
          ? {
              careerlevel: "",
              experience: "",
              qualification: "",
              preferdCandidateLocation: [],
              typeWorks: "",
            }
          : action.payload.essentialInformation;
      state.question =
        action.payload.queshow === "true"
          ? action.payload.question
          : [
              {
                id: new Date().getTime(),
                questions: "",
                answer: "",
                preferedAns: "",
              },
            ];
      state.location = action.payload.address;
      state._id = action.payload._id;
    },
  },
});

const { reducer } = jobsSlice;
export default reducer;
