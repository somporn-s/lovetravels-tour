import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import LocalStorages from '../localStorages'

const getRole = createAsyncThunk("setRole/getRole",async () => {
    const token = LocalStorages.getToken()
    if(token.refreshToken){
        const auth_token = await axios.get("/user/auth_token")
        .then(res => {return res.data.typeRole})
        .catch(err => {return 'user'})
        console.log('en retrole : '+auth_token)
        return auth_token
    }else{
        console.log('no en retrole : ')
        return 'user'
    } 
})

export default getRole;