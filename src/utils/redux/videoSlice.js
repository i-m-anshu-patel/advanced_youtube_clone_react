import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        video: []
    },
    reducers:{
        addVideo : (state, action) => {
            return { video : action.payload}
        }
    }
})

export const { addVideo } = videoSlice.actions;
export default videoSlice.reducer;