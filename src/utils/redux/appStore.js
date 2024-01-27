import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
import categorySlice from "./categorySlice";

const appStore = configureStore({
    reducer: {
        app: appSliceReducer,
        category: categorySlice
    }
});

export default appStore