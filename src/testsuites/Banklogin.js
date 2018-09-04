var bank=require("../pagemodules/object.js")

describe("Bank Application",function () {
    it("bankmodule",function () {
        browser.ignoreSynchronization=true;
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        bank.fBankmanagerlogin();
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/manager");
        browser.sleep(3000);

        //bank.fverifyname();
      })
    it("addcustomer",function () {
        bank.faddcustomer("twisa","tewary",12456);

    })

    /*it("depositmoney",function () {
        bank.fdepositbutton(5000);
    })

    it("withdrawal",function () {
        bank.fwithdraw(500);

    })

    it("transactions",function () {
        bank.ftransactionbutton();
    })
    it("addcustomer",function () {
        bank.faddcustomer();

    })*/
})