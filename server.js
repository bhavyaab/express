const express = require('express');
const app = express();

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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
