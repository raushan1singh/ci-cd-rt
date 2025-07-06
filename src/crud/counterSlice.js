import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () =>{
    const res = await fetch(`https://dummyjson.com/quotes`);
    const data = await res.json();
    return data;
  }
)

const initialState = {
  items: [],
  status: 'idle',
  error: null
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    /*increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },*/
  },
  extraReducers: (builder) =>{
    builder
    .addCase(fetchPosts.pending, (state) =>{
      state.status = 'loading';
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer