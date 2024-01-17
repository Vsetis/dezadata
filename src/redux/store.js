import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./reducer";

export default configureStore({
  reducer: {
    car: carReducer,
  },
});
