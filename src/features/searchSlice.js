import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { searchMoviesApi, searchTvShowsApi } from '../Services/tmdbService'


export const fetchSearch = createAsyncThunk('search/fetchSearch',
    async ({ page, query, type }) => {
        let response = "";
        switch (type) {
            case "movies":
                response = await searchMoviesApi({ page, query });
                break;
            case "tvShows":
                response = await searchTvShowsApi({ page, query });
                break;
            default:
                throw new Error("unknown type in search")
        }
        return response
    })





export const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: {
        searchPopup: false,
        page: 1,
        results: [],
        totalPages: 0,
        totalResults: 0,
        status: "loading",
    },
    reducers: {
        closePopup: (state) => {
            state.searchPopup = false
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchSearch.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchSearch.fulfilled, (state, { payload }) => {
                state.searchPopup = true;
                state.status = 'succeeded';
                state.results = payload.results.slice(0, 10);
                state.page = payload.page;
                state.totalPages = payload.total_pages;
                state.totalResults = payload.total_results;
            })
            .addCase(fetchSearch.rejected, (state) => {
                state.status = 'failed'
            })
    }

})

export const { closePopup } = searchSlice.actions
const searchReducer = searchSlice.reducer
export default searchReducer