import { http } from './http'

export const LoginLocal = (data, config) => {
    return http.post(`/auth/local`, data, config)
}