var urllib = require('urllib');
var Bagpipe = require('bagpipe');
var config = require('./config').config;

/**
 * 抓取天气
 * 第一步：获取经纬度信息
 * 第二部：并发远程抓取
 * 第三部：信息入库
 */
var fetch = function () {

    var bagpipe = new Bagpipe(10);
    var locations = ['31.945,119.1687', '32.65533,103.6047'];
    var url = config.remote_host;
    var params = config.req_param;

    for (var i = 0; i < locations.length; i++) {
        params.q = locations[i];
        bagpipe.push(urllib.request, url, {dataType: 'json', data: params}, function (err, data) {
            if (err)
                console.log(err);
            else
                console.log(data.toString());
        });

    }
}

module.exports = fetch;
module.exports.fetch = fetch;