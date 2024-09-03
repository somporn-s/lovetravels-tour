const setToken = (data) => {
    if(data.confirmToken){
        localStorage.setItem("confirmToken",data.confirmToken)
    }else if(data.accessToken){
        localStorage.setItem("accessToken",data.accessToken)
        localStorage.setItem("refreshToken",data.refreshToken)
        localStorage.setItem("initRole",data.typeRole)
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
const getInitRole = () => {
    let initRole = localStorage.getItem("initRole")
    if(initRole !== 'member' && initRole !== 'agent'){ removeToken('all'); initRole = 'user' }
    return {role: initRole,loading: true}
}
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
    getInitRole
}
export default permission