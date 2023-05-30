import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import companyservice from "../services/company.service";
// import companyservice from "../services/company.service";
// import companyservice from "../services/companyservice";
// import { notifySuccess } from "../helpers/Toast";

const initialState = {
  companylogo: { logo: "" },
  basicinformation: { cmpemail: "", cmpname: "", cmpphone: "", cmpwebsite: "" },
  cmpinformation: {},
  links: { fb: "", twitter: "", utube: "", linkin: "" },
  locate: [],
  members: [{ memberId: "", role: "", id: new Date().getTime(), fname: "" }],
  photos: [],
  error: {},
  companyProf: {},
  companyDetl: {},
  privacy: false,
  jobssla: [],
  singleRes: "",
  notes: null,
  search: {
    candidates: [],
    currentPage: "",
    totalPages: "",
    totalCounts: "",
  },
  loading: false,
  srdata: {
    searchImmediate: "true",
    avaiSet: [],
    experSet: [],
    graduSet: [],
    industrySet: [],
    langSet: [],
    locationSet: [],
    nationSet: [],
    offerSet: [],
    preferSet: [],
    rightsSet: [],
    salarySet: [],
    skillSet: [],
    jobTitles: [],
    commSet:[]
  },
  billings: {},
  advanceSearch: false,
  searchBar: true,
  requestJobs:[],
  taskbyjob:{},
  cadidatesId:[],
  reqLoad:false,
  matchingData:{
    strongData:[],
    strongCount:[],
    goodData:[],
    goodCount:[],
    minData:[],
    minCount:[],
  },
  matchingAppl:{
    strongData:[],
    strongCount:[],
    goodData:[],
    goodCount:[],
    minData:[],
    minCount:[],
  },
  matchType:'strong',
  matchJobid:'',
  navbar:false,
  rejectCount:0,
  shortlistCount:0,
  totalCount:0
};

export const cmpLogo = createAsyncThunk("logo", async (data11) => {
  return data11;
});
export const singleresume = createAsyncThunk("ressing", async (data11) => {
  return data11;
});
export const singlenotes = createAsyncThunk("notesing", async (data11) => {
  return data11;
});

export const getCompanyDetails = createAsyncThunk("get/company", async () => {
  const res = await companyservice.getCompany();
  return res.data[0];
});
export const getJobssla = createAsyncThunk("get/jobsla", async () => {
  const res = await companyservice.getJobsla();
  return res.data;
});
export const basicInfor = createAsyncThunk(
  "basicinformation",
  async (data1) => {
    return data1;
  }
);
export const erroSet = createAsyncThunk("errorset", async (data1) => {
  return data1;
});

export const cmpInfor = createAsyncThunk("cmpinformation", async (data2) => {
  return data2;
});
export const Setprivacy = createAsyncThunk("privacy", async (data2) => {
  return data2;
});

export const linkInfor = createAsyncThunk("linkinformation", async (data3) => {
  return data3;
});

export const countryInfor = createAsyncThunk(
  "countryinformation",
  async (data4) => {
    return data4;
  }
);

export const memberInfor = createAsyncThunk(
  "memberinformation",
  async (data5) => {
    return data5;
  }
);

export const memberPosting = createAsyncThunk(
  "memberposting",
  async (data6) => {
    return data6;
  }
);

export const storeMembers = createAsyncThunk("storemember", async (data7) => {
  return data7;
});

export const storePhoto = createAsyncThunk("clear/photo", async (data) => {
  return data;
});
export const updateFinaldetails = createAsyncThunk(
  "comp/updateFinalDetail",
  async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("User"));
      const response = await companyservice.editExper(
        values,
        user.User.companyId
      );
      console.warn(response);
      return values;
    } catch (error) {
      return error;
    }
  }
);
export const updateFinalPhoto = createAsyncThunk(
  "comp/compphoto",
  async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("User"));
      const compLogo = await companyservice.compLogo(
        values,
        user.User.companyId
      );
      console.warn(compLogo);
      return values;
    } catch (error) {
      return error;
    }
  }
);
export const getSearchCandidate = createAsyncThunk(
  "get/getSearchCandidate",
  async ({ value, page }) => {
    const res = await companyservice.getSearchCandidates(value, page);
    return res.data;
  }
);
export const getSearchCandidateData = createAsyncThunk(
  "get/getSearchCandidatedata",
  async (value) => {
    return value;
  }
);
export const udpateSearchType = createAsyncThunk(
  "get/udpateSearchType",
  async (value) => {
    return value;
  }
);

export const getCompanyBillings = createAsyncThunk(
  "get/getCompanyBillings",
  async () => {
    const res = await companyservice.getBillings();
    return res.data;
  }
);

export const updateAdvanceSearch = createAsyncThunk(
  "set/setAdvanceSearchDetails",
  async (value) => {
    return value;
  }
);
export const updateSearch = createAsyncThunk(
  "set/setSearchDetails",
  async (value) => {
    return value;
  }
);

export const updateSearchData = createAsyncThunk(
  "set/updateSearchData",
  async (value) => {
    return value;
  }
);
export const addCandidatesRequest = (id) => async (dispatch) => {
  await dispatch(addCandidaterqst(id));
  return await dispatch(getCandidatesRequest());
};

export const addCandidaterqst = createAsyncThunk(
  "add/requstCandidates",
  async (id) => {
    const res = await companyservice.addRestCandidates(id);
    return res.data;
  }
);
export const getCandidatesRequest = createAsyncThunk(
  "get/requstCandidates",
  async (id) => {
    const res = await companyservice.getRestCandidates(id);
    return res.data;
  }
);
export const jobCandidatesRequest = createAsyncThunk(
  "job/requstCandidates",
  async (id) => {
    const res = await companyservice.jobRestCandidates(id);
    return res.data;
  }
);
export const getMaching = createAsyncThunk(
  "matchind/requstCandidates",
  async (value) => {
    const res = await companyservice.getMatchingCandidates(value);
    return res.data;
  }
);
export const getMachingAppl = createAsyncThunk(
  "matchind/aplCand",
  async (value) => {
    const res = await companyservice.getMatchingApplicants(value);
    return res.data;
  }
);
export const candidatesForrequest = createAsyncThunk(
  "canidates/requstCandidates",
  async (value) => {
    const res = await companyservice.candidatesFreqst(value);
    return res.data;
  }
);
export const addfreePlan = createAsyncThunk(
  "canidates/addfreeplan",
  async () => {
    const res = await companyservice.addFreeEmp();
    return res.data;
  }
);
export const getapplCount = createAsyncThunk(
  "canidates/getapplcounr",
  async () => {
    const user = JSON.parse(localStorage.getItem("User"));
    const res = await companyservice.getApplCounts(user?.User?.companyId);
    return res.data;
  }
);
export const candidatesIdreq = createAsyncThunk(
  "canidates/ids",
  async (value) => {
    return value;
  }
);
export const matchShow = createAsyncThunk(
  "matchsjoe/ids",
  async (value) => {
    return value;
  }
);
export const matchJid = createAsyncThunk(
  "jidmatch/ids",
  async (value) => {
    return value;
  }
);
const cmpSlice = createSlice({
  name: "company",
  initialState,
  extraReducers: {
    [cmpLogo.fulfilled]: (state, action) => {
      state.companylogo = action.payload;
    },
    [matchJid.fulfilled]: (state, action) => {
      state.matchJobid = action.payload;
    },
    [singleresume.fulfilled]: (state, action) => {
      state.singleRes = action.payload;
    },
    [singlenotes.fulfilled]: (state, action) => {
      state.notes = action.payload;
    },
    [basicInfor.fulfilled]: (state, action) => {
      state.basicinformation = action.payload;
    },
    [cmpInfor.fulfilled]: (state, action) => {
      state.cmpinformation = action.payload;
    },
    [linkInfor.fulfilled]: (state, action) => {
      state.links = action.payload;
    },
    [countryInfor.fulfilled]: (state, action) => {
      state.locate = action.payload;
    },
    [getJobssla.fulfilled]: (state, action) => {
      state.jobssla = action.payload;
    },
    [memberInfor.fulfilled]: (state, action) => {
      state.members = action.payload;
    },
    [addfreePlan.fulfilled]: (state, action) => {
      // notifySuccess('Your Free Plan Was Activated')
    },
    [memberPosting.fulfilled]: (state, action) => {
      state.members = action.payload;
    },
    [erroSet.fulfilled]: (state, action) => {
      state.error = action.payload;
    },
    [storeMembers.fulfilled]: (state, action) => {
      state.storeMember = action.payload;
    },
    [Setprivacy.fulfilled]: (state, action) => {
      state.privacy = action.payload;
    },
    [matchShow.fulfilled]: (state, action) => {
      state.matchType = action.payload;
    },
    [getSearchCandidateData.fulfilled]: (state, action) => {
      const data = state.srdata.searchImmediate;
      state.srdata = {
        ...action.payload,
        searchImmediate: data,
        ...state.srdata,
      };
    },
    [getSearchCandidate.pending]: (state, action) => {
      state.loading = true;
    },
    [candidatesForrequest.pending]: (state, action) => {
      state.loading = true;
    },
    [getSearchCandidate.fulfilled]: (state, action) => {
      state.loading = false;
      state.search.candidates = action.payload.candidates;
      state.search.totalPages = action.payload.totalPages;
      state.search.currentPage = action.payload.currentPage;
      state.search.totalCounts = action.payload.totalCounts;
    },
    [candidatesForrequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.search.candidates = action.payload.candidates;
      state.search.totalPages = action.payload.totalPages;
      state.search.currentPage = action.payload.currentPage;
      state.search.totalCounts = action.payload.totalCounts;
    },
    [getMaching.pending]: (state, action) => {
      state.loading = true;
    },
    [getMachingAppl.pending]: (state, action) => {
      state.loading = true;
      state.matchingAppl.strongData = [];
      state.matchingAppl.goodData = [];
      state.matchingAppl.minData = []
    },
    [getMaching.fulfilled]: (state, action) => {
      state.loading = false;
      state.navbar = true;
      state.matchingData.strongData = action.payload.candidates[0]?.strongMatches;
      state.matchingData.strongCount = action.payload.candidates[0]?.strongMatchesCount;
      state.matchingData.goodData = action.payload.candidates[0]?.goodMatches;
      state.matchingData.goodCount = action.payload.candidates[0]?.goodMatchesCount;
      state.matchingData.minData = action.payload.candidates[0]?.minimumMatches;
      state.matchingData.minCount = action.payload.candidates[0]?.minimumMatchesCount;
    },
    [getMachingAppl.fulfilled]: (state, action) => {
      state.loading = false;
      state.navbar = true;
      state.matchingAppl.strongData = action.payload.candidates[0]?.strongMatches;
      state.matchingAppl.strongCount = action.payload.candidates[0]?.strongMatchesCount;
      state.matchingAppl.goodData = action.payload.candidates[0]?.goodMatches;
      state.matchingAppl.goodCount = action.payload.candidates[0]?.goodMatchesCount;
      state.matchingAppl.minData = action.payload.candidates[0]?.minimumMatches;
      state.matchingAppl.minCount = action.payload.candidates[0]?.minimumMatchesCount;
    },
    [getCompanyDetails.fulfilled]: (state, action) => {
      state.companyDetl = action.payload;
      state.basicinformation = action.payload.basicInformation;
      state.cmpinformation = action.payload.companyInformation;
      state.links = action.payload.links;
      state.privacy = action.payload.privacy;
      if (action.payload.address.length > 0) {
        state.locate = action.payload.address;
      }
      state.members = action.payload.members;
      if (action.payload.companyLogo.logo === null) {
        state.companylogo = { logo: null };
      } else {
        state.companylogo = action.payload.companyLogo;
      }
      if (action.payload.companyLogo.logo === null) {
        state.companyProf = { logo: null };
      } else {
        state.companyProf = action.payload.companyLogo;
      }
    },
    [udpateSearchType.fulfilled]: (state, action) => {
      state.srdata.searchImmediate = action.payload;
    },
    [getCompanyBillings.fulfilled]: (state, action) => {
      state.billings = action.payload;
    },
    [updateAdvanceSearch.fulfilled]: (state, action) => {
      state.advanceSearch = action.payload;
    },
    [updateSearch.fulfilled]: (state, action) => {
      state.searchBar = action.payload;
    },
    [getCandidatesRequest.fulfilled]: (state, action) => {
      state.requestJobs = action.payload;
    },
    [jobCandidatesRequest.pending]: (state, action) => {
      state.reqLoad = true;
    },
    [jobCandidatesRequest.fulfilled]: (state, action) => {
      state.reqLoad = false;
      state.taskbyjob = action.payload;
    },
    [candidatesIdreq.fulfilled]: (state, action) => {
      state.cadidatesId = action.payload;
    },
    [updateSearchData.fulfilled]: (state, action) => {
      state.srdata = { ...state.srdata, ...action.payload };
    },
    [getapplCount.fulfilled]: (state, action) => {
      state.rejectCount =action.payload.rejectCount;
      state.shortlistCount = action.payload.shortlistCount;
      state.totalCount =action.payload.totalCount;
    },
  },
});

const { reducer } = cmpSlice;

export default reducer;
