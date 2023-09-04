import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPersonApi } from '../Services/tmdbService';
export const fetchPerson = createAsyncThunk('person/fetchPerson',
    async ({ personId }) => {
        const response = await getPersonApi({ personId });
        return response
    })

export const personSlice = createSlice({
    name: 'person',
    initialState: {
        status: "loading",
    },
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPerson.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchPerson.fulfilled, (state, { payload }) => {
                return { ...state, ...payload, status: 'succeeded', }
            })
            .addCase(fetchPerson.rejected, (state) => {
                state.status = 'failed'
            })
    }

})
const personReducer = personSlice.reducer
export default personReducer