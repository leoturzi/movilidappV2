const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    const Movimiento = sequelize.define(
        'Movimiento',
        {
            ID_MOVIMIENTO: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            FECHA: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            HORA: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            TIPO_MOVIENTO: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            OBSERVACION: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            CREATED_BY: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            MODIFIED_BY: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            ID_TURNERO: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Turneros',
                    key: 'ID_TURNERO',
                },
            },
            ID_ESTADO: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Estados',
                    key: 'ID_ESTADO',
                },
            },
            ID_AVION: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Aviones',
                    key: 'ID_AVION',
                },
            },
        },
        {
            sequelize,
            tableName: 'Movimientos',
            timestamps: true,
            createdAt: 'CREATED_AT',
            updatedAt: 'UPDATED_AT',
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'ID_MOVIMIENTO' }],
                },
                {
                    name: 'ID_MOVIMIENTO_UNIQUE',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'ID_MOVIMIENTO' }],
                },
                {
                    name: 'AVION_idx',
                    using: 'BTREE',
                    fields: [{ name: 'ID_AVION' }],
                },
                {
                    name: 'ESTADO_idx',
                    using: 'BTREE',
                    fields: [{ name: 'ID_ESTADO' }],
                },
                {
                    name: 'TURNERO_idx',
                    using: 'BTREE',
                    fields: [{ name: 'ID_TURNERO' }],
                },
            ],
        }
    );

    Movimiento.associate = function (models) {
        Movimiento.belongsTo(models.Turnero, {
            foreignKey: 'ID_TURNERO',
        });

        Movimiento.hasOne(models.Estado, {
            foreignKey: 'ID_ESTADO',
        });

        Movimiento.hasOne(models.Avion, {
            foreignKey: 'ID_AVION',
        });
    };

    return Movimiento;
};
