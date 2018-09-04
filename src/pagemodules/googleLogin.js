var googleLoginModule=require("../pagelocators/googleLoginLocator.js");
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';
log4js.configure({
    appenders: { signindetails: { type: 'file', filename: 'logfile.log' } },
    categories: { default: { appenders: ['signindetails'], level: 'info' } },
});


var googleModule={
signIn:function(username,password){

    element(googleLoginModule.GOOGLE_USERNAME).sendKeys(username);
    browser.sleep(3000);
    element(googleLoginModule.GOOGLE_NEXTBUTTON).click();
    browser.sleep(3000);
    element(googleLoginModule.GOOGLE_PASSWORD).sendKeys(password);
    browser.sleep(5000);
    element(googleLoginModule.GOOGLE_PASSWORDNEXT).click();
    browser.sleep(3000);
    logger.info("SIGNIN Completed");
},

compose:function(mailId,subject,bodyText){
    expect(browser.getCurrentUrl()).toContain('https://mail.google.com/mail/u/0/#inbox');
    var composeText= element(googleLoginModule.GOOGLE_COMPOSE);
    expect(composeText.getText()).toEqual('Compose');
    composeText.getText().then(function(composeText){
        console.log(composeText);
    })
    logger.info("verified text compose");
    element(googleLoginModule.GOOGLE_COMPOSE).click();
    browser.sleep(2000);
    element(googleLoginModule.GOOGLE_TO).sendKeys(mailId);
    browser.sleep(2000);
    element(googleLoginModule.GOOGLE_SUBJECT).sendKeys(subject);
    browser.sleep(3000);
    element(googleLoginModule.GOOGLE_BODY).sendKeys(bodyText);
    browser.sleep(3000);
    logger.info("message composed succesfully");
  },

  sendMessage:function(){
    element(googleLoginModule.GOOGLE_SEND).click();
    browser.sleep(3000);
    logger.info("message sent succesfully");
  },

openMail:function(){
    element(googleLoginModule.GOOGLE_VIEWMESSAGE).click();
    browser.sleep(3000);
    logger.info("viewing message");
   var text= element(googleLoginModule.GOOGLE_VERIFYBODY);  
   expect(text.getText()).toEqual('welcome');   
     text.getText().then(function (text) {
        console.log(text);
    logger.info("Verified body");
    });
 },

 verifyText:function(){
     var primaryText=element(googleLoginModule.GOOGLE_VERIFYPERSONALTEXT);
     expect(primaryText.getText()).toEqual('Primary');
     primaryText.getText().then(function(primary){
         console.log(primary);
     });
    var SocialText=element(googleLoginModule.GOOGLE_VERIFYSOCIALTEXT);
     expect(SocialText.getText()).toEqual('Social');
     SocialText.getText().then(function(social){
         console.log(social);
     });
   var promotionsText=element(googleLoginModule.GOOGLE_VERIFYPROMOTIONSTEXT);
     expect(promotionsText.getText()).toEqual('Promotions');
     promotionsText.getText().then(function(promotions){
         console.log(promotions);

     });

     },
    
     backButton:function(){
         element(googleLoginModule.GOOGLE_BACKBUTTON).click();
     },

     signout:function(){
         element(googleLoginModule.GOOGLE_USERICON).click();
         browser.sleep(3000);
         element(googleLoginModule.GOOGLE_SIGNOUT).click();
         browser.sleep(3000);
         logger.info("SIGNOUT Completed");
        /* element(googleLoginModule.GOOGLE_PROFILEIDENTIFIER).click();
         browser.sleep(3000);
         element(googleLoginModule.GOOGLE_CHOOSEANOTHERACC).click();
         browser.sleep(3000);*/
     }

 }

module.exports=googleModule;