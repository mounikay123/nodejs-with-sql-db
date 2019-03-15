var express = require("express"),
app = express();
var bodyParser =require("body-parser");
app.use(bodyParser.json());
app.use('/v1', require('./routes'));
app.listen(8000);