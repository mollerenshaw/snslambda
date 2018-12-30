// const aws = require('aws-sdk');

function processRecord(record) {
  const message = record.Sns.Message;
  const subject = record.Sns.Subject;
  console.log(`The SNS message about subject '${subject}' is "${message}".`);
  return Promise.resolve(record.Sns.Message);
}

// The entry point for the lambda.
function lambda(event) {
  console.log(`The lambda has fired, with ${event.Records.length} records!`);

  const promises = event.Records.map(record => processRecord(record));

  return promises;
}

module.exports = {
  lambda,
};
