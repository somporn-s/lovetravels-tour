import axios from 'axios';
import LocalStorages from '../services/localStorages'
axios.defaults.baseURL = "http://localhost:8080";

axios.interceptors.request.use(
    config => {
        const url = config.url.toLowerCase()
        const urlSplit = url.split('/')
        if(url.includes("login") || url.includes("register") || url.includes("confirm_email") || url.includes("user/search") || url.includes("user/detail")) return config
        const token = LocalStorages.getAllToken()
        const arrPath = {
            'user':[
                {'resend_otp' : {headers: {Autherization : `Bearer ${token.accessToken}`}}},
            ],
            'agent':[
                {'resend_otp' : {headers: {Autherization : `Bearer ${token.confirmToken}`}}},
                {'booking' : {headers: {Autherization : `Bearer ${token.confirmToken}`}}},
            ]
        }
            arrPath[urlSplit[1]].forEach((v, k) => {
                if(v[urlSplit[2]]){
                    Object.keys(v[urlSplit[2]]).forEach(function(k) {
                        if(k){
                            Object.keys(v[urlSplit[2]][k]).forEach(function(key) {
                                if(token && key){
                                    config[k][key] = v[urlSplit[2]][k][key]
                                }
                            });
                        }
                    });
                    //return v[urlSplit[2]]
                } 
            });
        // if(token){
        //     //config.headers["Autherization"] = `Bearer ${token.confirmToken}`
        //     //console.log(config)
        // }
        return config
    },
    err => {
        Promise.reject(err)
    }
)

export default axios;