const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/report/mochawesome-report',
    overwrite: true,
    html: true,
    json: false,
    timestamp: 'mmddyyyy_HHMMss',
  },
  projectId: 'g67rzr',

  e2e: {
    baseUrl: 'https://apialurapic.herokuapp.com/user/login',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
