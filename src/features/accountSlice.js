import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteSession, getUserApi } from '../Services/userService';
import { toast } from 'react-toastify';


export const fetchUser = createAsyncThunk('auth/fetchUser',
    async (session_id) => {
        const user = await getUserApi(session_id);
        return { user }
    })
export const logoutApi = createAsyncThunk('auth/logoutApi',
    async (session_id) => {
        const { success } = await deleteSession(session_id);
        if (success) {
            localStorage.clear("auth")
        }
        return { success }
    })




export const accountSlice = createSlice({
    name: 'accountSlice',
    initialState: {
        status: "",
        user: {}
    },
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchUser.fulfilled, (state, { payload }) => {
                return { ...state, ...payload, status: "succeeded" }
            })
            .addCase(fetchUser.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(logoutApi.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(logoutApi.fulfilled, (state) => {
                toast("Logout Succeeded")
                return { ...state, user: {}, status: "logout" }
            })
            .addCase(logoutApi.rejected, (state) => {
                state.status = 'failed'
            })

    }

})

// export const { } = homeSlice.actions

export default accountSlice.reducer