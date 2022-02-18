import { configureStore } from "@reduxjs/toolkit";
import topicsSliceReducer from '../features/topics/topicsSlice';

export default configureStore({
  reducer: {
    topics: topicsSliceReducer
  },
});
