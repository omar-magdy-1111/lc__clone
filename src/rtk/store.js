import { configureStore } from '@reduxjs/toolkit';
import allUsersSlice from './auth/users/allUsersSlice';
import signupSlice from './auth/signupSlice';
import productsSlice from './getproducts/productsSlice';
import cartSlice from './cart/cartSlice';
import favouriteSlice from './favourite/favouriteSlice';

export const store = configureStore({
    reducer: {
        signUP: signupSlice,
        allUsers: allUsersSlice,
        getproducts: productsSlice,
        cart: cartSlice,
        favourite :favouriteSlice,
    },
});