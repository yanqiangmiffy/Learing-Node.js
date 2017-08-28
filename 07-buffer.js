/**
 * Created by Perfect on 2017/8/28.
 * JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
 但在处理像TCP流或文件流时，必须使用到二进制数据。
 因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
 在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。
 Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，
 每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。
 原始数据存储在 Buffer 类的实例中。
 一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
 */
//创建buffer类

//方法1 创建长度为 10 字节的 Buffer 实例：
var buf=new Buffer(10);
//方法2 通过给定的数组创建 Buffer 实例：
var buf=new Buffer([10,20,30,40,50]);
//方法3 通过一个字符串来buffer
var buf=new Buffer('www.runoob.com','utf-8');

//写入缓冲区 buf.write(string[, offset[, length]][, encoding])
// 返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。
//实例
var buf=new Buffer(256);
len=buf.write('www.runoob.com','utf-8');
console.log('写入的字节数：'+len);

//从缓冲区中读取数据  buf.toString([encoding[, start[, end]]])
var buf=new Buffer(26);
for(var i=0;i<26;i++){
    buf[i]=i+97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf-8',0,5));
console.log(buf.toString(undefined,0,5));

//将buffer转为json对象 buf.toJSON()
var buf=new Buffer('www.runoob.com');
console.log(buf.toJSON());

//缓冲区合并
var buf1=new Buffer('quincyqiang');
var buf2=new Buffer('正在学习node.js');
var buf3=Buffer.concat([buf1,buf2]);
console.log('buf3的内容为'+buf3.toString());

//缓冲区比较 buf.compare(otherBuffer);
var buf1=new Buffer('ABC');
var buf2=new Buffer('ABCD');
var result=buf1.compare(buf2)
if(result<0){
    console.log(buf1+"在"+buf2+"之前");
}else if(result==0){
    console.log(buf1+"与"+buf2+"相同");
}else{
    console.log(buf1+"在"+buf2+"之后");
}

//拷贝缓冲区 buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
var buf1=new Buffer('ABCD');
//拷贝一个缓冲区
var buf2=new  Buffer(3);
buf1.copy(buf2);
console.log("buf2里的内容为"+buf2.toString());

//缓冲区裁剪  buf.slice([start[, end]])
var buf1=new Buffer('runoob');
//裁剪缓冲区
var buf2=buf1.slice(0,3);
console.log("buf2 content:"+buf2.toString());

//缓冲区长度
var buf1=new Buffer('www.runoob.com');
console.log('buf1 length: '+buf1.length);