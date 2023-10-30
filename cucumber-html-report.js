const report = require('multiple-cucumber-html-reporter');
const date = new Date();
const Report_Time = (date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + '-' + date.getHours())

report.generate({
  jsonDir: 'cypress/reports/cucumber-json', // ** Path of .json file **//
  reportPath: 'cypress/reports/Results', // ** Path of .html file **//
  metadata: {

    browser: {
      name: 'Chrome',
      version: '10'
    },

    device: 'Virtual Machine',
    platform: {
      name: 'Linux'
    },

    displayReportTime: true,
    displayDuration: true,
    pageTitle: "Property Finder - Automation - Assignment"
  },

  customData: {
    title: 'Run info',
    data: [
      { label: 'Property Finder Assignment', value: 'PF Manager' },
      { label: 'Org Name', value: 'Property Finder' },
      { label: 'Execution Date', value: Report_Time },
    ]
  }

});
