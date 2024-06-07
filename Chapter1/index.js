// import {sum} from './lib.js';
const lib = require('./lib.js')

//file module

const fs = require('fs');

const txt = fs.readFileSync('demo.txt','utf-8');
console.log(txt);


console.log(lib.sum(2,9));

//express 

const express = require('express');

const server = express();
server.listen(8080);
