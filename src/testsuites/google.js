var google=require("../pagemodules/googleLogin.js");
var using = require('jasmine-data-provider');
var testData = require('../testData/dataDriven.json');
var googleLoginModule=require("../pagelocators/googleLoginLocator.js");


function arrayOfData() {
  return [
         {
           "username": "twisatewary@gmail.com",
           "password": "kajari@233"
         },

        {
         "username": "twisa0203@gmail.com",
         "password": "twisatewary@233"
         }
     ]
   
} 
using(arrayOfData, function (inputData) {
describe("gmailApplication",function(){

    beforeAll(function () {

        browser.waitForAngularEnabled(false);
        browser.get("https://mail.google.com");
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization=true;
        browser.sleep(3000);
});

   it("googleLogin",function(){
     console.log(inputData.username);
    if(inputData.username == "twisa0203@gmail.com"){
      element(googleLoginModule.GOOGLE_PROFILEIDENTIFIER).click();
      browser.sleep(3000);
      element(googleLoginModule.GOOGLE_CHOOSEANOTHERACC).click();
      browser.sleep(3000);
    }
     google.signIn(inputData.username,inputData.password);
     browser.sleep(5000);
        
});

   it("verifying texts",function(){
    google.verifyText();
});

   it("compose message",function(){
     google.compose(inputData.username,testData[0].subject,testData[0].body);
});

   it("sending Message",function(){
     google.sendMessage();
});

   it("opening sent mail",function(){
     google.openMail();
});

   it("backToInbox",function(){
     google.backButton();
});

   it("signout",function(){
     google.signout();
});  
});
});
