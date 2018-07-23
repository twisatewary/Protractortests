
describe("Intoduction to protractor",function(){
    fit("opening a google page dropdown",function(){
        browser.get("https://www.protractortest.org/#/");
                browser.sleep(3000);
                element(by.id("drop1")).click();
                browser.sleep(3000);
                element(by.linkText("Tutorial")).click();
                browser.sleep(3000);
                expect(browser.get("https://www.protractortest.org/#/tutorial")).toEqual(browser.get("https://www.protractortest.org/#/tutorial"));
                browser.sleep(3000);


    })


    it("opening login",function(){
        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
        browser.sleep(3000);
        element(by.id("username")).sendKeys("angular");
        element(by.id("password")).sendKeys("password");
        element(by.model("model[options.key]")).sendKeys("xyz");
        element(by.css('[class="btn btn-danger"]')).click();
        browser.sleep(3000);

    })


 it("checkboxexample",function(){

     browser.get("http://www.way2automation.com/angularjs-protractor/multiform/#/form/interests");
    element(by.xpath("//*[@id=\"form-views\"]/div[1]/div[1]/label/input")).click();
    browser.sleep(3000);
    element(by.css('[class="btn btn-block btn-info"]')).click();
    browser.get("http://www.way2automation.com/angularjs-protractor/multiform/#/form/payment");
    browser.sleep(3000);



})

    })



