function Blog(sequelize, DataTypes){
	return sequelize.define('blog', {
		author: DataTypes.STRING,
		post: DataTypes.STRING
	});
};

module.exports = Blog;