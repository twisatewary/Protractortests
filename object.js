var objects=require("./locators.js")

var variable={

    fname: function(name){

        element(objects.FNAME).sendKeys(name);
    },

    fclick: function() {

        element(objects.FCLICK).click();

    },




}
module.exports=variable;