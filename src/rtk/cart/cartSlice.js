import { createSlice } from "@reduxjs/toolkit";
// localStorage.removeItem('category')
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem(state, action) {
            if (localStorage.getItem('cart')) {
                state.items = JSON.parse(localStorage.getItem('cart'));
            }
            const itemInCart = state.items.find((item) => item._id === action.payload._id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
            console.log(state.items);
            
        },
        updateCount: (state, action) => {
            if (localStorage.getItem('cart')) {
                state.items = JSON.parse(localStorage.getItem('cart'));
            }
            const item = state.items.find((item) => item._id === action.payload.id);
            if (item) {
                item.quantity = action.payload.newCount
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        removeItemById(state, action) {
            if (localStorage.getItem('cart')) {
                state.items = JSON.parse(localStorage.getItem('cart'));
            }
            let newArray = [ ...state.items ].filter((item) => { return item._id !== action.payload._id; })
            // eslint-disable-next-line array-callback-return
            
            state.items = newArray;
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        //        updateQuantity(state, action){},
        //        setItems(state, action ){ state.items=action.payload}

    },
});


export const { addItem, removeItemById, updateCount } = cartSlice.actions;
export default cartSlice.reducer;