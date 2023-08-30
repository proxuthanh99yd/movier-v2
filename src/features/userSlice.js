import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addFavoriteApi, createRequestToken, createSessionID, createSessionWithLogin, getUserApi } from '../Services/userService';
import { toast } from 'react-toastify';


export const fetchAuth = createAsyncThunk('auth/fetchAuth',
    async ({ username, password }) => {
        const { request_token: requestToken } = await createRequestToken();

        const { request_token: authSession } = await createSessionWithLogin(username, password, requestToken)

        const { session_id: sessionId } = await createSessionID(authSession);

        const { id: accountId } = await getUserApi(sessionId);
        localStorage.setItem("auth", JSON.stringify({ requestToken, authSession, sessionId, accountId }))
        return { requestToken, authSession, sessionId }
    })

export const fetchAddFavorite = createAsyncThunk('auth/fetchAddFavorite',
    async (movieId) => {
        const auth = JSON.parse(localStorage.getItem("auth"))
        console.log(auth);
        const data = await addFavoriteApi(auth.accountId, movieId, auth.sessionId);
        return data
    })

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        status: "",
        requestToken: "",
        authSession: "",
        sessionId: "",
        favorite: "",
        favoriteStatus: "",
    },
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAuth.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAuth.fulfilled, (state, { payload }) => {
                toast("Login Succeeded")
                return { ...state, ...payload, status: "succeeded" }
            })
            .addCase(fetchAuth.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(fetchAddFavorite.pending, (state) => {
                state.favoriteStatus = 'loading'
            })
            .addCase(fetchAddFavorite.fulfilled, (state, { payload }) => {
                // toast("Login Succeeded")
                state.favorite = payload;
                state.favoriteStatus = new Date().getTime();
            })
            .addCase(fetchAddFavorite.rejected, (state) => {
                state.favoriteStatus = 'failed'
            })

    }

})

// export const { } = homeSlice.actions

export default userSlice.reducer