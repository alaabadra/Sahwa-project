const dbconnection = require('../../config/db_connection');

const addPost = (title,post) => {
  const sql = {
    text: 'INSERT INTO posts(title, post) VALUES ( $1, $2 ) RETURNING *',
    values: [title, post],
  };
  return dbconnection.query(sql);
};

module.exports = { addPost };
