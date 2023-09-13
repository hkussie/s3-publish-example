const { S3Client, GetBucketPolicyCommand } = require("@aws-sdk/client-s3");

const client = new S3Client({});

const main = async () => {
    const command = new GetBucketPolicyCommand({
      Bucket: "testing-bucket-cd2534f8",
    });
  
    try {
      const { Policy } = await client.send(command);
      console.log(JSON.parse(Policy));
    } catch (err) {
      console.error(err);
    }
};

console.log(main());