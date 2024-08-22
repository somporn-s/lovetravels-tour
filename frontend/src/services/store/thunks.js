import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import LocalStorages from '../localStorages'

const getRole = createAsyncThunk("setRole/getRole",async () => {
    const token = LocalStorages.getToken()
    if(token.refreshToken){
        const auth_token = await axios.get("/user/auth_token",{ headers: { Authorization: `Bearer ${token.refreshToken}` } })
        return auth_token.data.typeRole
    }else{
        return 'user'
    } 
})

export default getRole;