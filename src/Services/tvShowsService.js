import { api } from "./initialService"


export const tvPopularApi = async () => {
    const res = await api("/tv/popular?language=en-US&page=1")
    return res.data.results
}
export const tvAiringTodayApi = async () => {
    const res = await api("/tv/airing_today?language=en-US&page=1")
    return res.data.results
}
export const tvTopRatedApi = async () => {
    const res = await api("/tv/top_rated?language=en-US&page=1")
    return res.data.results
}
export const tvOnTheAirApi = async () => {
    const res = await api("/tv/on_the_air?language=en-US&page=1")
    return res.data.results
}
