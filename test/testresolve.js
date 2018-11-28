let assert = require("assert");
const sinon = require("sinon");
const DNSLookup = require('../DNSLookup');
const JwtMiddleware = require('./../JwtMiddleware');

// describe("This is DNS Lookup", () => {

//     let dnsLookup = new DNSLookup();
//     const mockVal = { name: '192.67.12.3', port: 80 };
//     sinon.stub(DNSLookup.prototype, 'resolveSrv').callsFake(() => mockVal);

//     it("resolve must return the expected value", async () => {
//         let result = await dnsLookup.resolve('TEST_DOMAIN');
//         assert.equal(mockVal.name, result.target, "Error resolving host");
//     });

//     it("It will return the url", async () => {
//         let result = await dnsLookup.resolveHttp('TEST_HTTP_DOMAIN');
//         assert.equal('http://' + mockVal.name + ':' + mockVal.port + '/path', result, "Error resolving host");
//     });
// });


describe("This is JWT Test case", () => {

    it("It will return the url", async () => {
        let result = await JwtMiddleware.jwtMiddleware(
            {
                "jwtToken": 'eyJraWQiOiJJSmFJRHJjeTNSRE1oK2RPUmxvb0gyU3VTTXZFQ3JYdktzeE9pcFRMT3BZPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1bmEyNnJ0dTFoNnJhN3ZoYWdvNmwzdm01ZSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoibGVhZFwvdXBkYXRlIGxvYW5hcHBsaWNhdGlvblwvZGlzYnVyc2UucmVhZCBsZWFkXC9yZWFkIGxlYWRcL2NyZWF0ZSIsImF1dGhfdGltZSI6MTU0MjExMzUwNSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9XejdJNlEyVU4iLCJleHAiOjE1NDIxMTcxMDUsImlhdCI6MTU0MjExMzUwNSwidmVyc2lvbiI6MiwianRpIjoiZTU0ZjQxMzUtY2UwMi00YTBhLWI2M2UtZDQ4MmMwNDBlOTYxIiwiY2xpZW50X2lkIjoiNW5hMjZydHUxaDZyYTd2aGFnbzZsM3ZtNWUifQ.Shm9wwz7IPgVrVY9jBY67qB9oGYOgfu4b3q_kgavvV-D2vRyQfvR7V6NYteJiBBAJZoWMwDRsK5wn-HllI02tw4hX8UgqkqXGJ8GpCgyLvu7wjbZZ-4HOTWM3MzaScpj40tRn1spE8oQ4C3ykmiADVqS4aXjFrWohxDrcQeioox6Voxbeb2Fp79VJkHB4XgYuUXa-62F2RNpNCq5DAMRdK_6wUxop6XN1h0ox8rJgkb_AJvisq4XVFNvEANy7C56bO_fcoCNUPLMpv0Ri1SBwSLMJGiDbH-VduRFPqwO-Tw4u8zDYK8-nVar43AMY8BkpP0ZjZuPj7wTL5fdIMzFCw'
            });
    });
});