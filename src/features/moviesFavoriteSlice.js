import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getMoviesFavoriteApi } from '../Services/tmdbService';
import { addFavoriteApi, removeFavoriteApi } from '../Services/userService';
import { toast } from 'react-toastify';

export const fetchMoviesFavorite = createAsyncThunk('account/fetchMoviesFavorite',
    async (sort) => {
        const auth = JSON.parse(localStorage.getItem('auth'))
        if (!auth) {
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

export const fetchSortMoviesFavorite = createAsyncThunk('account/fetchSortMoviesFavorite',
    async (sort) => {
        const auth = JSON.parse(localStorage.getItem('auth'))
        if (!auth) {
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

export const fetchAddMovieFavorite = createAsyncThunk('account/fetchAddMovieFavorite',
    async (movieId) => {
        const auth = JSON.parse(localStorage.getItem("auth"))
        console.log(auth);
        const data = await addFavoriteApi(auth.accountId, movieId, auth.sessionId);
        return data
    })
export const fetchRemoveMovieFavorite = createAsyncThunk('account/fetchRemoveMovieFavorite',
    async (movieId) => {
        const auth = JSON.parse(localStorage.getItem("auth"))
        console.log(auth);
        const data = await removeFavoriteApi(auth.accountId, movieId, auth.sessionId);
        return data
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
    },
    extraReducers(builder) {
        builder
            .addCase(fetchMoviesFavorite.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchMoviesFavorite.fulfilled, (state, { payload }) => {
                return { ...state, ...payload, status: 'succeeded', }
            })
            .addCase(fetchMoviesFavorite.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(fetchAddMovieFavorite.pending, (state) => {
                state.favoriteStatus = 'loading'
            })
            .addCase(fetchAddMovieFavorite.fulfilled, (state) => {
                toast.success('Add to favorite Succeeded!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                state.isFavorite = true
                state.favoriteStatus = 'succeeded'
            })
            .addCase(fetchAddMovieFavorite.rejected, (state) => {
                state.favoriteStatus = 'failed'
            })
            .addCase(fetchRemoveMovieFavorite.pending, (state) => {
                toast.success('Remove from favorite Succeeded!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                state.favoriteStatus = 'loading'
            })
            .addCase(fetchRemoveMovieFavorite.fulfilled, (state) => {
                state.isFavorite = false
            })
            .addCase(fetchRemoveMovieFavorite.rejected, (state) => {
                state.favoriteStatus = 'failed'
            })
            .addCase(fetchSortMoviesFavorite.fulfilled, (state, { payload }) => {
                return { ...state, ...payload, status: 'succeeded', }
            })
    }

})

export const { checkIsFavorite, setSort, setPage } = moviesFavoriteSlice.actions;
const moviesFavoriteReducer = moviesFavoriteSlice.reducer
export default moviesFavoriteReducer