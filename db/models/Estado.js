const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    const Estado = sequelize.define(
        'Estado',
        {
            ID_ESTADO: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            HORAS: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            NIVEL_ACEITE: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            NIVEL_COMBUSTIBLE: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            ESTADO: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            ID_EQUIPO: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Equipo',
                    key: 'ID_EQUIPO',
                },
            },
            CREATED_BY: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            UPDATED_BY: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'Estados',
            timestamps: true,
            createdAt: 'CREATED_AT',
            updatedAt: 'UPDATED_AT',
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'ID_ESTADO' }],
                },
                {
                    name: 'ID_UNIQUE',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'ID_ESTADO' }],
                },
                {
                    name: 'ID_EQUIPO_idx',
                    using: 'BTREE',
                    fields: [{ name: 'ID_EQUIPO' }],
                },
            ],
        }
    );

    Estado.associate = function (models) {
        Estado.belongsTo(models.Movimiento, {
            foreignKey: 'ID_ESTADO',
        });
    };

    return Estado;
};
