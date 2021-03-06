var config = require("./config").config;
var express = require('express');
var http = require('http');
var path = require('path');
var routes = require('./routes');

var spider = require('./spider');

var oneDay = 86400000;

var app = express();
app.use(express.compress());

// all environments
app.set('port', process.env.PORT || config.port);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());

app.use(express.static(path.join(__dirname, 'public'), {maxAge: oneDay}));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
routes(app);

//爬虫开始
setTimeout(function () {

    spider.fetch(function (err) {
        console.log(err)
    });

    setInterval(function () {
        spider.fetch(function (err) {
            console.log(err)
        });

    }, config.interval);
}, 5000);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});