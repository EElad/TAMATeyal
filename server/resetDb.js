const fs = require('fs/promises');
const path = require('path');

const sample = require('./data/sample.json');
const pathDb = path.join(__dirname,'data','db.json');
const content = JSON.stringify(sample);

fs.writeFile(pathDb,content,'utf8');
