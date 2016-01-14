/**
 * Created by Ken.Cui on 2014/9/10.
 */
var Area = require('./proxy').Area;
var WeatherRealtime=require('./proxy').WeatherRealtime;

var spider = require('./spider');

module.exports = function (app) {
    app.get('/', function (req, res) {
        var lonLat = req.query.lonLat;
        if (lonLat != null) {
            spider.query(lonLat);
        }

        res.render('home', {
            lonLat: lonLat
        });
    });

    app.get('/weather', function (req, res) {
        var latLon = req.query.lonLat;

        var ls = latLon.split(',');

        var lat = ls[0];
        var lon = ls[1];

        Area.getByRequestLatAndLon(lat, lon, function (err, data) {
            if(data==null) return;
            WeatherRealtime.findByArea(data._id,function(err,data){
                res.json(data);
            });

        })

    })

};