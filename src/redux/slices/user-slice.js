import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

    //  Register New User 

export const userAuth = createAsyncThunk("Auth/userAuth",async(data,{ rejectWithValue })=>{
    try {
  
    // Handle success.
    const res =await axios.post(`${process.env.REACT_APP_API_URL}/auth/local/register`,data)
    const response = await res.data 
    console.log(response)
    return response
  
  
 }catch (error){
      console.log(error.message)
     // return custom error message from backend if present
     if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message)
    } else {
      return rejectWithValue(error.message)
    }
  }
})

               //  Login user 

export const userLogin = createAsyncThunk("Auth/userLogin",async(data,{ rejectWithValue })=>{
  try {

  // Handle success.
  const res =await axios.post(`${process.env.REACT_APP_API_URL}/auth/local`,data)
  const response = await res.data 
  console.log(response)
  return response


}catch (error){
  console.log(error.message)
  // return custom error message from backend if present
  if (error.response && error.response.data.message) {
   return rejectWithValue(error.response.data.message)
 } else {
   return rejectWithValue(error.message)
 }
}
})

export const userSlice = createSlice({
  name: "Auth",
  initialState:{user:{
    username:"",
    token:"",
    isUser:false
  },isLoading:false,error:null},
  reducers:{
      
    // Logout Action 
        
    logout:(state,action) =>{
      state.user.username= ""
      state.user.token= ""
      state.user.isUser= false
      state.error = null
      state.isLoading = false

    }
  },
  extraReducers:(builder => {

    // register New user 

    // pending 
  builder.addCase(userAuth.pending,(state,action)=>{
    console.log(action)
    state.isLoading = true
    state.error = null

  })

  // fullfilled
  builder.addCase(userAuth.fulfilled,(state,action)=>{
    console.log(action)
    state.isLoading = false
    state.user.isUser =true
    state.user.username =action.payload.user.username
    state.user.token =action.payload.jwt
    


    
  })

  // rejected

  builder.addCase(userAuth.rejected,(state,action)=>{
    console.log(action)
     state.isLoading = false
     state.error =action.payload
  
  })


      // Login user 

    // pending 
    builder.addCase(userLogin.pending,(state,action)=>{
      console.log(action)
      state.isLoading = true
      state.error = null
  
    })
  
    // fullfilled
    builder.addCase(userLogin.fulfilled,(state,action)=>{
      console.log(action)
      state.isLoading = false
      state.user.isUser =true
      state.user.username =action.payload.user.username
      state.user.token =action.payload.jwt
  
  
      
    })
  
    // rejected
  
    builder.addCase(userLogin.rejected,(state,action)=>{
      console.log(action)
       state.isLoading = false
       state.error =action.payload
    
    })

})

  
});

// Action creators are generated for each case reducer function
export const {logout } = userSlice.actions;

export default userSlice.reducer;