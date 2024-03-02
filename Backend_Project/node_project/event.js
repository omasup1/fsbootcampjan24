const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.addListener('error', () => {
    console.log('An error happened in the application');
})

myEmitter.on('error', () => {
    console.log('error happened');
})

myEmitter.on('store_error', (args) => {
    console.log('error happened', args.message);
})

myEmitter.emit('error');

myEmitter.emit('store_error', {message: 'You code is wrong', line: '16'});