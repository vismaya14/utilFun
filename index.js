const jwt = require("./JwtMiddleware");
const DNSLookup = require("./DNSLookup");
const dnsLookup = new DNSLookup();

module.exports = {
    jwt: jwt.jwtMiddleware,
    resolveHttp: dnsLookup.resolveHttp,
    resolveSrv: dnsLookup.resolveSrv
};