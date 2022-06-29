
module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define(
      'users',
      {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        parent_id: DataTypes.STRING,
        avatar: DataTypes.STRING,
        uniqueId: DataTypes.STRING,
        name:DataTypes.STRING,
        first_name:DataTypes.STRING,
        last_name:DataTypes.STRING,
        email:DataTypes.STRING,
        phone:DataTypes.STRING,
        organization:DataTypes.STRING,
        org_id:DataTypes.BIGINT,
        dob: DataTypes.DATE(6),
        street: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
        country: DataTypes.STRING,
        fcm_token: DataTypes.STRING,
        email_verified_at: DataTypes.STRING,
        password: DataTypes.STRING,
        is_publish: DataTypes.ENUM(['1','0']),
        is_block:DataTypes.ENUM(['1','0']),
        remember_token:DataTypes.STRING,
        created_at:DataTypes.DATE,
        updated_at:DataTypes.DATE
      },
      {
        freezeTableName: true,
        underscored: false,
        timestamps: false,
      },
    );
    return users;
}; 