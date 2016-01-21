var config = {
    remote_host: "http://api.worldweatheronline.com/premium/v1/weather.ashx",
    api_host:'http://www.zevercloud.com/api/v1/latLon',
    req_param: {
        //Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name
        q: "31.2,120.7",
        format: "json",
        num_of_days: 5,
        mca: "no",
        fx24: "no",
        includelocation: "yes",
        tp: 24,
//        lang: "zh",
        key: "736cd986430acd194eff2d6fb2390c16eecb2546"
    },

    db: 'mongodb://127.0.0.1/weather_res',
    db_name: 'weather_res',
    session_secret: 'weather_res',
    auth_cookie_name: 'weather_res',
    port: 3001,

    interval: 3 * 60 * 60 * 1000 //运行间隔3小时

};
module.exports = config;
module.exports.config = config;

