function Author(sequelize, DataTypes){

    /* sequelize.define(modelName, attributes, options);
        create a  model like `post`
        with attributes like `body` and `title`
    */
    return sequelize.define('author',{
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING
    })
}

module.exports = Author;