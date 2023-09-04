import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTvShowsFavoriteApi } from '../Services/tmdbService';

export const fetchTvShowsFavorite = createAsyncThunk('account/fetchTvShowsFavorite',
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
        } = await getTvShowsFavoriteApi(auth.accountId, auth.sessionId, sort);
        return { page, results, totalPages, totalResults }
    })

export const tvShowsFavoriteSlice = createSlice({
    name: 'tvShowsFavorite',
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
            const isFavorite = state.results.filter((TvShow) => TvShow.id === payload);
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
        clearTvShowsFavorite: (state) => {
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
            .addCase(fetchTvShowsFavorite.fulfilled, (state, { payload }) => {
                return { ...state, ...payload, status: 'succeeded', }
            })
    }

})

export const { checkIsFavorite, setSort, setPage, clearTvShowsFavorite, addToFavorite } = tvShowsFavoriteSlice.actions;
const tvShowsFavoriteReducer = tvShowsFavoriteSlice.reducer
export default tvShowsFavoriteReducer