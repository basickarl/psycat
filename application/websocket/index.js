const config = require('application/modules/config');
const log = require('application/modules/log');

const socketIo = require('socket.io');

module.exports = (server) => {
    const io = socketIo(server, config.socketIo);
    io.on('connection', async (socket) => {
        log.info(`> ${socket.id} connected`);
        socket
            .on('test', (data) => {
                log.debug(`> ${socket.id} ${JSON.stringify(data)}`);
                log.debug('< test');
                socket.emit('test', {
                    from: 'hellor fom server'
                });
            })
            .on('disconnect', () => {
                log.info(`> ${socket.id} disconnected`);
            })
    });
};
