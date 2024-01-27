import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        categoryId: null
    },
    reducers: {
        addCategoryId: (state, action) => {
            return { categoryId: action.payload}
        }
    }
})

export const {addCategoryId} = categorySlice.actions;
export default categorySlice.reducer;