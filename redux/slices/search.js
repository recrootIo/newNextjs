import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jobService from "../services/job.service";

import searchService from "../services/search.service";

export const searchJobs = createAsyncThunk(
  "jobs/search",
  async (
    {
      value,
      names,
      exper,
      title,
      address,
      jobVariant,
      selectedCompanies,
      selectedSector,
    },
    thunkAPI
  ) => {
    try {
      const response = await searchService.getLatestJObs(
        value,
        names,
        exper,
        title,
        address,
        jobVariant,
        selectedCompanies,
        selectedSector
      );
      return response.data;
    } catch (error) {
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue();
    }
  }
);
export const mainPaginationjobs = createAsyncThunk(
  "jobspage/search",
  async ({ value, names, exper }, thunkAPI) => {
    try {
      const response = await searchService.getLatestJObs(value, names, exper);
      return response.data;
    } catch (error) {
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getsingleJob = createAsyncThunk(
  "jobsingle/search",
  async ({ id, cat, no, names, exper }, thunkAPI) => {
    try {
      const response = await searchService.getSingleJObs(
        id,
        cat,
        no,
        names,
        exper
      );
      return response.data;
    } catch (error) {
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getsingleCat = createAsyncThunk(
  "catsingle/search",
  async ({ id, cat, no, names, exper }, thunkAPI) => {
    try {
      const response = await searchService.getSingleJObs(
        id,
        cat,
        no,
        names,
        exper
      );
      return response.data;
    } catch (error) {
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue();
    }
  }
);
export const keywordSearch = createAsyncThunk(
  "searchJobs/keywordSearch",
  async ({ keyword, location, type, value, names, exper }, thunkAPI) => {
    try {
      const response = await searchService.searchJobs(
        keyword,
        location,
        type,
        value,
        names,
        exper
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const CategoryJobs = createAsyncThunk(
  "CategoryJobs/keywordSearch",
  async (thunkAPI) => {
    try {
      return thunkAPI;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const searchKeys = createAsyncThunk(
  "Jobs/keys",
  async (value, thunkAPI) => {
    try {
      return value;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const setJob = createAsyncThunk(
  "Setjob/keywordSearch",
  async (value, thunkAPI) => {
    try {
      return value;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const searchJobsFromHome = createAsyncThunk(
  "jobshome/searchJobcard",
  async (thunkAPI) => {
    try {
      const response = await searchService.getLatestJObs();
      return response.data;
    } catch (error) {
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      // thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

/**
 * Thunk action to retriew Featured Jobs
 */
export const searchJobsFromFeatured = createAsyncThunk(
  "jobs/searchJobcard",
  async ({ no, names, exper }, thunkAPI) => {
    try {
      const response = await searchService.featuredJobs(no, names, exper);
      return response.data;
    } catch (error) {
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue();
    }
  }
);

/**
 * Thunk action to retriew Immediate Jobs
 */
export const searchJobsImmediate = createAsyncThunk(
  "jobsfeature/searchJobcard",
  async ({ no, names, exper }, thunkAPI) => {
    try {
      const response = await searchService.ImmediateJobs(no, names, exper);
      return response.data;
    } catch (error) {
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getSingleImmediateJob = createAsyncThunk(
  "jobsingle/search",
  async ({ id, title, no, names, exper }, thunkAPI) => {
    try {
      const response = await searchService.getSingleImmediateJobs(
        id,
        title,
        no,
        names,
        exper
      );
      return response.data;
    } catch (error) {
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getSingleJobRes = createAsyncThunk(
  "jobsingle/singlejobRes",
  async (id, thunkAPI) => {
    try {
      const response = await jobService.getSingleJob(id);
      return response.data;
    } catch (error) {
      console.log(
        error,
        "slicerror"
      )(error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = {
  searchDetails: [],
  jobslate: { keyword: "", location: "", type: "" },
  typeOf: "home",
  pending: false,
  loading: false,
};

const searchSlice = createSlice({
  name: "searchJobs",
  initialState,
  extraReducers: {
    [searchJobs.fulfilled]: (state, action) => {
      state.searchDetails = action.payload.posts;
      state.totalPage = action.payload.totalPages;
      state.typeOf = "home";
      state.loading = false;
    },
    [searchJobs.pending]: (state, action) => {
      state.loading = true;
    },
    [mainPaginationjobs.pending]: (state, action) => {
      state.pending = true;
    },
    [searchJobs.rejected]: (state) => {
      state.searchDetails = null;
      state.selectedJob = null;
    },
    [setJob.fulfilled]: (state, action) => {
      state.selectedJob = action.payload;
    },
    [getsingleJob.fulfilled]: (state, action) => {
      state.searchDetails = action.payload.posts;
      state.selectedJob = action.payload.posts[0];
      state.typeOf = "single";
      state.totalPage = Math.ceil(action.payload.metadata[0].total / 10);
      state.pending = false;
    },
    [mainPaginationjobs.fulfilled]: (state, action) => {
      state.searchDetails = action.payload.posts;
      state.selectedJob = action.payload.posts[0];
      state.totalPage = action.payload.totalPages;
      state.typeOf = "home";
      state.pending = false;
    },
    [getsingleCat.fulfilled]: (state, action) => {
      state.searchDetails = action.payload.posts;
      state.selectedJob = null;
      state.typeOf = "cat";
      state.pending = false;
      state.totalPage = Math.ceil(action.payload.metadata[0].total / 10);
    },
    [getsingleCat.pending]: (state, action) => {
      state.pending = true;
    },
    [getsingleJob.pending]: (state, action) => {
      state.pending = true;
    },
    [keywordSearch.fulfilled]: (state, action) => {
      state.searchDetails = action.payload.posts;
      state.selectedJob = action.payload.posts[0];
      state.totalPage = action.payload.totalPages;
      state.typeOf = "search";
      state.pending = false;
    },
    [keywordSearch.pending]: (state, action) => {
      state.pending = true;
    },
    [CategoryJobs.fulfilled]: (state, action) => {
      state.selectedJob = null;
      state.searchDetails = [];
    },
    [searchKeys.fulfilled]: (state, action) => {
      state.jobslate = action.payload;
    },
    [getSingleJobRes.pending]: (state, action) => {
      state.loading = true;
    },
    [getSingleJobRes.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [keywordSearch.rejected]: (state) => {
      state.searchDetails = null;
    },
    [searchJobsFromHome.fulfilled]: (state, action) => {
      action.payload.posts.sort(function (x, y) {
        // eslint-disable-next-line eqeqeq
        return x._id == action.meta.arg ? -1 : y._id == action.meta.arg ? 1 : 0;
      });
      state.searchDetails = action.payload.posts;
      state.selectedJob = state.searchDetails.find(
        (item) => item._id === action.meta.arg
      );
      state.typeOf = "home";
      state.pending = false;
    },
    [searchJobsFromHome.rejected]: (state, action) => {
      state.searchDetails = null;
      state.selectedJob = null;
    },
    [searchJobsFromHome.pending]: (state, action) => {
      state.pending = true;
    },
    [searchJobsFromFeatured.fulfilled]: (state, action) => {
      action.payload.data.sort(function (x, y) {
        // eslint-disable-next-line eqeqeq
        return x._id == action.meta.arg ? -1 : y._id == action.meta.arg ? 1 : 0;
      });
      state.searchDetails = action.payload.data;
      state.selectedJob =
        state.searchDetails.find((item) => item._id === action.meta.arg) ||
        action.payload.data[0];
      state.totalPage = action.payload.totalPages;
      state.typeOf = "feature";
      state.pending = false;
    },
    [searchJobsFromFeatured.pending]: (state, action) => {
      state.pending = true;
    },
    [searchJobsFromFeatured.rejected]: (state, action) => {
      state.searchDetails = null;
      state.selectedJob = null;
    },
    [searchJobsImmediate.pending]: (state, action) => {
      state.pending = true;
    },
    [searchJobsImmediate.fulfilled]: (state, action) => {
      action.payload.data.sort(function (x, y) {
        // eslint-disable-next-line eqeqeq
        return x._id == action.meta.arg ? -1 : y._id == action.meta.arg ? 1 : 0;
      });
      state.searchDetails = action.payload.data;
      state.selectedJob =
        state.searchDetails.find((item) => item._id === action.meta.arg) ||
        action.payload.data[0];
      state.totalPage = action.payload.totalPages;
      state.typeOf = "immediate";
      state.pending = false;
    },
    [searchJobsImmediate.rejected]: (state, action) => {
      state.searchDetails = null;
      state.selectedJob = null;
      state.pending = false;
    },
    [getSingleImmediateJob.fulfilled]: (state, action) => {
      state.searchDetails = action.payload.posts;
      state.selectedJob = action.payload.posts[0];
      state.typeOf = "immediate";
      state.totalPage = action.payload.totalPages;
      state.pending = false;
    },
    [getSingleImmediateJob.rejected]: (state, action) => {
      state.searchDetails = null;
      state.selectedJob = null;
      state.pending = false;
      state.typeOf = "immediate";
    },
    [getSingleImmediateJob.pending]: (state, action) => {
      state.pending = true;
    },
  },
  reducers: {
    selectTheJob: (state, action) => {
      state.selectedJob = state.searchDetails.find(
        (item) => item._id === action.payload
      );
    },
  },
});
const { reducer, actions } = searchSlice;
export const { selectTheJob, selectFromHome } = actions;
export default reducer;
