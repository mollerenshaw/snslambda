const aws = require('aws-sdk');

function processRecord(record) {
  return Promise.resolve();
}

// The entry point for the lambda.
function lambda(event, context) {
  console.log(`The lambda has fired, with ${event.Records.length} records!`);

  const promises = event.Records.map(record => processRecord(record));

  return promises;
}

module.exports = {
  lambda,
};
