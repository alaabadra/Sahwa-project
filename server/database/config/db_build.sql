BEGIN;
DROP TABLE IF EXISTS posts,comments,contactUs,complaint;
CREATE TABLE posts(
  post_id SERIAL PRIMARY KEY,
  title TEXT,
  post TEXT


);
CREATE TABLE comments(
  comments_id BIGSERIAL PRIMARY KEY,
  username TEXT,
  comment TEXT ,
  postComments_id INTEGER REFERENCES posts(post_id)

);
CREATE TABLE contactUs(
  contcatId SERIAL PRIMARY KEY,
  contact_name TEXT,
  phone_no INTEGER,
  email TEXT,
  msg TEXT
  
);
CREATE TABLE complaint(
  compId SERIAL PRIMARY KEY,
  titlecomp TEXT,
  msg_comp TEXT,
  voice_note TEXT,
  social_info TEXT
);
COMMIT;
