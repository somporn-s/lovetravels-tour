module.exports = (Sequelize , DataTypes) => {
    const model = Sequelize.define('Members',{
       uid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING(50)
        },
        password: {
            type: DataTypes.TEXT,
        },
        update_date: {
            type: DataTypes.DATE,
        }
    },{
        tableName: 'members',
        timestamps: false,
    });

    // model.associate = models => {
    //     //model.hasOne(models.Transection,{foreignKey:'user_id'}) //one to one
    //     //model.belongsToMany(models.Transection, {through: models.Transection}) //many to many
    //     //model.hasMany(models.Transection,{foreignKey:'user_id'}) //one to many
    // }
    return model;
}