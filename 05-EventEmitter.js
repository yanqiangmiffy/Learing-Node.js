/**
 * Created by Perfect on 2017/8/28.
 * Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。
 Node.js里面的许多对象都会分发事件：一个net.Server对象会在每次有新连接时分发一个事件， 一个fs.readStream对象会在文件被打开的时候发出一个事件。
 所有这些产生事件的对象都是 events.EventEmitter 的实例。
 */
//EventEmitter 的核心就是事件触发与事件监听器功能的封装
//引入events模块
var events=require('events');
//创建eventEmitter对象
var eventEmitter=new events.EventEmitter();
//EventEmitter 对象如果在实例化时发生错误，会触发 error 事件。
// 当添加新的监听器时，newListener 事件会触发，当监听器被移除时，removeListener 事件被触发。
eventEmitter.on('some_event',function () {
    console.log('some_event事件触发');
});
setTimeout(function () {
    eventEmitter.emit('some_event');
},1000);

//EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。
// 对于每个事件，EventEmitter 支持 若干个事件监听器。
//当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
//on 函数用于绑定事件函数，emit 属性用于触发一个事件
eventEmitter.on('someEvent',function (arg1,arg2) {
    console.log('listener1',arg1,arg2);
});
eventEmitter.on('someEvent',function (arg1,arg2) {
    console.log('listener2',arg1,arg2);
});
eventEmitter.emit('someEvent','arg1参数','arg2参数');