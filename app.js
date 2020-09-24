const express = require('express');
const app = express();
const port = 3000;

const routers = require("./src/router");
app.use('/api/v1', routers); //dung routers cho tat ca cac router bat dau bang /api/v1
app.use(express.static('public'));
app.listen(port, function (){
    console.log("app is listening on port " + port);
})

module.exports = app;

