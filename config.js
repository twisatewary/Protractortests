exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['testscript.js'],
    directConnect:true,
   // multicapabilities: {
      //  browserName: 'internet explorer'
       // browserName: 'firefox'
  //  }

}