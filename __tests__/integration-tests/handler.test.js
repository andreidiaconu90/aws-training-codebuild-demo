const url = "http://localhost:3000";
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
