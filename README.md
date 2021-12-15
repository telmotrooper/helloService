# helloService

A serverless REST API to try and learn serverless computing concepts.

Technologies employed:
* Node.js
* Serverless Framework
* TypeScript
* Express.js
* ESLint

## Installing

You will need **Node.js version 14** to run this service (which is the latest version supported by [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-nodejs.html) since writing).

You will also need the Serverless Framework CLI, which you can get with:
```
sudo npm i -g serverless
```

With that out of the way, you only need to install the dependencies:
```
npm i
```

And finally, run the service offline:
```
npm start
```

You should now be able to access the service via http://localhost:3000/.
