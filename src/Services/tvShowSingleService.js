import { api } from "./initialService"


export const tvShowSingleApi = async (id) => {
    const res = await api(`/tv/${id}?language=en-US&append_to_response=aggregate_credits,images,videos,reviews,keywords`)
    return res.data
}

export const tvShowSinglePhotoApi = async (id) => {
    const res = await api(`/tv/${id}/images`)
    return res.data.backdrops
}

