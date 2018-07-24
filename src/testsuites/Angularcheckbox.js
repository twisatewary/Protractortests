var check =require("../pagemodules/object.js");

describe("AngularCheckboxes",function () {
    it("checkboxes",function () {

        browser.get("http://www.way2automation.com/angularjs-protractor/checkboxes/");
        check.fchk1();
        check.fverify1();
        check.fchk2();
        check.fverify2();
        check.fchk3();
        check.fverify3();
        check.ftext();
        check.fverifytext();
        check.fchk4();
        check.fchk5();


    })

})