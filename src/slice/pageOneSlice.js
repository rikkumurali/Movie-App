import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const getPageOneDetails = createAsyncThunk(
    'getPageOneMovies',
    async () => {
        const res = await axios.get('./CONTENTLISTINGPAGE-PAGE1.json')
        const data = res.data
        return data.page
    }
)

const initialState = {
    movieData: [],
    title: '',
    isLoading: true,
};

const pageOneSlice = createSlice({
    name: 'pageOne',
    initialState,
    extraReducers: {
        [getPageOneDetails.pending]: (state) => {
            state.isLoading = true;
        },
        [getPageOneDetails.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.movieData = action.payload.contentitems.content;
            state.title = action.payload.title;
        },
    }
});


export default pageOneSlice.reducer;