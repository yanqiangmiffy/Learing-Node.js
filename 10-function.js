/**
 * Created by Perfect on 2017/8/29.
 */

//我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。
function say(word) {
    console.log(word);
}
function execute(someFunction,value) {
    someFunction(value);
}
execute(say,"hello man");

//匿名函数
function execute(someFunction,value) {
    someFunction(value);
}
execute(function (word) {
    console.log(word);
},"hello man2");

//函数传递如何让服务器工作
var http=require('http');
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write("Hello World1");
    response.end();
}).listen(8888);

//下面可以实现一样的功能
/*
var http = require("http");
function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8888);*/
