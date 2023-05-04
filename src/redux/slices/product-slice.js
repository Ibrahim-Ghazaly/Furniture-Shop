import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getProducts = createAsyncThunk("product/getProducts",async(type,{ rejectWithValue })=>{
    try {
       const res =await axios.get(`${process.env.REACT_APP_API_URL}/products?populate=*`)
       const data = await res.data 
       console.log(data)
       return data
    }catch (err){
      console.log(err.message)
      return rejectWithValue(err.message)
    }
})

export const getFilterdProducts = createAsyncThunk("product/getFilterdProducts",async({catId},{ rejectWithValue })=>{
  // console.log(subCats)
  // console.log(maxPrice)
  // console.log(sort)
  console.log(catId)
  try {
     const res =await axios.get( `${ process.env.REACT_APP_API_URL}/products?populate=*&[filters][categories][id]=${catId}`)
     const data = await res.data 
     console.log(data)
     return data
  }catch (err){ 
    console.log(err.message)
    return rejectWithValue(err.message)
  }
})






const productSlice = createSlice({
    name:"product",
    initialState:{
      products:{items:[],isLoading:false,error:null},
      filterdProducts:{items:[],isLoading:false,error:null}
    },
    reducers:{},
    extraReducers:(builder => {

        // pending 
      builder.addCase(getProducts.pending,(state,action)=>{
        console.log(action)
        state.products.isLoading = true
        state.products.error = null
   
      })

      // fullfilled
      builder.addCase(getProducts.fulfilled,(state,action)=>{
        console.log(action)
        state.products.isLoading = false
        state.products.items = action.payload

        
      })

      // rejected

      builder.addCase(getProducts.rejected,(state,action)=>{
        console.log(action)
         state.products.isLoading = false
         state.products.error =action.payload
      
      })


           // pending 
           builder.addCase(getFilterdProducts.pending,(state,action)=>{
            console.log(action)
            state.filterdProducts.isLoading = true
            state.filterdProducts.error = null
       
          })
    
          // fullfilled
          builder.addCase(getFilterdProducts.fulfilled,(state,action)=>{
            console.log(action)
            state.filterdProducts.isLoading = false
            state.filterdProducts.items = action.payload
    
            
          })
    
          // rejected
    
          builder.addCase(getFilterdProducts.rejected,(state,action)=>{
            console.log(action)
             state.filterdProducts.isLoading = false
             state.filterdProducts.error =action.payload
          
          })
  })
  

    

    
})

export default productSlice.reducer