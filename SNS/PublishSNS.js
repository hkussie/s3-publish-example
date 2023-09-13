import { PublishCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./SNSClient.js";

export const publish = async (
    message = "Hello from Programmatic SNS!",
    topicArn = "arn:aws:sns:us-east-1:757560726728:CloudNotesEvents"
  ) => {
    const response = await snsClient.send(
      new PublishCommand({
        Message: message,
        TopicArn: topicArn,
      })
    );
    console.log(response);
    // {
    //   '$metadata': {
    //     httpStatusCode: 200,
    //     requestId: 'e7f77526-e295-5325-9ee4-281a43ad1f05',
    //     extendedRequestId: undefined,
    //     cfId: undefined,
    //     attempts: 1,
    //     totalRetryDelay: 0
    //   },
    //   MessageId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    // }
    return response;
};

const response = await publish();
response; 