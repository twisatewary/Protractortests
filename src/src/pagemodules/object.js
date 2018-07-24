var objects=require("../pagelocators/locators.js")

var variable={

    fname: function(name){

        element(objects.FNAME).sendKeys(name);
    },

    fclick: function() {

        element(objects.FCLICK).click();
        browser.sleep(3000);
    },

    fradiobutton: function(){
        element(objects.FRadiobutton).click();
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

    fchk1:function () {
        element(objects.FChk1).click();
        browser.sleep(3000);

    },
    fchk2:function () {
        element(objects.FChk2).click();
        browser.sleep(3000)
    },
    fchk3:function () {
        element(objects.FChk3).click();
        browser.sleep(3000);
    },
    fchk4:function () {
        element(objects.FChk4).click();
        browser.sleep(3000);
    },
    fchk5:function () {
        element(objects.FChk5).click();
        browser.sleep(3000);
    },

    ftext:function () {
        element(objects.FText);
        browser.sleep(3000);
    },


    fverify1:function(){
        var a= element(objects.FChk1);
        expect(a.isSelected()).toBe(true);
    },

    fverify2:function(){
        var b= element(objects.FChk2);
        expect(b.isSelected()).toBe(false);
    },
    fverify3:function(){
        var c= element(objects.FChk3);
        expect(c.isSelected()).toBe(true);
    },
    fverifytext:function () {
        var d= element(objects.FText);
        expect(d.getText()).toContain("Home Improvement");

    },


}
module.exports=variable;