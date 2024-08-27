import axios from 'axios';
import LocalStorages from '../services/localStorages'
axios.defaults.baseURL = "http://localhost:8080";

axios.interceptors.request.use(
    config => {
        const urlSplit = config.url.toLowerCase().split('/')
        if(config.url.includes("login") || config.url.includes("register") || config.url.includes("user/search") || config.url.includes("user/detail")) return config
        const token = LocalStorages.getAllToken()
        const arrPath = {
            'agent':[{'resend_otp' : {headers: {Authorization : `Bearer ${token.confirmToken}`}}},
                    {'resend_otp' : {headers: {Authorization : `Bearer ${token.confirmToken}`}}}
            ]
        }
            //'confirm_email' : {headers: {Authorization : `Bearer ${token.confirmToken}`}}
        console.log(arrPath[urlSplit[1]][0])
        if(token){
            //config.headers["Autherization"] = `Bearer ${token.confirmToken}`
        }
        return config
    },
    err => {
        Promise.reject(err)
    }
)

export default axios;