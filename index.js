const jwt = require("./JwtMiddleware");
const awsDNSLookup = require("./DNSLookup");
const jwt = require('./middleware/jwtMiddleware');

module.exports = {
    jwt: jwt.jwtMiddleware,
    awsDNSLookup: awsDNSLookup
};