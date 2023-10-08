import { configureStore } from "@reduxjs/toolkit";
import universitySlice from "./universitySlice/universitySlice";

export const store = configureStore({
  reducer: {
    university: universitySlice,
  },
});
