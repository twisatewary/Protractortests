var googleLoginLocators={

    GOOGLE_USERNAME:by.id('identifierId'),
    GOOGLE_NEXTBUTTON:by.id('identifierNext'),
    GOOGLE_PASSWORD:by.css('[class="whsOnd zHQkBf"]'),
    GOOGLE_PASSWORDNEXT:by.id('passwordNext'),
    GOOGLE_COMPOSE:by.xpath("(.//div[@class='T-I J-J5-Ji T-I-KE L3'])[1]"),
    GOOGLE_TO:by.css('[name="to"]'),
    GOOGLE_SUBJECT:by.css('[name="subjectbox"]'),
    GOOGLE_BODY:by.xpath('/html[1]/body[1]/div[26]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[4]/table[1]/tbody[1]/tr[1]/td[2]/table[1]/tbody[1]/tr[1]/td[1]/div[1]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/div[2]/div[1]'),
    GOOGLE_SEND:by.className('T-I J-J5-Ji aoO T-I-atl L3'),
    //GOOGLE_OPENMAIL:by.className('zA yO'),
    GOOGLE_VIEWMESSAGE:by.id('link_vsm'),
    GOOGLE_VERIFYBODY:by.xpath("//div[contains(text(),'welcome')]"),
    GOOGLE_VERIFYPERSONALTEXT:by.xpath("/html[1]/body[1]/div[7]/div[3]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[1]/div[1]/div[5]/div[1]/div[1]/div[2]"),
    GOOGLE_VERIFYSOCIALTEXT:by.xpath("/html[1]/body[1]/div[7]/div[3]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[2]/div[1]/div[5]/div[1]/div[1]/div[2]"),
    GOOGLE_VERIFYPROMOTIONSTEXT:by.xpath("/html[1]/body[1]/div[7]/div[3]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[5]/div[1]/div[1]/div[2]"),
    GOOGLE_BACKBUTTON:by.xpath("/html[1]/body[1]/div[7]/div[3]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]"),
    GOOGLE_USERICON:by.className("gb_9a gbii"),
    GOOGLE_SIGNOUT:by.linkText("Sign out"),
    GOOGLE_PROFILEIDENTIFIER:by.id("profileIdentifier"),
    GOOGLE_CHOOSEANOTHERACC:by.xpath('(.//div[@class="vdE7Oc f3GIQ"])[2]'),

    
  }
  module.exports=googleLoginLocators; 