var obj=require("./object.js");

describe("Intoduction to protractor",function() {
    it("dynmclyname", function () {
        browser.get("http://www.thetestroom.com/jswebapp/");
        browser.sleep(3000);
        obj.fname("twisa");
        obj.fclick();

    })
})
