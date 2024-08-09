module.exports = (Sequelize , DataTypes) => {
    const model = Sequelize.define('Agent',{
        license_id: {
            type: DataTypes.STRING(100),
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(100),
            notNull: true
        },
        password: {
            type: DataTypes.TEXT,
            notNull: true
        },
        email: {
            type: DataTypes.STRING,
            notNull: true
        },
        company_name: {
            type: DataTypes.STRING,
            notNull: true
        },
        tel: {
            type: DataTypes.STRING(20),
            notNull: true
        },
        pic_payment_part: {
            type: DataTypes.TEXT,
            notNull: true
        },
        update_date: {
            type: DataTypes.DATE(6),
            notNull: true
        }
    },{
        tableName: 'agent',
        collate: 'utf8mb4_general_ci',
        timestamps: false,
    });
    
    model.associate = models => {
    //     //model.hasOne(models.Reservation,{foreignKey:'uid'}) //one to one
    //     //model.belongsToMany(models.Reservation, {through: models.Reservation}) //many to many
        model.hasMany(models.Package_tour,{foreignKey:'license_id'}) //one to many

    //     //model.belongsTo(models.Package_tour, {foreignKey: 'license_id',allowNull: false}) //one to one || one to many
    //     //model.belongsTo(models.Reservation, {foreignKey: 'uid',allowNull: false}) //one to one || one to many
    //     //model.belongsToMany(models.Member, {through: models.User}) //many to many
    }
    return model;
}