import { api } from "./initialService"


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
