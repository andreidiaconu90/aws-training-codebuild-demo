"use strict";
const localeService = require("./services/localeService");

module.exports.randomHello = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: localeService.getLocalGreeting(localeService.pickLocale()),
    }),
  };
};
