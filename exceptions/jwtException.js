
class JwtException extends Error {
    constructor(message, status = 401) {
        if (!messge) {
            message = "Invalid token";
        }
        super(message)
        this.status = status;
    }
}

module.exports = JwtException;