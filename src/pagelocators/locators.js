var testlocators={


    FNAME: by.model("person.name"),
    FCLICK : by.id("continue_button"),
    FDropdown : by.model("animal"),
    FDropValue: by.css('[value="3"]'),
    FContinueclick : by.id("continue_button"),
    FRadiobutton: by.xpath("//*[@id=\"form-views\"]/div[1]/div[1]/label/input"),
    FNextclick: by.css('[class="btn btn-block btn-info"]'),
    FSubmitbutton: by.css('[class="btn btn-danger"]'),

    //Checkboxes
     FChk1:by.model("data.root"),
     FChk2:by.xpath("(.//input[@ng-model='division.included'])[1]"),
     FChk3:by.xpath("(.//input[@ng-model='cat.included'])[1]"),
     FText:by.xpath("(.//h3[@class='ng-binding'])[2]"),
     FChk4:by.xpath("(.//input[@ng-model='cat.included'])[2]"),
     FChk5:by.xpath("(.//input[@ng-model='division.included'])[2]"),

    //bank login
    FHomeButton:by.buttonText("Home"),
    FBankButton:by.buttonText("Customer Login"),
    FBankDropdown:by.model("custId"),
    FBankDropdownname:by.css('[value="2"]'),
    FLoginButton:by.buttonText("Login"),
    FNamecheck:by.className("fontBig ng-binding"),
    FTransaction:by.buttonText("Transactions"),
    Fdepositbutton:by.buttonText("Deposit"),
    Fdeposittext:by.model("amount"),
    Fdepositbutton1:by.className("btn btn-default"),
    FBackbutton:by.buttonText("Back"),
    Fwithdrawal:by.buttonText("Withdrawl"),
    FWithdrawaltext:by.model("amount"),
    Fwithdrawbutton:by.buttonText("Withdraw"),
    FVErifywithdrawmsg:by.className("error ng-binding"),
    FTotalamount:by.xpath("(.//strong[@class='ng-binding'])[2]"),
    FbankManagerlogin:by.buttonText("Bank Manager Login"),
    FAddcustomer:by.buttonText("Add Customer"),
    FfirstName:by.model("fName"),
    Flastname:by.model("lName"),
    Fpostcode:by.model("postCd"),
    FAddingcustomerbutton:by.className("btn btn-default"),




}
module.exports = testlocators;