const { S3Client, CreateBucketCommand } = require("@aws-sdk/client-s3");

console.log(typeof(S3Client)); 
console.log(typeof(CreateBucketCommand));