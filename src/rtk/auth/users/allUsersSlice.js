import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const API = createAsyncThunk('allUsersSlice/API', async () => {
    let res = await fetch("http://localhost:4000/users");
    let resJSON = await res.json();
     return  resJSON;

});





const allUsersSlice = createSlice({
    name: 'allUsersSlice',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(API.fulfilled, (state, action) => {
            return [ ...action.payload ]
        });
    }
});

export default allUsersSlice.reducer;