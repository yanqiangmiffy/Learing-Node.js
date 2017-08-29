/**
 * Created by Perfect on 2017/8/28.
 * Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。
 * 例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。
 Node.js，Stream 有四种流类型：
 Readable - 可读操作。
 Writable - 可写操作。
 Duplex - 可读可写操作.
 Transform - 操作被写入数据，然后读出结果。
 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
 data - 当有数据可读时触发。
 end - 没有更多的数据可读时触发。
 error - 在接收和写入过程中发生错误时触发。
 finish - 所有数据已被写入到底层系统时触发。
 */
var fs=require('fs');
var data='';
//创建可读流
var readerStream=fs.createReadStream('input.txt');
//设置编码为utf-8
readerStream.setEncoding('UTF8');
//处理流事件-->data,end,and error
readerStream.on('data',function (chunk) {
    data+=chunk;
});
readerStream.on('end',function () {
    console.log(data);
});
readerStream.on('error',function (err) {
    console.log(err.stack);
});
console.log("程序执行完毕");

var fs=require('fs');
var data="我的博客地址为：quincyqiang.top";
//创建一个可写入的流，写入到文件output.txt
var writeStream=fs.createWriteStream('output.txt');
//用utf-8编码写入数据
writeStream.write(data,'UTF8');
//标记文件末尾
writeStream.end();
//处理流事件-->data,end,and error
writeStream.on('finish',function () {
    console.log("写入完成");
});
writeStream.on('error',function (err) {
    console.log(err.stack)
});
console.log("程序执行完毕");

//管道流 我们把文件比作装水的桶，而水就是文件里的内容，
// 我们用一根管子(pipe)连接两个桶使得水从一个桶流入另一个桶，这样就慢慢的实现了大文件的复制过程。
var fs=require('fs');
//创建一个可读流
var readStream=fs.createReadStream('input.txt');
//创建一个可写流
var writeStream=fs.createWriteStream('output.txt');
//管道读写操作
//读取input.txt的内容并将内容写入到output.txt文件中
readStream.pipe(writeStream);
console.log("程序执行完毕");

//链式流 链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。
// 接下来我们就是用管道和链式来压缩和解压文件。
var fs=require('fs');
var zlib=require('zlib');
//压缩input.txt文件为input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));
console.log("文件压缩完成");

//解压文件
var fs=require('fs');
var zlib=require('zlib');

//将input.txt.gz解压为input.txt  报错、、、
/*
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));
console.log("文件解压完成");*/
