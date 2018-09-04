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

    //Bank Application

    fbankbutton:function () {
        element(objects.FBankButton).click();
        browser.sleep(3000);
        element(objects.FBankDropdown).click();
        element(objects.FBankDropdownname).click();
        //browser.sleep(3000);
        element(objects.FLoginButton).click();
        browser.sleep(3000);
    },


    fverifyname:function(){
        var x=element(objects.FNamecheck);
        expect(x.getText()).toContain("Harry Potter");

    },
    fdepositbutton:function (amount) {
        element(objects.Fdepositbutton).click();
        browser.sleep(3000);
        element(objects.Fdeposittext).sendKeys(amount);
        browser.sleep(3000);
        element(objects.Fdepositbutton1).click();
        browser.sleep(3000);

    },

    ftransactionbutton:function () {
        element(objects.FTransaction).click();
        browser.sleep(3000);
        expect(browser.getCurrentUrl()).toBe("http://www.way2automation.com/angularjs-protractor/banking/#/listTx");
        element(objects.FBackbutton).click();
        browser.sleep(3000);
        expect(browser.getCurrentUrl()).toBe("http://www.way2automation.com/angularjs-protractor/banking/#/account");

    },


    fwithdraw:function (withdrawvalue) {
        element(objects.Fwithdrawal).click();
        browser.sleep(3000);
        var totalamount=element(objects.FTotalamount);
        totalamount.getText().then(function(total){
            element(objects.FWithdrawaltext).sendKeys(withdrawvalue);
            browser.sleep(3000);
            element(objects.Fwithdrawbutton).click();
            browser.sleep(3000);
            var x=element(objects.FVErifywithdrawmsg);
            if(totalamount>=withdrawvalue)
            {
                expect(x.getText()).toBe("Transaction Failed. You can not withdraw amount more than the balance.");

            }
            else
            {
                expect(x.getText()).toBe("Transaction successful");
            }

            browser.sleep(3000);
        })
    },
       fBankmanagerlogin:function(){

        element(objects.FbankManagerlogin).click();
        //expect(browser.getCurrentUrl()).toBe("http://www.way2automation.com/angularjs-protractor/banking/#/manager");
       },

       faddcustomer:function (fname,lname,Postcode) {
        element(objects.FAddcustomer).click();
        expect(browser.getCurrentUrl()).toBe("http://www.way2automation.com/angularjs-protractor/banking/#/manager");
        browser.sleep(3000);
        element(objects.FfirstName).sendKeys(fname);
        browser.sleep(3000);
        element(objects.Flastname).sendKeys(lname);
        element(objects.Fpostcode).sendKeys(Postcode);
        browser.sleep(3000);
        element(objects.FAddingcustomerbutton).click();
        browser.sleep(3000);
    },

}
module.exports=variable;