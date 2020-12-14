var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://joyful-techs:Faithful3!@faithful.ccxbi.mongodb.net/Faithful?retryWrites=true&w=majority', {useNewUrlParser: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var millplansRouter = require('./routes/millplans');
var sowreapsRouter = require('./routes/sowreaps');
var attitudesRouter = require('./routes/attitudes');
var billspaidsRouter = require('./routes/billspaids');
var savingsRouter = require('./routes/savings');
var debtpayoffsRouter = require('./routes/debtpayoffs');
var dreamsRouter = require('./routes/dreams');
var cashRouter = require('./routes/cashflow');
var loginRouter = require('./routes/login');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/millplans', millplansRouter);
app.use('/sowreaps', sowreapsRouter);
app.use('/attitudes', attitudesRouter);
app.use('/savings', savingsRouter);
app.use('/billspaids', billspaidsRouter);
app.use('/debtpayoffs', debtpayoffsRouter);
app.use('/dreams', dreamsRouter);
app.use('/cashflow', cashRouter);
app.use('/login', loginRouter);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are in!')
});

module.exports = app;
