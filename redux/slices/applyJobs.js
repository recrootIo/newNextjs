import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import applyjob from "../services/applyjobs.service";
// import { notifySuccess } from "../helpers/Toast";
const applyjobsService = new applyjob();
const initialState = {
  details: [],
  single: {},
  resume: {},
  cover: {},
  salary: {
    currency: "",
    expectCtc: "",
    currentCtc: "",
  },
  names: [],
  jobsUn: { jobs: [], country: [] },
  coun: [],
  sinDet: {},
  jids: { jobId: "", cnditateId: "" },
  selectedId: null,
  seeCand: { jobId: "", state: false },
  rejectedEmail: null,
  selectedEmail: null,
  applyPath: "",
  loading:false
};

export const applyJobsdet = createAsyncThunk(
  "get/candtDetails",
  async (details) => {
    const user = JSON.parse(localStorage.getItem("User"));
    const res = await applyjobsService.getDetails(
      user.User.companyId,
      details?.page,
      details?.data
    );
    return res.data;
  }
);

export const applyJobsdetFilter = createAsyncThunk(
  "get/filtercand",
  async (details) => {
    const res = await applyjobsService.getFilterDetails(
      details?.jobid,
      details?.page,
      details?.data
    );
    return res.data;
  }
);

export const statusUpdate = createAsyncThunk(
  "get/updateStatus",
  async (data) => {
    return data;
  }
);

export const seeAll = createAsyncThunk("get/seeAll", async (data) => {
  return data;
});

export const getSinDetails = createAsyncThunk(
  "getSin/Details",
  async (data) => {
    return data;
  }
);

export const getSinResume = createAsyncThunk("getSin/Resume", async (id) => {
  const res = await applyjobsService.getResume(id);
  return res.data.resume.resumeFileLocation[0];
});

export const getSinResumeLaid = createAsyncThunk(
  "getSin/ResumeLaid",
  async (data) => {
    return data;
  }
);

export const getSinCover = createAsyncThunk("getSin/cover", async (id) => {
  const res = await applyjobsService.getCover(id);
  return res?.data?.resume?.coverLetterFileLocation[0] || null;
});
export const getJobsfil = createAsyncThunk("getSin/jobs", async () => {
  const user = JSON.parse(localStorage.getItem("User"));
  const res = await applyjobsService.getJobs(user.User.companyId);
  return res.data;
});
export const getCandi = createAsyncThunk("geCand/jobs", async (id) => {
  const res = await applyjobsService.getAll(id);
  return res.data[0];
});
export const getCandiJobId = createAsyncThunk(
  "geCanditateJOvb/jobs",
  async (data) => {
    return data;
  }
);
export const addSalry = createAsyncThunk("addsalry/jobs", async (data) => {
  return data;
});

export const setJobsFil = createAsyncThunk("setFil/jobs", async (data) => {
  return data;
});
export const setCounFil = createAsyncThunk("setCoun/jobs", async (data) => {
  return data;
});

export const updateNote = createAsyncThunk("setNotes/jobs", async (data) => {
  return data;
});

export const updateStatus = createAsyncThunk("setStatus/jobs", async (data) => {
  return data;
});

export const updatCountes = createAsyncThunk("setCountes/jobs", async () => {
  const user = JSON.parse(localStorage.getItem("User"));
  const res = await applyjobsService.getDetails(user.User.companyId);
  return res.data;
});

export const clearState = createAsyncThunk("clearState/jobs", async () => {
  return null;
});

export const getEmailTemplapes = createAsyncThunk(
  "getTemplates/email",
  async (value) => {
    console.log(value);
    const res = await applyjobsService.getEmailTemplapes(value);
    return res.data;
  }
);

export const updateEmailTemplapes = createAsyncThunk(
  "setTemplates/email",
  async (data) => {
    const user = JSON.parse(localStorage.getItem("User"));
    const res = await applyjobsService.updateEmailTemplapes(
      user.User.companyId,
      data
    );
    return res.data;
  }
);

export const setApplyPath = createAsyncThunk(
  "setApplyPath/jobs",
  async (data) => {
    return data;
  }
);

export const removeApplyPath = createAsyncThunk(
  "removeApplyPath/jobs",
  async (data) => {
    return data;
  }
);

const applySlice = createSlice({
  name: "apply",
  initialState,
  extraReducers: {
    [applyJobsdet.pending]: (state) => {
      state.loading = true;
    },
    [applyJobsdet.fulfilled]: (state, action) => {
      state.loading = false;
      state.details = action.payload.posts;
      state.totalPage = action.payload.totalPages;
      state.currentPage = action.payload.currentPage;
      state.totalCount = action.payload.totalCount;
      state.count = action.payload.count;
      state.shortCount = action.payload.shortCount;
      state.rejectcount = action.payload.rejectcount;
      state.unview = action.payload.unview;
    },
    [applyJobsdetFilter.fulfilled]: (state, action) => {
      state.details = action.payload.posts;
      state.totalPage = action.payload.totalPages;
      state.currentPage = action.payload.currentPage;
      state.totalCount = action.payload.totalCount;
      state.count = action.payload.count;
      state.shortCount = action.payload.shortCount;
      state.rejectcount = action.payload.rejectcount;
      state.unview = action.payload.unview;
    },
    [statusUpdate.fulfilled]: (state, action) => {
      state.details = action.payload;
    },
    [getSinDetails.fulfilled]: (state, action) => {
      state.single = action.payload;
      state.selectedId = action?.payload?._id;
    },
    [seeAll.fulfilled]: (state, action) => {
      state.seeCand = action.payload;
    },
    [getSinResume.fulfilled]: (state, action) => {
      state.resume = action.payload;
    },
    [getSinResumeLaid.fulfilled]: (state, action) => {
      state.resume = action.payload;
    },
    [getJobsfil.fulfilled]: (state, action) => {
      state.names = action.payload;
    },
    [setJobsFil.fulfilled]: (state, action) => {
      state.jobsUn = action.payload;
    },
    [setCounFil.fulfilled]: (state, action) => {
      state.coun = action.payload;
    },
    [updateEmailTemplapes.fulfilled]: (state, action) => {
      // notifySuccess('Email Template Was Updated')
    },
    [getSinCover.fulfilled]: (state, action) => {
      state.cover = action.payload;
    },
    [addSalry.fulfilled]: (state, action) => {
      state.salary = action.payload;
    },
    [getSinCover.rejected]: (state, action) => {
      state.cover = { cover: null };
    },
    [getCandi.fulfilled]: (state, action) => {
      state.sinDet = action.payload;
    },
    [getCandiJobId.fulfilled]: (state, action) => {
      state.jids = action.payload;
    },
    [updateNote.fulfilled]: (state, action) => {
      const { notes, _id } = action.payload;
      const newDetail = state.details.findIndex((det) => det._id === _id);
      state.details[newDetail].notes = notes;
      state.selectedId = _id;
    },
    [updateStatus.fulfilled]: (state, action) => {
      const { status, _id } = action.payload;
      const newDetail = state.details.findIndex((det) => det._id === _id);
      state.details[newDetail].status = status;
      state.selectedId = _id;
    },
    [updatCountes.fulfilled]: (state, action) => {
      const { totalCount, count, shortCount, rejectcount, unview } =
        action.payload;
      state.totalCount = totalCount;
      state.count = count;
      state.shortCount = shortCount;
      state.rejectcount = rejectcount;
      state.unview = unview;
    },
    [clearState.fulfilled]: (state, action) => {
      state.seeCand = { jobId: "", state: false };
    },
    [getEmailTemplapes.fulfilled]: (state, action) => {
      if (action.payload?.data?.type === "rejected") {
        state.rejectedEmail = action.payload.data;
      } else if (action.payload?.data?.type === "shortlist") {
        state.selectedEmail = action.payload.data;
      }
    },

    [setApplyPath.fulfilled]: (state, action) => {
      state.applyPath = action.payload;
    },
    [removeApplyPath.fulfilled]: (state, action) => {
      state.applyPath = "";
    },
  },
});

const { reducer } = applySlice;
export default reducer;
