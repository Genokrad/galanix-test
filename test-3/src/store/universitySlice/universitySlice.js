import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  universityArr: [],
};

export const getUniversity = createAsyncThunk(
  "university/getUniversity",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      "http://universities.hipolabs.com/search?country=Ukraine"
    );
    dispatch(setUniversity(res.data));
  }
);

export const universitySlice = createSlice({
  name: "university",
  initialState,
  reducers: {
    setUniversity: (state, action) => {
      state.universityArr = action.payload;
    },
  },
  extraReducers: {
    [getUniversity.pending]: () => console.log("pending"),
    [getUniversity.fulfilled]: () => console.log("fulfilled"),
    [getUniversity.rejected]: () => console.log("rejected"),
  },
});

export const { setUniversity } = universitySlice.actions;

export default universitySlice.reducer;
