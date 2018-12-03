# Util-fun

Util-fun consist of two functions that is DNSLookup and JWTtoken which is used in AWS.

Intent:

## DNSLookUp:
#### DNS is the database responsible for storing every information pretaining to IP address and domain name online. DNSLookup Util will help to resolve the hostname to local SRV record which contains intranet domain name and port.The function will help in resolving the IP address and host that is being hosted in the SRV record.


#### 1. The DNSLookup helps in resolvig the IP address and port.
#### 2. DNS helps in intranet communication between the established applications.
#### 3. DNSLookup will help in maintaining same amount of traffic flow between all the connections.

## Middleware

#### Middleware helps in decoding the received token which is in JWT form. The decoded token is being send back to the client so as to login securly. 

#### 1. After logging in via cognito a JWT token is sent back to the client and that token is used for verifying as well as for authenticating by middleware.
#### 2. The middleware helps in decoding the JWT token that is being received.
#### 3. Based on authenticity of the token the middleware will return the decoded data.

# Install
Installation is done by using using npm install command.
You need to install it by:

```
npm install util-fun
```

# Usage

```
const util-fun = require('util-fun');

# Follow this format for proper execution.
app.use(contextService.middleware('request'));
app.use(jwt.jwtMiddleware);
```
