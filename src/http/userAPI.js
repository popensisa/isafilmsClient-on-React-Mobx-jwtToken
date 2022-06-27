import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'

export const registration = async (reg) => {
    try {
        const {data} = await $host.post('api/user/registration', reg)
        return data
    } catch (error) {
        alert(error.response.data.message)
    }
}
export const auth = async (email, password) => {
    try {
        const {data} = await $host.post('api/user/login', {email, password})
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
    } catch (error) {
        alert(error.response.data.message)
    }
}
export const check = async () => {
    const {data} = await $authHost.post('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const getSelf = async (token) => {
    const {data} = await $authHost.get('api/user/account', token)
    return data
}

export const userUpdateName = async (newName) => {
    const {data} = await $authHost.post('api/user/update', {newName})
    return data
}

// export const getComment = async (id) => {
//     const response = await $host.get(`/api/comment/${id}`, {id})
// }
