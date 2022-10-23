const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    const Avion = sequelize.define(
        'Avion',
        {
            ID_AVION: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            DESCRIPCION: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            SERVICIO: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: 'Aviones',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'ID_AVION' }],
                },
                {
                    name: 'ID_UNIQUE',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'ID_AVION' }],
                },
            ],
        }
    );
    Avion.associate = function (models) {
        Avion.hasMany(models.Movimiento, {
            foreignKey: 'ID_ESTADO',
        });
    };
    return Avion;
};
