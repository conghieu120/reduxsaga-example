import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    posts: [],
};

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        getPostStart: (state, action) => {
            state.loading = true;
        },
        getPostSuccess: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getPostStart, getPostSuccess } = postSlice.actions;

export default postSlice.reducer;
