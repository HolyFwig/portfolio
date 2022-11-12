const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

console.log("The server is now up!")
console.log("Copyright © 2022 Lunadox")

app.use('/', express.static(__dirname + '/public/'))
app.listen(8080)