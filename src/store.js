import { configureStore } from '@reduxjs/toolkit';
import pageOneReducer from './slice/pageOneSlice'
import pageTwoReducer from './slice/pageTwoSlice'
import pageThreeReducer from './slice/pageThreeSlice'

export const store = configureStore({
  reducer: {
    pageOne: pageOneReducer,
    pageTwo: pageTwoReducer,
    pageThree: pageThreeReducer
  },
});