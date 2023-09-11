module.exports = (sequelize, DataTypes) => {
    const blog = sequelize.define("blog", {
    
      title: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      subtitle: {
        type: DataTypes.TEXT,
      },
    });
    return blog;
  };