module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.createTable('blogs',
    	{id: {
    		type: DataTypes.INTEGER,
    		primaryKey: true,
    		autoIncrement: true
    	},
    		createdAt: DataTypes.DATE,
    		updatedAt: DataTypes.DATE,
    		author: DataTypes.STRING,
    		post: DataTypes.STRING
    })
    .complete(done)
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.dropTable('blogs')
    	.complete(done)
  }
}