import { defineConfig } from 'cypress';
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/plugin';

module.exports = defineConfig({
  allowCypressEnv: false,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 5000,
  requestTimeout: 5000,
  watchForFileChanges: false,
  viewportWidth: 1000,
  viewportHeight: 960,
  chromeWebSecurity: false,
  fixturesFolder: "cypress/fixtures",
  videoCompression: 32,
  video: false,
  trashAssetsBeforeRuns: true,
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports/separate-reports",
    overwrite: false,
    html: false,
    json: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      return getCompareSnapshotsPlugin(on, config);
    },
    testIsolation: false,
  },
});
