/**
 * Created by Ken.Cui on 2014/9/10.
 */
var Area = require('./proxy').Area;

module.exports = function (app) {
    app.get('/', function (req, res) {

        res.render('home');
    });

};