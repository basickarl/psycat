const config = require('application/modules/config');

const retardlog = require('retardlog');

const log = retardlog.create(config.retardlog)

module.exports = log;
