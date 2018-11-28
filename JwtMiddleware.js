const jwt = require('jsonwebtoken');
const contextService = require('request-context');
const EmptyOrNullToken = require('./exceptions/emptyTokenException');
const InvalidTokenException = require('./exceptions/InvalidTokenException');

/**
 * This function will decode the JWT token.
 * 1. The token is read from req.headers.Authorization.
 * 2. If the recieved token is null or empty, throw exception.
 * 3. If the token starts wth `Bearer`, extract jwt token excluding `Bearer`.
 * 4. From the jwtToken, try to decode using `jsonwebtoken` package.
 * 5. From the decoded token, read the `client_principle_id` and store in the request-context with key `x-request-client-id` and call next() function2
 */
exports.jwtMiddleware = (request, response, next) => {
    try {
        if(!request.headers.authorization) {
            throw new EmptyOrNullToken('Bad request: The token is empty or null');
        }

        let authJwtToken = request.headers.authorization;
        if (authJwtToken.toLowerCase().indexOf('bearer') > -1) {
            authJwtToken = authJwtToken.replace(/bearer /i, '');
        }
        const decodedJwtTokenObj = jwt.decode(authJwtToken);
        if (decodedJwtTokenObj == null) {
            throw new InvalidTokenException('Bad Request: Invalid token');
        }
        const clientId = decodedJwtTokenObj.client_id;
        contextService.set('request:x-client-id', clientId);
        next();
    } catch (error) {
        throw error;
    }
};