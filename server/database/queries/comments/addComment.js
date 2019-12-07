const dbconnection = require('../../config/db_connection');

const addComment = (username,comment,postComments_id) => {
  const sql = {
    text: 'INSERT INTO comments(username, comment,postComments_id) VALUES ( $1, $2 , $3) RETURNING *',
    values: [username, comment,postComments_id]
  };
  return dbconnection.query(sql);
};

module.exports = { addComment };
