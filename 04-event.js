/**
 * Created by Perfect on 2017/8/28.
 * Node.js 事件循环
 Node.js 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。
 Node.js 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。
 Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。
 Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.
 */
//引入events模块
var events=require('events');
//创建eventEmitter对象
var eventEmitter=new events.EventEmitter();
//创建事件处理程序
var connectHandler=function connected() {
    console.log('链接成功');
    //触发data_received事件
    eventEmitter.emit('data_received');
};
console.log("我先执行");
//绑定connection事件处理程序
eventEmitter.on('connection',connectHandler);

//使用匿名函数绑定data_received事件
eventEmitter.on('data_received',function () {
    console.log('数据接收成功');
});

//触发 connection事件
eventEmitter.emit('connection');
console.log('程序执行完毕');