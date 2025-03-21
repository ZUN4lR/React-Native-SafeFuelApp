import { configureStore } from '@reduxjs/toolkit';
 import navReducer from '../slice/NavigationStateSlice'
 
export const store = configureStore({
    reducer: {
        navnameis: navReducer,
     },
});
