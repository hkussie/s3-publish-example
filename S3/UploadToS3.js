const AWS = require('aws-sdk');

AWS.config.update({
    endpoint: 'http://localhost:4566', // LocalStack S3 endpoint
    accessKeyId: 'test',   // Placeholder access key
    secretAccessKey: 'test' // Placeholder secret key
});

// Create an S3 instance
const s3 = new AWS.S3();

// Specify your bucket name and the name of the text file to upload
const bucketName = 'my-local-bucket';
const fileName = 'example.txt'; // Replace with your file name

// Define the content of the text file
const fileContent = 'Hello, LocalStack S3!';

// Configure the S3 parameters
const params = {
  Bucket: bucketName,
  Key: fileName,
  Body: fileContent
};

// Upload the file to S3
s3.upload(params, (err, data) => {
  if (err) {
    console.error('Error uploading file:', err);
  } else {
    console.log(`File uploaded successfully to ${data.Location}`);
  }
});