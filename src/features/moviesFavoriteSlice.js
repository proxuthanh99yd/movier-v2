import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getMoviesFavoriteApi } from '../Services/tmdbService';

export const fetchMoviesFavorite = createAsyncThunk('account/fetchMoviesFavorite',
    async (sort) => {
        const auth = JSON.parse(localStorage.getItem('auth'))
        if (!auth.sessionId) {
            return
        }
        const {
            page,
            results,
            total_pages: totalPages,
            total_results: totalResults
        } = await getMoviesFavoriteApi(auth.accountId, auth.sessionId, sort);
        return { page, results, totalPages, totalResults }
    })

export const moviesFavoriteSlice = createSlice({
    name: 'moviesFavorite',
    initialState: {
        status: "loading",
        page: 0,
        results: [],
        totalPages: 0,
        totalResults: 0,
        favoriteStatus: "loading",
        isFavorite: false,
        sort: "created_at.desc",
        toastNotify: "",
        itemsLoading: "succeeded"
    },
    reducers: {
        checkIsFavorite: (state, { payload }) => {
            const isFavorite = state.results.filter((movie) => movie.id === payload);
            state.isFavorite = Boolean(isFavorite.length);

        },
        setSort: (state, { payload }) => {
            state.sort = payload

        },
        setPage: (state, { payload }) => {
            state.page = payload
        },
        addToFavorite: (state, { payload }) => {
            state.results.push(payload)
        },
        clearMoviesFavorite: (state) => {
            return {
                ...state,
                status: "loading",
                page: 0,
                results: [],
                totalPages: 0,
                totalResults: 0,
                favoriteStatus: "loading",
                isFavorite: false,
                sort: "created_at.desc",
                toastNotify: "",
                itemsLoading: "succeeded"
            }
        }

    },
    extraReducers(builder) {
        builder
            .addCase(fetchMoviesFavorite.fulfilled, (state, { payload }) => {
                return { ...state, ...payload, status: 'succeeded', }
            })
    }

})

export const { checkIsFavorite, setSort, setPage, clearMoviesFavorite, addToFavorite } = moviesFavoriteSlice.actions;
const moviesFavoriteReducer = moviesFavoriteSlice.reducer
export default moviesFavoriteReducer