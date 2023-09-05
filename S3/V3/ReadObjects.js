const { S3Client, CreateBucketCommand } = require("@aws-sdk/client-s3");

const client = new S3Client({
    region: 'us-east-1',
    endpoint: 'http://localhost:4566',
    forcePathStyle: true
    /* 
    credentials: {
        accessKeyId: 'test', 
        secretAccessKey: 'test'
    }
    */
});
const input = { // CreateBucketRequest
    ACL: "private" || "public-read" || "public-read-write" || "authenticated-read",
    Bucket: "STRING_VALUE", // required
    CreateBucketConfiguration: { // CreateBucketConfiguration
      LocationConstraint: "af-south-1" || "ap-east-1" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ca-central-1" || "cn-north-1" || "cn-northwest-1" || "EU" || "eu-central-1" || "eu-north-1" || "eu-south-1" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "me-south-1" || "sa-east-1" || "us-east-2" || "us-gov-east-1" || "us-gov-west-1" || "us-west-1" || "us-west-2" || "ap-south-2" || "eu-south-2",
    },
    GrantFullControl: "STRING_VALUE",
    GrantRead: "STRING_VALUE",
    GrantReadACP: "STRING_VALUE",
    GrantWrite: "STRING_VALUE",
    GrantWriteACP: "STRING_VALUE",
    ObjectLockEnabledForBucket: true || false,
    ObjectOwnership: "BucketOwnerPreferred" || "ObjectWriter" || "BucketOwnerEnforced",
};

const command = new CreateBucketCommand(input);
(async () => {
    const response = await client.send(command);
    console.log(response); 
})();