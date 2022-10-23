const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    const Equipo = sequelize.define(
        'Equipo',
        {
            ID_EQUIPO: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            DESCRIPCION: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'Equipos',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'ID_EQUIPO' }],
                },
                {
                    name: 'ID_UNIQUE',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'ID_EQUIPO' }],
                },
            ],
        }
    );

    Equipo.associate = function (models) {
        Equipo.hasMany(models.Estado, {
            foreignKey: 'ID_EQUIPO',
        });
    };
    return Equipo;
};
