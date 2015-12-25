var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log('Dynamic react example listening on port ' + port);
});
