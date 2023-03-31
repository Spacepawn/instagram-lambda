const { awscdk } = require("projen");
const { Stability } = require('projen/lib/cdk');
const { UpgradeDependenciesSchedule } = require('projen/lib/javascript');

const project = new awscdk.AwsCdkTypeScriptApp({
  authorName: "Spacepawn",
  cdkVersion: "2.71.0",
  defaultReleaseBranch: "main",
  depsUpgradeOptions: {
    workflowOptions: {
      schedule: UpgradeDependenciesSchedule.WEEKLY,
    },
  },
  description: "Instagrams clone build with AWS CDK, AWS Lambda, and AWS DynamoDB",
  license: "MIT",
  maxNodeVersion: "18.99.99",
  minNodeVersion: "18.15.0",
  name: "instagram-lambda",
  repositoryUrl: "https://github.com/Spacepawn/instagram-lambda.git",
  //stability: Stability.STABLE,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();