const JwtException = require('./jwtException');

exports.EmptyOrNullToken = class EmptyOrNullToken extends JwtException {

    constructor(message) {
        super(message, 401);
    }
}