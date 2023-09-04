import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { createRequestToken, createSessionID, deleteSession, getUserApi } from '../Services/tmdbService';


export const requestToken = createAsyncThunk('auth/requestToken',
    async () => {
        const { request_token: requestToken } = await createRequestToken();
        localStorage.setItem("auth", JSON.stringify({ requestToken }))
        window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${import.meta.env.VITE_APP_URL}approved`;
        return { requestToken }
    })


export const getSessionId = createAsyncThunk('auth/getSessionId',
    async () => {
        const auth = JSON.parse(localStorage.getItem("auth"))
        if (auth?.requestToken) {
            if (auth?.sessionId) {
                return {};
            } else {
                const { session_id: sessionId } = await createSessionID(auth.requestToken)
                localStorage.setItem("auth", JSON.stringify({ ...auth, sessionId }))
                const user = await getUserApi(sessionId);
                return { user, isLogin: true }
            }
        }
        return {}
    })


export const fetchUser = createAsyncThunk('auth/fetchUser',
    async () => {
        const auth = JSON.parse(localStorage.getItem("auth"))
        if (!auth?.sessionId) {
            return {}
        }
        const user = await getUserApi(auth.sessionId);
        return { user, isLogin: true }
    })


export const getRequestToken = createAsyncThunk('auth/requestToken', async () => {
    const auth = JSON.parse(localStorage.getItem("auth"))
    const { request_token: requestToken } = await createRequestToken();
    if (auth) {
        localStorage.setItem("auth", JSON.stringify({ ...auth, requestToken }))
    } else {
        localStorage.setItem("auth", JSON.stringify({ requestToken }))
    }
    return requestToken
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
        user: {},
        requestToken: "",
        sessionId: "",
        isLogin: false

    },
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUser.fulfilled, (state, { payload }) => {
                return { ...state, ...payload }
            })
            .addCase(logoutApi.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(logoutApi.fulfilled, (state) => {
                toast.success("Logout Succeeded", {
                    autoClose: 2000
                })
                return { ...state, user: {}, status: "logout", isLogin: false }
            })
            .addCase(logoutApi.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(getRequestToken.fulfilled, (state, { payload }) => {
                state.requestToken = payload
            })
            .addCase(getSessionId.fulfilled, (state, { payload }) => {
                return { ...state, ...payload, status: "succeeded" }
            })

    }

})

// export const { } = homeSlice.actions

export default accountSlice.reducer