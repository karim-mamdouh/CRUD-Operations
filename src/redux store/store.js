import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/dataSlice";

//Redux store
export default configureStore({
  reducer: {
    //User data store
    userData: dataReducer,
  },
});
