const http = require('./app');

const port = process.env.PORT || 5000;

http.listen(port, () => {
  console.log(`server is running on port:${port}`);
});

module.exports=http;