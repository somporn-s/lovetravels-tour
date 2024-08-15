import axios from 'axios';
import LocalStorages from '../services/localStorages'
axios.defaults.baseURL = "http://localhost:8080";

axios.interceptors.request.use(
    config => {
        if(config.url.includes("user/login") || config.url.includes("user/register") || config.url.includes("user/search") || config.url.includes("user/detail")) return config
        const token = LocalStorages.getToken()

        if(token){
            config.headers["Autherization"] = `Bearer ${token}`
        }

        return config
    },
    err => {
        Promise.reject(err)
    }
)

export default axios;