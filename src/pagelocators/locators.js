var testlocators={


    FNAME: by.model("person.name"),
    FCLICK : by.id("continue_button"),
    FDropdown : by.model("animal"),
    FDropValue: by.css('[value="3"]'),
    FContinueclick : by.id("continue_button"),
    FCheckbox: by.xpath("//*[@id=\"form-views\"]/div[1]/div[1]/label/input"),
    FNextclick: by.css('[class="btn btn-block btn-info"]'),
    FSubmitbutton: by.css('[class="btn btn-danger"]'),






}
module.exports = testlocators;