import { get } from "./initialService"

export const getTrendingMoviesApi = async () => {
    const { data } = await get("/trending/movie/day?language=en-US")
    return data
}

export const getMoviesPopularApi = async (page = 1) => {
    const { data } = await get(`/movie/popular?language=en-US&page=${page}`)
    return data
}
export const getTvShowsPopularApi = async (page = 1) => {
    const { data } = await get(`/tv/popular?language=en-US&page=${page}`)
    return data
}

export const getTrendingPersonApi = async () => {
    const { data } = await get("/trending/person/day?language=en-US")
    return data
}

export const getMovieGenresApi = async () => {
    const { data } = await get("/genre/movie/list?language=en")
    return data
}
export const getMoviesFavoriteApi = async (account_id, session_id, sort = "popularity.desc") => {
    const { data } = await get(`/account/${account_id}/favorite/movies?session_id=${session_id}&sort_by=${sort}`)
    return data
}
export const getMoviesNowPlayingApi = async (page = 1) => {
    const { data } = await get(`/movie/now_playing?language=en-US&page=${page}`)
    return data
}
export const getMoviesUpcomingApi = async (page = 1) => {
    const { data } = await get(`/movie/upcoming?language=en-US&page=${page}`)
    return data
}
export const getMoviesTopRatedApi = async (page = 1) => {
    const { data } = await get(`/movie/top_rated?language=en-US&page=${page}`)
    return data
}

export const getMoviesFilterApi = async (params) => {
    const { data } = await get(`/discover/movie?language=en-US&page=1${params}`)
    return data
}