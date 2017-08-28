/**
 * Created by Perfect on 2017/8/28.
 * 创建node.js应用
 */
//步骤1 引入required模块
var http=require("http");
//步骤2 创建服务器
// http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。
// 函数通过 request, response 参数来接收和响应数据。
http.createServer(function (request,response) {
    //发送HTTP头部
    //HTTP 状态值 200：OK
    //内容类型：text/plain
    response.writeHead(200,{'Content-type':'text/plain'});
    //发送响应数据 "Hello World"
    response.end("Hello World1");
}).listen(8888);
console.log("Server running at http://127.0.0.1:8888/");