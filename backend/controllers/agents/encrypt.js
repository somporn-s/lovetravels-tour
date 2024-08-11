const jwt = require('jsonwebtoken');
const fs = require('fs');

const options = {expiresIn: '15m',algorithm: 'RS256'};
const encoded = async (payload) => {
    const privateKey = await fs.readFileSync('./src/encrypt/privateKey.key','utf-8');
    const token = jwt.sign(payload, privateKey, options);
    return token;
}
const decoded = async (token) => {
    const publicKey = await fs.readFileSync('./src/encrypt/publicKey.key','utf-8');
    const verified = jwt.verify(token,publicKey,options);
      //res.redirect('/login');
    return verified;
}
module.exports = {
    encoded,
    decoded
};