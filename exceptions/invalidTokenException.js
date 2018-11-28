const JwtException = require('./jwtException');

exports.InvalidTokenException = class InvalidTokenException extends JwtException {

    constructor(message) {
        super(message, 402);
    }
}