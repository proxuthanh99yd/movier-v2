import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTvShowsRatedApi } from '../Services/tmdbService';

export const fetchTvShowsRated = createAsyncThunk("rate/fetchTvShowsRated",
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
        } = await getTvShowsRatedApi(auth.accountId, auth.sessionId, sort);
        return { page, results, totalPages, totalResults }
    }
)
export const tvShowsRatedSlice = createSlice({
    name: 'moviesRated',
    initialState: {
        status: "loading",
        page: 0,
        results: [],
        totalPages: 0,
        totalResults: 0,
        rateStar: 0,
        toastNotify: "",
        itemsLoading: "succeeded"
    },
    reducers: {
        setRateStar: (state, { payload }) => {
            state.rateStar = payload;
        }, setSort: (state, { payload }) => {
            state.sort = payload

        },
        setPage: (state, { payload }) => {
            state.page = payload
        },
        setLoading: (state) => {
            state.toastNotify = "loading"
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTvShowsRated.fulfilled, (state, { payload }) => {
                return { ...state, ...payload, status: 'succeeded', }
            })
    }

})
export const { setRateStar, setPage, setSort, setLoading } = tvShowsRatedSlice.actions
const tvShowsRatedReducer = tvShowsRatedSlice.reducer
export default tvShowsRatedReducer