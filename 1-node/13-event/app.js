const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('ellie', (args) => {
console.log('first callback -', args);
});

emitter.on('ellie', (args) => {
console.log('second callback -', args);
});

emitter.emit('ellie', { mes: 1 });
emitter.emit('ellie', { mes: 2 });
emitter.emit('ellie', { mes: 3 });