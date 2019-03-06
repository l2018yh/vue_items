var express = require('express')
var app = express();
var allowCrossDomain = function (req, res, next) {//设置response头部的中间件
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS")
    next();
};
app.use(allowCrossDomain);

// index返回的json
app.get("/server/data/indexdata", function (request, response) {
    var data = require('./data/indexdata');//要获取的json文件
    response.send(data);
})

// shoplist返回的json
app.get("/server/data/data", function (request, response) {
    var data = require('./data/data');//要获取的json文件
    response.send(data);
})

// carts返回的json
app.get("/server/data/cartsdata", function (request, response) {
    var data = require('./data/cartsdata');//要获取的json文件
    response.send(data);
})


app.listen('3000', function () {
    console.log('listening on 3000')
});