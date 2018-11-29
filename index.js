const jwt = require("./JwtMiddleware");
const awsDNSLookup = require("./DNSLookup");

module.exports = {
    jwt: jwt.jwtMiddleware,
    awsDNSLookup: awsDNSLookup
};