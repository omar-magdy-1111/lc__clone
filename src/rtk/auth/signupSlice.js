import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const createUser = createAsyncThunk('signupSlice/API', async (email, password, phone) => {


});





const signupSlice = createSlice({
    name: 'createUseSlice',
    initialState: {},
    reducers: {
        signUP: (state, action) => {
            console.log(state);
            axios.post('http://localhost:4000/createUser', {
                email: action.payload.email,
                password: action.payload.password,
                phone: action.payload.phone
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        }
    }
});
export const { signUP } = signupSlice.actions;
export default signupSlice.reducer;