const crypto = require('crypto')

module.exports = function generateRamdonId() {
    return crypto.randomBytes(4).toString('HEX')
}