import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { } from '../Services/tmdbService';
export const  = createAsyncThunk('',
    async () => {

    })

export const  = createSlice({
    name: '',
    initialState: {
        status: "loading",
    },
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(.fulfilled, (state, { payload }) => {
    return { ...state, ...payload, status: 'succeeded', }
})
            .addCase(.rejected, (state) => {
    state.status = 'failed'
})
    }

})
const  = .reducer
export default 