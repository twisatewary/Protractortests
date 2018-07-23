var objects=require("../pagelocators/locators.js")

var variable={

    fname: function(name){

        element(objects.FNAME).sendKeys(name);
    },

    fclick: function() {

        element(objects.FCLICK).click();
        browser.sleep(3000);
    },

    fcheckbox: function(){
        element(objects.FCheckbox).click();
        browser.sleep(3000);
    },

    fnextclick: function(){
        element(objects.FNextclick).click();
        browser.sleep(3000);
    },

    fsubmitbutton:function(){
        element(objects.FSubmitbutton).click();
        browser.sleep(3000);
    },



}
module.exports=variable;