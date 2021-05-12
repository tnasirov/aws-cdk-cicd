
import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as AwsCdk from '../lib/aws-cdk-stack';
import '@aws-cdk/assert/jest';

test('Simpe App Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new AwsCdk.AwsCdkStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {
        "simpleAppBucketTuralE81910B4": {
          "Type": "AWS::S3::Bucket",
          "Properties": {
            "BucketEncryption": {
              "ServerSideEncryptionConfiguration": [
                {
                  "ServerSideEncryptionByDefault": {
                    "SSEAlgorithm": "AES256"
                  }
                }
              ]
            }
          },
          "UpdateReplacePolicy": "Retain",
          "DeletionPolicy": "Retain",
        },
      },
      "Outputs": {
        "simpleAppBucketTuralOutput": {
          "Value": {
            "Ref": "simpleAppBucketTuralE81910B4"
          },
          "Export": {
            "Name": "simpleAppBucketTural"
          }
        }
      },
    }, MatchStyle.EXACT))
});

test('Stack create a S3 bucket', () => {
  // ARRANGE
  const app = new cdk.App();
  // ACT
  const stack = new AwsCdk.AwsCdkStack(app, 'MyTestStack');
  // ASSERT
  expect(stack).toHaveResource('AWS::S3::Bucket');
});