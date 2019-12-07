const dbconnection = require('../../config/db_connection');

const addContanctUS = (name,phone_no,email,msg) => {
  const sql = {
    text: 'INSERT INTO contactUs(contact_name, phone_no,email,msg) VALUES ( $1, $2 , $3,$4) RETURNING *',
    values: [name, phone_no,email,msg]
  };
  return dbconnection.query(sql);
};

module.exports = { addContanctUS };
