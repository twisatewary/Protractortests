var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['C:\\Users\\twisa.tewary\\Desktop\\test1\\src\\testsuites\\google.js'],
   // directConnect:true,
   // multicapabilities: {
      //  browserName: 'internet explorer'
       // browserName: 'firefox'
  //  }
  jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000
    },
    onPrepare: function() {
      var jasmineReporters = require('jasmine-reporters');
      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
          consolidateAll: true,
          savePath: './reports/xmlfiles/',
          filePrefix: 'xmloutput'
      }));
  },
 
  
    onPrepare: function() {
       jasmine.getEnv().addReporter(
         new Jasmine2HtmlReporter({
           savePath: './reports/htmlReports'
         })
       );
    }
 }
    

