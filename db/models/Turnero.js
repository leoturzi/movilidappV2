module.exports = function (sequelize, DataTypes) {
    const Turnero = sequelize.define(
        'Turnero',
        {
            ID_TURNERO: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            NOMBRE: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            APELLIDO: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            TELEFONO: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            USUARIO: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            PASSWORD: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'Turneros',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'ID_TURNERO' }],
                },
            ],
        }
    );

    Turnero.associate = function (models) {
        Turnero.hasMany(models.Turno, {
            foreignKey: 'ID_TURNERO',
        });

        Turnero.hasMany(models.Movimiento, {
            foreignKey: 'ID_TURNERO',
        });
    };

    return Turnero;
};
