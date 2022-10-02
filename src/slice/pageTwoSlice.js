import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const getPageTwoDetails = createAsyncThunk(
    'getPageTwoMovies',
    async () => {
        const res = await axios.get('./CONTENTLISTINGPAGE-PAGE2.json')
        const data = res.data
        return data.page
    }
)

const initialState = {
    movieData: [],
    title: '',
    isLoading: true,
};

const pageTwoSlice = createSlice({
    name: 'pageTwo',
    initialState,
    extraReducers: {
        [getPageTwoDetails.pending]: (state) => {
            state.isLoading = true;
        },
        [getPageTwoDetails.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.movieData = action.payload.contentitems.content;
            state.title = action.payload.title;
        },
    }
});


export default pageTwoSlice.reducer;