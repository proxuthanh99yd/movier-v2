import axios from "axios"
import { api } from "./initialService"

export const createRequestToken = async () => {
    const requestToken = await api("/authentication/token/new")
    return requestToken.data
}

export const createSessionWithLogin = async (username, password, request_token) => {

    const session = await axios.post(import.meta.env.VITE_BASE_URL + "/authentication/token/validate_with_login",
        {
            username, password, request_token
        },
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                accept: 'application/json',
                Authorization: import.meta.env.VITE_HEADER_AUTH
            }
        })

    return session.data
}
export const createSessionID = async (request_token) => {

    const session = await axios.post(import.meta.env.VITE_BASE_URL + "/authentication/session/new",
        {
            request_token
        },
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                accept: 'application/json',
                Authorization: import.meta.env.VITE_HEADER_AUTH
            }
        })

    return session.data
}
export const getUserApi = async (session_id) => {

    const { data } = await api(`/account?session_id=${session_id}`)
    return data
}

export const deleteSession = async (session_id) => {
    const sessionId_ToJson = JSON.stringify({ session_id: session_id })
    // const session = await axios.delete(import.meta.env.VITE_BASE_URL + "/authentication/session",
    //     {
    //         sessionId_ToJson
    //     },
    //     {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             accept: 'application/json',
    //             Authorization: import.meta.env.VITE_HEADER_AUTH
    //         }
    //     })
    const options = {
        method: 'DELETE',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmFkYWEyMGNjZmFiNzQ1MjAxZWU1Y2I3YTliOGRiZCIsInN1YiI6IjYwNjU3MjgwNmQ2NzVhMDA0MGI5OWY1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s2GiyoR_9wqIFdM0de0QGQxX6WNd-GX1ImzDjqmkcDw'
        },
        body: sessionId_ToJson
    };
    const session = await fetch('https://api.themoviedb.org/3/authentication/session', options)
    return session.json()
}

export const addFavoriteApi = async (accountId, movieId, sessionId) => {
    const body = JSON.stringify({
        media_type: "movie", media_id: movieId,
        favorite: true
    })
    console.log(body);
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmFkYWEyMGNjZmFiNzQ1MjAxZWU1Y2I3YTliOGRiZCIsInN1YiI6IjYwNjU3MjgwNmQ2NzVhMDA0MGI5OWY1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s2GiyoR_9wqIFdM0de0QGQxX6WNd-GX1ImzDjqmkcDw'
        },
        body: body
    };
    const session = await fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite`, options)
    return session.json()
}
export const removeFavoriteApi = async (accountId, movieId, sessionId) => {
    const body = JSON.stringify({
        media_type: "movie", media_id: movieId,
        favorite: false
    })
    console.log(body);
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmFkYWEyMGNjZmFiNzQ1MjAxZWU1Y2I3YTliOGRiZCIsInN1YiI6IjYwNjU3MjgwNmQ2NzVhMDA0MGI5OWY1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s2GiyoR_9wqIFdM0de0QGQxX6WNd-GX1ImzDjqmkcDw'
        },
        body: body
    };
    const session = await fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite`, options)
    return session.json()
}