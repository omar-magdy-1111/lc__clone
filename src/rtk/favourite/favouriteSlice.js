import { createSlice } from "@reduxjs/toolkit";

// localStorage.clear()
const favouriteSlice = createSlice({
    name: "favourites",
    initialState: {
        items: []
    },
    reducers: {
        
        LIKE(state, action) {
            if (localStorage.getItem('favourites')) {
                state.items = JSON.parse(localStorage.getItem('favourites'));
            }
            const itemInfavourites = state.items.find((item) => item._id === action.payload._id);

            if (itemInfavourites) {
                state.items = [ ...state.items ].filter((item) => { return item._id !== action.payload._id; });

                // localStorage.setItem()
            } else {
                state.items = [ ...state.items, action.payload ];
            }
            localStorage.setItem('favourites', JSON.stringify(state.items));

        },
        //        removeFavourite(state, action){},
    },
});
export const { LIKE } = favouriteSlice.actions;
export default favouriteSlice.reducer;