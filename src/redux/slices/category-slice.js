import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'



        //  Get all categories 

export const getCategory = createAsyncThunk("category/getCategory",async(type,{ rejectWithValue })=>{
    try {
       const res =await axios.get(`${process.env.REACT_APP_API_URL}/categories?populate=*`)
       const data = await res.data 
      //  console.log(data)
       return data
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


  const categorySlice = createSlice({
    name:"category",
    initialState:{categories:[],isLoading:false,error:null},
    reducers:{},
    extraReducers:(builder => {

        // pending 
      builder.addCase(getCategory.pending,(state,action)=>{
        // console.log(action)
        state.isLoading = true
        state.error = null
   
      })

      // fullfilled
      builder.addCase(getCategory.fulfilled,(state,action)=>{
        // console.log(action)
        state.isLoading = false
        state.categories = action.payload

        
      })

      // rejected

      builder.addCase(getCategory.rejected,(state,action)=>{
        // console.log(action)
         state.isLoading = false
         state.error =action.payload
      
      })
    

  })
  

    

    
})

export default categorySlice.reducer