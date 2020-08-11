import axios from 'axios'
import { BASE_URL } from '../shared/constants/app'

export const http = axios.create({
    baseURL: BASE_URL
})