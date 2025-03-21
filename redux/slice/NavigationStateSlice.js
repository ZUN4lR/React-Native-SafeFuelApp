import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navname: 'firstPage',
};

const NavigationStateSlice = createSlice({
  name: 'navnameis',
  initialState,
  reducers: {
    setNavnameis: (state, action) => {
      state.navname = action.payload; // Save the new navname
    },
  },
});

export const { setNavnameis} = NavigationStateSlice.actions;
export default NavigationStateSlice.reducer;
