const dbconnection = require('../../config/db_connection');

const getAllPosts = () => {
  const sql = {
    text: 'SELECT * FROM posts  ',
  };
  return dbconnection.query(sql);
};
module.exports={getAllPosts}