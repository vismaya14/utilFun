const dns = require("dns");
require("dotenv").config();

/**
 * Utility function for resolving DNS SRV Records.
 */
class DNSLookup {

    /**
     * The below function helps in resolving host name for intranet service for SRV records.
     * @param {String} configKey
     */
    async resolve(configKey) {
        try {
            console.log(this.leadCode);
            const configVal = process.env[configKey];
            const address = await this.resolveSrv(configVal);
            return {
                'target': address['name'],
                'port': address['port']
            };
        } catch (error) {
            throw error;
        }
    }

    /**
     * This function helps in resolving http host name for intranet service for SRV records based.
     * @param {String} configKey 
     */
    async resolveHttp(configKey) {
        try {
			const srvHttpUrl = process.env[configKey];
			const regex = /^(http[s]?:\/\/([a-zA-Z0-9\.-]+))(\/.*)?$/;
			if(regex.test(srvHttpUrl)){
				const matches = regex.exec(srvHttpUrl);
				const domainName = matches[2];
				const path = matches[3] || '';
				const result = await this.resolve(domainName);
				return 'http://' + result.target + ':' + result.port + path;
			}
			return srvHttpUrl;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Async function for resolving srv record.
     * @param {String} hostName 
     */
    async resolveSrv(hostName) {
        return new Promise((resolve, reject) => {
            try {
                dns.resolveSrv(hostName, (err, addresses) => {
                    if (err) {
                        reject(err);
                    }
                    if (addresses && addresses.length > 0) {
                        resolve(addresses[0]);
                    }
                    throw new Error("Failed to resolve srv hostname " + hostName);
                });
            } catch (error) {
                reject(error);
            }
        });
    }
}

module.exports = DNSLookup;