import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getProducts = createAsyncThunk('getProducts/productSlice', async () => {
    let res = await fetch("http://localhost:4000/products");
    let resJSON = await res.json();

    return resJSON;
});


const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        loading: true,
        productsList: [],
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.productsList = [ ...action.payload ];
            });
        builder
            .addCase(getProducts.rejected, (state) => {
                console.log("some thing went wrong 'try again'");
            });
    }
});

export const { getFilter } = productSlice.actions;
export default productSlice.reducer;