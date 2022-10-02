import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const getPageThreeDetails = createAsyncThunk(
    'getPageThreeMovies',
    async () => {
        const res = await axios.get('./CONTENTLISTINGPAGE-PAGE3.json')
        const data = res.data
        return data.page
    }
)

const initialState = {
    movieData: [],
    title: '',
    isLoading: true,
};

const pageThreeSlice = createSlice({
    name: 'pageThree',
    initialState,
    extraReducers: {
        [getPageThreeDetails.pending]: (state) => {
            state.isLoading = true;
        },
        [getPageThreeDetails.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.movieData = action.payload.contentitems.content;
            state.title = action.payload.title;
        },
    }
});


export default pageThreeSlice.reducer;