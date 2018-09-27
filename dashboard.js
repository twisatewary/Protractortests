describe("dashboard",function(){
    beforeAll(function(){
         browser.get("http://www.way2automation.com/angularjs-protractor/multiform/#/form/interests");
    });
  it("title",function(){
     browser.getTitle().then(function (title) {
        expect(title).toEqual('Protractor practice website - Multiform');

     })


  })


})