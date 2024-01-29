import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
import videoSlice from "./videoSlice";

const appStore = configureStore({
    reducer: {
        app: appSliceReducer,
        video: videoSlice
    }
});

export default appStore