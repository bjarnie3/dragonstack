const express = require('express');
const GenerationEngine = require('./generation/engine');
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

engine.start();

module.exports = app;

// 39 error : ./node_modules/nodemon/bin/nodemon.js databasePool.js
// 3:34

// 45 9:20 Komin þangað