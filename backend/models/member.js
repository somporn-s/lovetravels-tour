module.exports = (Sequelize , DataTypes) => {
    const model = Sequelize.define('Member',{
        uid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            notNull: true
        },
        password: {
            type: DataTypes.TEXT,
            notNull: true
        },
        update_date: {
            type: DataTypes.DATE(6),
            notNull: true
        }
    },{
        tableName: 'member',
        collate: 'utf8mb4_general_ci',
        timestamps: false,
    });
    
    model.associate = models => {
        //model.hasOne(models.Reservation,{foreignKey:'uid'}) //one to one
        //model.belongsToMany(models.Reservation, {through: models.Reservation}) //many to many
        model.hasMany(models.Reservation,{foreignKey:'uid'}) //one to many

        //model.belongsTo(models.Reservation, {foreignKey: 'uid',allowNull: false}) //one to one || one to many
        //model.belongsToMany(models.Member, {through: models.User}) //many to many
    }
    return model;
}