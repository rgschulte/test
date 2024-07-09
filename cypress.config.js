module.exports = {
  e2e: {
    chromeWebSecurity: false, //workaround to bypass saucelabs authorization bug
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      base_url: 'https://www.saucedemo.com/',
      username: 'standard_user',
      password: 'secret_sauce'
    }
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, cypress-qase-reporter',
    cypressMochawesomeReporterReporterOptions: {
      charts: false,
    },
    cypressQaseReporterReporterOptions: {
      debug: false,

      testops: {
        api: {
          token: '01dd1c3f18dbacd883d56c06db105ac0572a7f73f4eab841ec532e7fc6c71c51',
        },

        project: 'AT',
        uploadAttachments: true,

        run: {
          complete: true,
        },
      },

      framework: {
        cypress: {
          screenshotsFolder: 'cypress/screenshots',
        }
      }
    },
  },
  video: false,
};
