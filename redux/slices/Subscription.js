import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: 10,
  package: "Silver",
  timePeriod: "mothly",
  companyId: null,
  country:'',
  finPrice:0,
  count:1
};
const SubscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    changeSubscription: (state, action) => {
      const user = JSON.parse(localStorage.getItem("User"));
      state.price = action.payload.price;
      state.finPrice=action.payload.price;
      state.package = action.payload.title;
      state.country = action.payload.country;
      state.companyId = user?.User.companyId;
      if (action.payload.package === "single") {
        state.timePeriod = "single";
      }
      if (action.payload.package === "mo") {
        state.timePeriod = "mothly";
      } else if (action.payload.package === "") {
        state.timePeriod = "yearly";
      }
    },
    changeValue: (state, action) => {
      if (action.payload > 5) {
        state.price = (state.finPrice*5) + (state.finPrice - state.finPrice*0.1)*(action.payload - 5);
      }else{
        state.price = state.finPrice*action.payload;
      }
      state.count = parseInt(action.payload);
    },
    clearMessage: () => {
      console.warn("erwrwer");
    },
    updatePromotion: (state, action) => {
      state.price = action.payload.price;
    },
  },
});
const { reducer, actions } = SubscriptionSlice;
export const { changeSubscription, clearMessage, updatePromotion , changeValue} = actions;
export default reducer;
