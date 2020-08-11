import { http } from './http';

export const getUser = (config) => {
    return http.get(`/api/admin/user`, config)
}
export const addUser = (data, config) => {
    return http.post(`/api/admin/user/add`, data, config)
}
export const deleteUser = (id, config) => {
    return http.delete(`/api/admin/user/delete/${id}`, config)
}
export const getOneUser = (id, config) => {
    return http.get(`/api/admin/user/${id}`, config)
}
export const getComment = (config) => {
    return http.get(`/api/admin/comments`, config)
}
export const LoginAdmin = (data, config) => {
    return http.post(`/auth/local`, data, config)
}
