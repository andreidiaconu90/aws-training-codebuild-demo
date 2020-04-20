var stackOutput = require("../../build/stackCreationOutput.json");
const url = stackOutput.ServiceEndpoint;
const request = require("supertest")(url);

describe("/randomHello route", () => {
  it("GET /randomHello returns a message", () => {
    request
      .get("/randomHello")
      .expect(200)
      .then((response) => {
        expect(response).toBeDefined();
      });
  });
});

//TODO: add CodePipeline stage in pipeline for linting and unit/integration tests and deploy to staging
//TODO: passing deployed URL to the integration tests step
//TODO: add COdePipeline stage for deploying to staging manually!
//TODO: create roles for CodePipeline and CodeBuild with CloudFormation
