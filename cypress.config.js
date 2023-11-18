const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1900,
  viewportHeight: 1200,
  e2e: {
    setupNodeEvents(on, config) {
      {
     "reporter"; "mochawesome",
     "reporterOptions";
     {"reportDir"; "cypress/report/mochawesome-report",
     "overwrite"; true,
     "html"; true,
     "json"; false,
     "timestamp"; "mmddyyyy_HHMMss"

     }
      }
    },
  },
});
