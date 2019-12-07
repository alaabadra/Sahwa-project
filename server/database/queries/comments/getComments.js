const dbconnection = require('../../config/db_connection');

const getComments = (postId) => {
  console.log(postId);
  
  const sql = {
    text: `SELECT username,comment,postComments_id FROM comments JOIN posts ON comments.postComments_id=posts.post_id WHERE comments.postComments_id=$1 `,
    values:[`${postId}`]
   
  };
  return dbconnection.query(sql);
};
module.exports={getComments}