const setToken = (data) => {
    localStorage.setItem("accessToken",data.accessToken)
    localStorage.setItem("refreshToken",data.refreshToken)
}
const getToken = () => {
    return {'accessToken': localStorage.getItem("accessToken"),'refreshToken':localStorage.getItem("refreshToken")}  
    //return localStorage.getItem("accessToken");
}
// const getReToken = () => {
//     return localStorage.getItem("refreshToken");
// }
const removeToken = (keys) => {
    if(keys === 'all'){
        localStorage.clear()
    }else{
        keys.forEach((e) => localStorage.removeItem(e));
    }
}
const permission = {
    setToken,
    getToken,
    removeToken
}
export default permission