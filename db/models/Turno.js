const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    const Turno = sequelize.define(
        'Turno',
        {
            ID_TURNO: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            FECHA: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            ID_TURNERO: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'turneros',
                    key: 'ID_TURNERO',
                },
            },
            CREATED_BY: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            MODIFIED_BY: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'Turnos',
            timestamps: true,
            createdAt: 'CREATED_AT',
            updatedAt: 'UPDATED_AT',
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'ID_TURNO' }],
                },
                {
                    name: 'ID_UNIQUE',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'ID_TURNO' }],
                },
                {
                    name: 'ID_TURNERO_idx',
                    using: 'BTREE',
                    fields: [{ name: 'ID_TURNERO' }],
                },
            ],
        }
    );

    Turno.associate = function (models) {
        Turno.hasOne(models.Turnero, {
            foreignKey: 'ID_TURNERO',
        });
    };

    return Turno;
};
