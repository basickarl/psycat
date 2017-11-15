module.exports = {
    retardlog: [
        {
            type: 'file',
            path: 'psycat.log',
        },
        {
            type: 'console'
        }
    ],
    isProduction: process.env.NODE_ENV === 'production' ? true : false,
    httpPort: 8080,
    socketIo: {
        options: {
            forceNew: true,
            cookies: false,
            secure: false
        },
        timeout: 5000
    }
};
