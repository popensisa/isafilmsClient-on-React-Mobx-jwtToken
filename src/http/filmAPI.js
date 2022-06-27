import { $authHost, $host } from ".";

export const fetchType = async () => {
    const {data} = await $host.get('api/type')
    return data
}
export const fetchGenre = async () => {
    const {data} = await $host.get('api/genre')
    return data
}
export const fetchFilm = async (genreId, country, year, raiting) => {
    const {data} = await $host.get('api/film', {params: {
        genreId, country, year, raiting
    }})
    return data
}
export const fetchOneFilm = async (id) => {
    const {data} = await $host.get('api/film/' + id)
    return data
}
export const fetchComment = async (id) => {
    const {data} = await $host.get('api/comment/' + id)
    return data
}
export const createComment = async (id, text, img) => {
    const {data} = await $authHost.post('api/comment/' + id, {id, text, img})
    return data
}
export const getAllComments = async () => {
    const {data} = await $authHost.get('api/comment/rev')
    return data
}
export const deleteCom = async (com) => {
    const {data} = await $authHost.delete(`api/comment/${com.id}`)
    return data
}

export const createType = async (name) => {
    const {data} = await $authHost.post('api/type', name)
    return data
}

export const createGenre = async (name) => {
    const {data} = await $authHost.post('api/genre', name)
    return data
}

export const createFilm = async (film) => {
    const {data} = await $authHost.post('api/film', film)
    return data
}
export const deleteFilm = async (id) => {
    const {data} = await $authHost.delete(`api/film/${id}`)
    return data
}
