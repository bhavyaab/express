const express = require('express');
const dotenv = require('dotenv').load();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use(express.static(`${__dirname}`));

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.post('/contact', function(req, res){
  res.send('post success');
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});
