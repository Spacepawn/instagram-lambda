const { awscdk } = require("projen");
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: "2.1.0",
  defaultReleaseBranch: "main",
  maxNodeVersion: "18.99.99",
  minNodeVersion: "18.0.0",
  name: "instagram-lambda",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();