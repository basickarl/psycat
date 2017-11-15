const Io = require('socket.io-client');

const { getStore } = require('application/client/store');

const socket = Io();
socket
    .on('connect', () => {
        console.log('> connect');
        console.log('< test');
        socket.emit('test', {
            'data': 'herro from client',
        });
    })
    .on('test', (data) => {
        console.log('> test', data);

        getStore().dispatch({
            type: 'DATA',
            payload: data,
        });
    });

module.exports = socket;

console.log('* websocket module loaded');
