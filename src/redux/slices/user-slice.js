import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  username: "",
  token: "",
  seller :"",
  userId:"",
  profileImg:""
};

export const userSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    register: (state, action) => {
     state.username = action.payload.username
     state.token = action.payload.token
     state.seller = action.payload.seller
     state.userId = action.payload.userId

    },
    logout:(state,action) =>{
      state.username = ""
      state.token = ""
      state.seller = ""
      state.userId = ""

    }
  },
});

// Action creators are generated for each case reducer function
export const {register,logout } = userSlice.actions;

export default userSlice.reducer;