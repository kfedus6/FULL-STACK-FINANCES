import axios, { AxiosInstance } from "axios";

const $host: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

const authInterceptor = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

const $authHost = axios.create({
    baseURL: 'http://localhost:3000/api/'
})

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}