var testlocators={


    FNAME: by.model("person.name"),
    FCLICK : by.id("continue_button"),
    FDropdown : by.model("animal"),
    FDropValue: by.css('[value="3"]'),
    FContinueclick : by.id("continue_button"),
    FRadiobutton: by.xpath("//*[@id=\"form-views\"]/div[1]/div[1]/label/input"),
    FNextclick: by.css('[class="btn btn-block btn-info"]'),
    FSubmitbutton: by.css('[class="btn btn-danger"]'),

     FChk1:by.model("data.root"),
     FChk2:by.xpath("(.//input[@ng-model='division.included'])[1]"),
     FChk3:by.xpath("(.//input[@ng-model='cat.included'])[1]"),
     FText:by.xpath("(.//h3[@class='ng-binding'])[2]"),
     FChk4:by.xpath("(.//input[@ng-model='cat.included'])[2]"),
     FChk5:by.xpath("(.//input[@ng-model='division.included'])[2]")





}
module.exports = testlocators;