const dbconnection = require('../../config/db_connection');

const getPost = (postId) => {
  const sql = {
    text: 'SELECT * FROM posts WHERE post_id = $1 ',
    values:[postId]
  };
  return dbconnection.query(sql);
};
module.exports={getPost}