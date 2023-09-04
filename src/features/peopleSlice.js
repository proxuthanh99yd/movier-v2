import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPeopleApi } from '../Services/tmdbService';

export const fetchPeople = createAsyncThunk('people/fetchPeople',
    async ({ currentPage }) => {
        const {
            page,
            results,
            total_pages: totalPages,
            total_results: totalResults
        } = await getPeopleApi({ currentPage });
        return { page, results, totalPages, totalResults }
    })

export const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        status: "loading",
        page: 1,
        results: [],
        totalPages: 0,
        totalResults: 0,
        itemsLoading: "loading"
    },
    reducers: {
        setPage: (state, { payload }) => {
            state.page = payload
            state.itemsLoading = "loading"
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPeople.pending, (state) => {
                if (state.page === 1 && state.fetchMovies) {
                    state.status = 'loading'
                } else {
                    state.itemsLoading = "loading"
                }
            })
            .addCase(fetchPeople.fulfilled, (state, { payload }) => {
                return { ...state, ...payload, status: 'succeeded', itemsLoading: "succeeded" }
            })
            .addCase(fetchPeople.rejected, (state) => {
                if (state.page === 1 && state.fetchMovies) {
                    state.status = 'failed';
                } else {
                    state.itemsLoading = "failed"
                }
            })
    }

})
export const { setPage } = peopleSlice.actions
const peopleReducer = peopleSlice.reducer
export default peopleReducer