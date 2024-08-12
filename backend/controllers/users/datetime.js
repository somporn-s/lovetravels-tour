const today = () => {
    let today = new Date();
    return  today.toLocaleString('th-TH');
}
module.exports = {
    today
};