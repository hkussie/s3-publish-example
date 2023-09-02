const AWS = require('aws-sdk');

// Configure the AWS SDK to use the LocalStack endpoint and credentials
AWS.config.update({
  endpoint: 'http://localhost:4566', // LocalStack S3 endpoint
  accessKeyId: 'test',   // Placeholder access key
  secretAccessKey: 'test' // Placeholder secret key
});

// Create an S3 instance
const s3 = new AWS.S3();

// Specify your bucket name
const bucketName = 'my-local-bucket';

// List all objects in the S3 bucket
s3.listObjects({ Bucket: bucketName }, (err, data) => {
  if (err) {
    console.error('Error listing objects:', err);
  } else {
    console.log('Objects in the bucket:');
    data.Contents.forEach((object) => {
      console.log(`Key: ${object.Key}, Size: ${object.Size} bytes`);
    });
  }
});
