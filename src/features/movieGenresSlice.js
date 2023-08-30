import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getMovieGenresApi } from '../Services/tmdbService';

export const fetchMovieGenres = createAsyncThunk('genres/fetchMovieGenres',
    async () => {
        const { genres } = await getMovieGenresApi();
        console.log(genres);
        return { genres }
    })

export const movieGenresSlice = createSlice({
    name: 'movieGenres',
    initialState: {
        status: "loading",
        genres: []
    },
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchMovieGenres.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchMovieGenres.fulfilled, (state, { payload }) => {
                return { ...state, ...payload, status: 'succeeded', }
            })
            .addCase(fetchMovieGenres.rejected, (state) => {
                state.status = 'failed'
            })
    }

})
const movieGenresReducer = movieGenresSlice.reducer
export default movieGenresReducer