import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

             //  Get featured products 

export const featuredProducts = createAsyncThunk("product/featuredProducts",async(type,{ rejectWithValue })=>{
    try {
       const res =await axios.get(`${process.env.REACT_APP_API_URL}/products?populate=*&[filters][type][$eq]=${type}`)
       const data = await res.data 
      //  console.log(data)
       return data
    }catch (err){
      // console.log(err.message)
      return rejectWithValue(err.message)
    }
})
             //  Get trending products 

  export const trendingProducts = createAsyncThunk("product/trendingProducts",async(type,{ rejectWithValue })=>{
        try {
            const res =await axios.get(`${process.env.REACT_APP_API_URL}/products?populate=*&[filters][type][$eq]=${type}`)
            const data = await res.data 
          //  console.log(data)
            return data
        }catch (err){
          // console.log(err.message)
          return rejectWithValue(err.message)
        }
    })

             //  Get  products by category ID
                             

export const getFilterdProducts = createAsyncThunk("product/getFilterdProducts",async({catId},{ rejectWithValue })=>{
  
  console.log(catId)
  try {
     const res =await axios.get( `${ process.env.REACT_APP_API_URL}/products?populate=*&[filters][categories][id]=${catId}`)
     const data = await res.data 
    //  console.log(data)
     return data
  }catch (err){ 
    // console.log(err.message)
    return rejectWithValue(err.message)
  }
})






const productSlice = createSlice({
    name:"product",
    initialState:{
      featuredProducts:{items:[],isLoading:false,error:null},
      trendingProducts:{items:[],isLoading:false,error:null},
      filterdProducts:{items:[],isLoading:false,error:null}
    },
    reducers:{},
    extraReducers:(builder => {

          // Get featured products 

        // pending 
      builder.addCase(featuredProducts.pending,(state,action)=>{
        // console.log(action)
        state.featuredProducts.isLoading = true
        state.featuredProducts.error = null
   
      })

      // fullfilled
      builder.addCase(featuredProducts.fulfilled,(state,action)=>{
        // console.log(action)
        state.featuredProducts.isLoading = false
        state.featuredProducts.items = action.payload

        
      })

      // rejected

      builder.addCase(featuredProducts.rejected,(state,action)=>{
        // console.log(action)
         state.featuredProducts.isLoading = false
         state.featuredProducts.error =action.payload
      
      })


      
          // Get trending products 

        // pending 
        builder.addCase(trendingProducts.pending,(state,action)=>{
          // console.log(action)
          state.trendingProducts.isLoading = true
          state.trendingProducts.error = null
     
        })
  
        // fullfilled
        builder.addCase(trendingProducts.fulfilled,(state,action)=>{
          // console.log(action)
          state.trendingProducts.isLoading = false
          state.trendingProducts.items = action.payload
  
          
        })
  
        // rejected
  
        builder.addCase(trendingProducts.rejected,(state,action)=>{
          // console.log(action)
           state.trendingProducts.isLoading = false
           state.trendingProducts.error =action.payload
        
        })


      //  Get Products By category Id 

           // pending 
           builder.addCase(getFilterdProducts.pending,(state,action)=>{
            // console.log(action)
            state.filterdProducts.isLoading = true
            state.filterdProducts.error = null
       
          })
    
          // fullfilled
          builder.addCase(getFilterdProducts.fulfilled,(state,action)=>{
            // console.log(action)
            state.filterdProducts.isLoading = false
            state.filterdProducts.items = action.payload
    
            
          })
    
          // rejected
    
          builder.addCase(getFilterdProducts.rejected,(state,action)=>{
            // console.log(action)
             state.filterdProducts.isLoading = false
             state.filterdProducts.error =action.payload
          
          })
  })
  

    

    
})

export default productSlice.reducer