import axios from "axios"
import { api, get, post } from "./initialService"

export const getTrendingMoviesApi = async () => {
    const { data } = await get("/trending/movie/day?language=en-US")
    return data
}

export const getMoviesApi = async (params) => {
    const { data } = await get(`/discover/movie?language=en-US${params}`)
    return data
}
export const getTvShowsApi = async (params) => {
    const { data } = await get(`/discover/tv?language=en-US${params}`)
    return data
}

export const getPeopleApi = async ({ currentPage = 1 }) => {
    const { data } = await get(`/person/popular?language=en-US&page=${currentPage}`)
    return data
}

export const getMovieGenresApi = async () => {
    const { data } = await get("/genre/movie/list?language=en")
    return data
}
export const getMoviesFavoriteApi = async (account_id, session_id, sort = "created_at.asc") => {
    const { data } = await get(`/account/${account_id}/favorite/movies?session_id=${session_id}&sort_by=${sort}`)
    return data
}

export const getAccountStatesApi = async (movieId, sessionId) => {
    const session = `?session_id=${sessionId}`
    const { data } = await get(`/movie/${movieId}/account_states${sessionId && session}`)
    return data
}

export const addMovieFavoriteApi = async ({ accountId, movieId, sessionId }) => {
    const { data } = await post(`/account/${accountId}/favorite?session_id=${sessionId}`,
        {
            data: {
                media_type: "movie",
                media_id: movieId,
                favorite: true
            }
        })
    return data
}
export const removeMovieFavoriteApi = async ({ accountId, movieId, sessionId }) => {
    const { data } = await post(`/account/${accountId}/favorite?session_id=${sessionId}`,
        {
            data: {
                media_type: "movie",
                media_id: movieId,
                favorite: false
            }
        })
    return data
}

export const getTvShowGenresApi = async () => {
    const { data } = await get("/genre/tv/list?language=en")
    return data
}

export const searchMoviesApi = async ({ query, page = 1 }) => {
    const { data } = await get(`/search/movie?query=${query}&language=en-US&page=${page}`)
    return data
}
export const searchTvShowsApi = async ({ query, page = 1 }) => {
    const { data } = await get(`/search/tv?query=${query}&language=en-US&page=${page}`)
    return data
}

export const addMovieRatedApi = async ({ movieId, value, sessionId }) => {
    const { data } = await post(`/movie/${movieId}/rating?session_id=${sessionId}`, {
        data: { value }
    })
    return data
}
export const getMoviesRatedApi = async (account_id, session_id, sort = "created_at.asc") => {
    const { data } = await get(`/account/${account_id}/rated/movies?session_id=${session_id}&sort_by=${sort}`)
    return data
}
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
    const { data } = await post(import.meta.env.VITE_BASE_URL + "/authentication/session/new",
        {
            data: {
                request_token
            }
        })

    return data
}

export const getUserApi = async (session_id) => {

    const { data } = await api(`/account?session_id=${session_id}`)
    return data
}

export const deleteSession = async (session_id) => {
    const sessionId_ToJson = JSON.stringify({ session_id: session_id })
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

export const movieSingleApi = async (id) => {
    const res = await api(`/movie/${id}?language=en-US&append_to_response=credits,images,videos,reviews,keywords`)
    return res.data
}

export const movieSinglePhotoApi = async (id) => {
    const res = await api(`/movie/${id}/images`)
    return res.data.backdrops
}

export const movieSingleCastApi = async (id) => {
    const res = await api(`/movie/${id}/credits?language=en-US`)
    return res.data.cast
}
export const tvShowSingleApi = async (id) => {
    const res = await api(`/tv/${id}?language=en-US&append_to_response=aggregate_credits,images,videos,reviews,keywords`)
    return res.data
}

export const tvShowSinglePhotoApi = async (id) => {
    const res = await api(`/tv/${id}/images`)
    return res.data.backdrops
}

export const getTvShowStatesApi = async (tvShowId, sessionId) => {
    const session = `?session_id=${sessionId}`
    const { data } = await get(`/tv/${tvShowId}/account_states${sessionId && session}`)
    return data
}

export const addTvShowFavoriteApi = async ({ accountId, tvShowId, sessionId }) => {
    const { data } = await post(`/account/${accountId}/favorite?session_id=${sessionId}`,
        {
            data: {
                media_type: "tv",
                media_id: tvShowId,
                favorite: true
            }
        })
    return data
}
export const removeTvShowFavoriteApi = async ({ accountId, tvShowId, sessionId }) => {
    const { data } = await post(`/account/${accountId}/favorite?session_id=${sessionId}`,
        {
            data: {
                media_type: "tv",
                media_id: tvShowId,
                favorite: false
            }
        })
    return data
}

export const addTvShowRatedApi = async ({ tvShowId, value, sessionId }) => {
    const { data } = await post(`/tv/${tvShowId}/rating?session_id=${sessionId}`, {
        data: { value }
    })
    return data
}

export const getTvShowsFavoriteApi = async (account_id, session_id, sort = "created_at.asc") => {
    const { data } = await get(`/account/${account_id}/favorite/tv?session_id=${session_id}&sort_by=${sort}`)
    return data
}

export const getTvShowsRatedApi = async (account_id, session_id, sort = "created_at.asc") => {
    const { data } = await get(`/account/${account_id}/rated/tv?session_id=${session_id}&sort_by=${sort}`)
    return data
}

export const getPersonApi = async ({ personId }) => {
    const { data } = await get(`/person/${personId}?append_to_response=movie_credits%2Cimages&language=en-US`)
    return data
}