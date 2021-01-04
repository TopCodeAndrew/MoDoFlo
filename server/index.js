require('dotenv').config();
const express = require('express');
const session = require('session');
const authCtrl = require('./controllers/authController');
const blockCtrl = require('./controllers/blockController');
const sessionCtrl = require('./controllers/sessionController');
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

