import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTvShowsApi } from '../Services/tmdbService';

export const fetchTvShows = createAsyncThunk('tv/fetchTvShows',
    async ({
        genres,
        keywords,
        maxStar,
        minStar,
        yearFrom,
        yearTo,
        sort = "popularity.desc",
        page = 1
    }) => {
        let query = "";
        if (genres) {
            query += "&with_genres=" + genres
        }
        if (keywords) {
            query += "&with_keywords=" + keywords
        }
        if (minStar) {
            query += "&vote_average.gte=" + minStar
        }
        if (maxStar) {
            query += "&vote_average.lte=" + maxStar
        }
        if (yearFrom) {
            query += "&primary_release_date.gte=" + yearFrom
        }
        if (yearTo) {
            query += "&primary_release_date.lte=" + yearTo
        }
        const movie = await getTvShowsApi(`&page=${page}${query}&sort_by=${sort}`);
        return movie
    })

export const tvShowsSlice = createSlice({
    name: 'tvShows',
    initialState: {
        status: "loading",
        page: 1,
        results: [],
        totalPages: 0,
        totalResults: 0,
        filterField: {
            withDateGte: null,
            withDateLte: new Date().getTime(),
            withKeywords: [],
            withGenres: [],
            withVoteGte: 1,
            withVoteLte: 10,
        },
        filterStatus: false,
        sort: "popularity.desc",
        itemsLoading: "loading"
    },
    reducers: {
        setPage: (state, { payload }) => {
            state.page = payload
            state.itemsLoading = "loading"
        },
        setSort: (state, { payload }) => {
            state.filterStatus = true;
            state.sort = payload
        },
        setDateFrom: (state, { payload }) => {
            state.filterStatus = true;
            state.filterField.withDateGte = payload
        },
        setDateTo: (state, { payload }) => {
            state.filterStatus = true;
            state.filterField.withDateLte = payload
        },
        setKeywords: (state, { payload }) => {
            state.filterStatus = true;
            state.filterField.withKeywords = payload
        },
        setGenres: (state, { payload }) => {
            state.filterStatus = true;
            state.filterField.withGenres = payload
        },
        setMinMaxStar: (state, { payload }) => {
            state.filterStatus = true;
            state.filterField.withVoteGte = payload.min
            state.filterField.withVoteLte = payload.max
        },
        clearSearch: (state) => {
            state.filterStatus = false;
            state.filterField.withDateGte = null
            state.filterField.withDateLte = new Date().getTime()
            state.filterField.withKeywords = ''
            state.filterField.withGenres = ''
            state.filterField.withVoteGte = 1
            state.filterField.withVoteLte = 10
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTvShows.pending, (state) => {
                if (state.page === 1 && state.fetchMovies) {
                    state.status = 'loading'
                } else {
                    state.itemsLoading = "loading"
                }
            })
            .addCase(fetchTvShows.fulfilled, (state, { payload }) => {
                state.status = 'succeeded';
                state.itemsLoading = "succeeded"
                state.results = payload.results;
                state.page = payload.page;
                state.totalPages = payload.total_pages;
                state.totalResults = payload.total_results;
            })
            .addCase(fetchTvShows.rejected, (state) => {
                if (state.page === 1 && state.fetchMovies) {
                    state.status = 'failed';
                } else {
                    state.itemsLoading = "failed"
                }
            })
    }

})
export const {
    setSort,
    setPage,
    setDateFrom,
    setDateTo,
    setKeywords,
    setGenres,
    setMinMaxStar,
    clearSearch
} = tvShowsSlice.actions
const tvShowsReducer = tvShowsSlice.reducer
export default tvShowsReducer