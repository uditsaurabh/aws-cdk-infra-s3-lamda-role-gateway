import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({});
export const handler = async (event) => {
  // TODO implement
  const bucketName = "bankbalancetestbucket";
  const key = "accountBalance.json";

  const command = new GetObjectCommand({
    Bucket: bucketName,
    Key: key,
  });

  const res = await client.send(command);

  const body = await res.Body.transformToString();
  console.log("the body is", body);
  const response = {
    statusCode: 200,
    body: body,
  };
  return response;
};
