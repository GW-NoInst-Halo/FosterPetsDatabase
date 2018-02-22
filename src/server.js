const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./app/app.component');

const animals = require('./routes/animals');

const port = 4200;

const app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFeile);

// set static folder

app.use(express.static(path.join(__dirname, 'app')));

//body parser mw

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', animals);

app.listen(port, () => {
  console.log('Server stated on port');
});