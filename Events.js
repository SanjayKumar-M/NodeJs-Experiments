import EventEmitter from 'node:events'

const emitter = new EventEmitter()

const odd = (num) => {
    if (num % 2 === 0)
        console.log(`The number ${num} is even`)
    else
        console.log(`The Number ${num} is Odd`)
}

emitter.on('odd_even', () => odd(5))
emitter.emit('odd_even')




