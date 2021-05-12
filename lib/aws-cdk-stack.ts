import { Bucket, BucketEncryption } from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export class AwsCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, 'simpleAppBucketTural', {
      encryption: BucketEncryption.S3_MANAGED,
    });
    new cdk.CfnOutput(this, 'simpleAppBucketTuralOutput', {
      value: bucket.bucketName,
      exportName: 'simpleAppBucketTural',
    });
  }
}
