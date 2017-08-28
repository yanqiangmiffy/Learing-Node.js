var events=require('events');
var eventEmitter=new events.EventEmitter();

//监听器1
var listener1=function () {
  console.log('监听器listener1执行');
};
//监听器2
var listener2=function () {
  console.log('监听器listener2执行');
};

//绑定connection事件，处理函数为listener1
eventEmitter.addListener('connection',listener1);
//绑定connection事件，处理函数为listener2
eventEmitter.on('connection',listener2);

var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+'个监听器连接事件');

//触发connection事件
eventEmitter.emit('connection');

//移除绑定的listener1函数
eventEmitter.removeListener('connection',listener1);
console.log('listener1函数不受监听');
//触发connection事件
eventEmitter.emit('connection');

var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+'个监听器连接事件');
console.log('程序执行完毕');