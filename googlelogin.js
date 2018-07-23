describe("Intoduction to protractor",function(){

    it("googlelogin",function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://accounts.google.com/signin/v2/sl/pwd?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=AddSession&cid=0&navigationDirection=forward")
        browser.sleep(3000);
        element(by.id("identifierId")).sendKeys("twisa.tewary@zenq.com");
        element(by.id("identifierNext")).click();
        browser.sleep(3000);
        element(by.css('[class="whsOnd zHQkBf"]')).sendKeys("kajari@233");
        element(by.id("passwordNext")).click();
        browser.sleep(3000);

    })
})