
const setToken = (data) => {
    localStorage.setItem("accessToken",data.accessToken)
    localStorage.setItem("refreshToken",data.refreshToken)
}
const getToken = () => {
    //return {'accessToken': localStorage.getItem("accessToken"),'refreshToken':localStorage.getItem("refreshToken")}  
    return localStorage.getItem("accessToken");
}
const removeToken = (keys) => {
    if(keys === 'all'){
        localStorage.clear()
    }else{
        keys.forEach((e) => localStorage.removeItem(e));
    }
}
const getRole = () => {
    if(getToken()){
        return "member"
    }else{
        return "user"
    }
}
const permission = {
    setToken,
    getToken,
    removeToken,
    getRole
}
export default permission