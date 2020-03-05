const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const nodepath=require('path');
let botConfig = require('./botConfig');
const botservice = require('@zoomus/botservice');
let expressApp = express();
const cors = require('cors');
const fs=require('fs-extra');
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');
const hbs = require('./hbs');
const NODE_ENV=process.env.NODE_ENV;

const envConfig = dotenv.parse(fs.readFileSync(nodepath.resolve(`.${NODE_ENV||'production'}.env`)));

for (const k in envConfig) {
  process.env[k] = envConfig[k]
}

//middleware body
expressApp.use(bodyParser.json());
expressApp.use(cookieParser());
expressApp.use(
  bodyParser.urlencoded({
    extended: false
  })
);

expressApp.use(compression());
//middleware end
if(NODE_ENV==='development'){
  expressApp.use(cors());
}

botservice(expressApp, botConfig); //core

//set hbs setting end
let rootDir=nodepath.resolve('views/assets');
expressApp.use(express.static(rootDir));

expressApp.set('view engine','hbs');
hbs.registerPartials(nodepath.resolve('views'));

module.exports = expressApp;
