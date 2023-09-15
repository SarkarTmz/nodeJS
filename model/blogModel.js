module.exports = (sequelize, DataTypes) => {
    const blog = sequelize.define("blog", {
    
      title: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      subtitle: {
        type: DataTypes.STRING,
      },
    });
    return blog;
  };