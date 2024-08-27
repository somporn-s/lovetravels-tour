const setToken = (data) => {
    if(data.confirmToken){
        localStorage.setItem("confirmToken",data.confirmToken)
    }else if(data.accessToken){
        localStorage.setItem("accessToken",data.accessToken)
        localStorage.setItem("refreshToken",data.refreshToken)
    }
}
const getToken = (data) => {
    if(data === 'confirmToken'){
        return {'confirmToken': localStorage.getItem("confirmToken")}
    }else{
        return {'accessToken': localStorage.getItem("accessToken"),'refreshToken':localStorage.getItem("refreshToken")}
    }
      
    //return localStorage.getItem("accessToken");
}
const getAllToken = () => {
    return {...localStorage};
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
    getAllToken,
    removeToken,
}
export default permission