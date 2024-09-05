
const db = require('../../../models');
const {sequelize,Sequelize} = require('../../../models');
const { QueryTypes } = require('sequelize');
const datetime = require('../datetime');

const addPackageTour = async (req,res) => {
    const body = req.body;
    res.status(200).send("add package ok !!")
}
module.exports = {
    addPackageTour
}