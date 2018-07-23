var auto =require("../pagemodules/object.js");

describe("way to automation",function () {
    it("wtautomate",function(){

        browser.get("http://www.way2automation.com/angularjs-protractor/multiform/#/form/interests");
        browser.sleep(3000);
        auto.fcheckbox();
        auto.fnextclick();
        auto.fsubmitbutton();
        browser.switchTo().alert().accept();

    })

})