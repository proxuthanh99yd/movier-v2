import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getMoviesFilterApi, getMoviesPopularApi } from '../Services/tmdbService';

export const fetchMoviesPopular = createAsyncThunk('movie/fetchMoviesPopular',
    async (currentPage) => {
        const {
            page,
            results,
            total_pages: totalPages,
            total_results: totalResults
        } = await getMoviesPopularApi(currentPage);
        return { page, results, totalPages, totalResults }
    })
export const fetchMoviesPopularFilter = createAsyncThunk('movies/fetchMoviesPopularFilter',
    async ({
        genres,
        keywords,
        maxStar,
        minStar,
        yearFrom,
        yearTo, sort
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
        const movie = await getMoviesFilterApi(`${query}&sort_by=${sort}`);
        return movie
    })
export const moviesPopularSlice = createSlice({
    name: 'moviesPopular',
    initialState: {
        status: "loading",
        page: 1,
        results: [],
        totalPages: 0,
        totalResults: 0,
        filterField: {
            withDateGte: null,
            withDateLte: new Date().getTime(),
            withKeywords: "",
            withGenres: "",
            withVoteGte: 1,
            withVoteLte: 10,
        },
        filterStatus: false,
        sort: "popularity.desc",
    },
    reducers: {
        setPage: (state, { payload }) => {
            state.page = payload
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
            .addCase(fetchMoviesPopular.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchMoviesPopular.fulfilled, (state, { payload }) => {
                return { ...state, ...payload, status: 'succeeded', }
            })
            .addCase(fetchMoviesPopular.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(fetchMoviesPopularFilter.fulfilled, (state, { payload }) => {
                // Add any fetched posts to the arrays
                state.results = payload.results
                state.page = payload.page
                state.totalPages = payload.total_pages
                state.totalResults = payload.total_results
                // state.status = "succeeded"
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
} = moviesPopularSlice.actions
const moviesPopularReducer = moviesPopularSlice.reducer
export default moviesPopularReducer