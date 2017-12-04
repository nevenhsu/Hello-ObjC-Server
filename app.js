var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();



var tutorials = [
    {
        id: 1,
        title: "10 Cool Things On AMAZON In 2017",
        description: "Thanks for watching, don't forget to like, subscribe and check out more awesome videos below!",
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DXB9u2LbKqg" frameborder="0" allowfullscreen></iframe>',
        thumbnail: "https://i2.wp.com/i2.ytimg.com/vi/DXB9u2LbKqg/hqdefault.jpg"
    },
    {
        id: 2,
        title: "How to Draw 3D Letter M",
        description: "Drawing 3D Letter M with charcoal pencil. How to draw letter M. Cool anamorphic illusion. Awesome trick art.",
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/07il8wZR1Tk" frameborder="0" allowfullscreen></iframe>',
        thumbnail: "https://i.ytimg.com/vi/gEAyhL2VO9w/maxresdefault.jpg"
    },

];


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.all('/*', function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","X-Requested-With","Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","POST, GET");
    next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}



// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.get('/tutorials',function (req,res) {
    console.log("Get from server");
    res.send(tutorials);
});

app.listen(6069);

module.exports = app;
