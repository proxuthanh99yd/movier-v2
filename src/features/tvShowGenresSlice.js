import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTvShowGenresApi } from '../Services/tmdbService';

export const fetchTvShowGenres = createAsyncThunk('genres/fetchTvShowGenres',
    async () => {
        const { genres } = await getTvShowGenresApi();
        return { genres }
    })

export const tvShowGenresSlice = createSlice({
    name: 'tvShowGenres',
    initialState: {
        status: "loading",
        genres: []
    },
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTvShowGenres.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTvShowGenres.fulfilled, (state, { payload }) => {
                return { ...state, ...payload, status: 'succeeded', }
            })
            .addCase(fetchTvShowGenres.rejected, (state) => {
                state.status = 'failed'
            })
    }

})
const tvShowGenresReducer = tvShowGenresSlice.reducer
export default tvShowGenresReducer