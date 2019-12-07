const dbconnection = require('../../config/db_connection');

const addComplaint = (titlecomp,msg_comp,voice_note,social_info) => {
  const sql = {
    text: 'INSERT INTO complaint(titlecomp, msg_comp,voice_note,social_info) VALUES ( $1, $2 , $3,$4) RETURNING *',
    values: [titlecomp, msg_comp,voice_note,social_info]
  };
  return dbconnection.query(sql);
};

module.exports = { addComplaint };
