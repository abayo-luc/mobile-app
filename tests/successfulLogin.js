var LoginPage = require('./dependencies/LoginPageObject.js');

var InputData = function(hostname, username, password)  {
    this.hostname = hostname;
    this.username = username;
    this.password = password;
}


describe('Verify Successful Login', function() {

  it('Check:', function() {

    // Open page
    browser.get('http://localhost:8100/#/login'); 
    browser.ignoreSynchronization = true;

    var test = new LoginPage();
    var dataFile = require('./dataForSuccessfulLogin.json')
    var data = new InputData(dataFile.hostname, dataFile.username, dataFile.password);
    var EC = protractor.ExpectedConditions;

    test.hostname.clear();
    test.user.clear();
    test.password.clear();

    test.hostname.sendKeys(data.hostname);
    test.user.sendKeys(data.username);
    test.password.sendKeys(data.password);
    //test.rememberButton.click();
    test.logbutton.click();

    var success = element(by.xpath("//div[@class='dashboard']//h4[contains(.,'Your available products')]"));
    browser.wait(EC.elementToBeClickable(success), 5000).then(function(){
        expect(success.isPresent()).toBe(true);
    });
    
    var menuButton = element(by.xpath("//ion-header-bar//button[contains(@class,'ion-navicon')]"));
    browser.wait(EC.visibilityOf(menuButton), 5000).then(function(){
       expect(menuButton.isPresent()).toBe(true);
    });
    //browser.sleep(800);
    browser.wait(EC.elementToBeClickable(menuButton), 5000).then(function(){
	   menuButton.click();
    });

    var logoutButton = element(by.xpath("//button[contains(@on-tap,'logout()')]"));
    browser.wait(EC.elementToBeClickable(logoutButton), 5000).then(function(){
        logoutButton.click();
    });

    var OKButton = element(by.xpath("//button[contains(.,'OK')]"));
    browser.wait(EC.elementToBeClickable(OKButton), 5000).then(function(){
        OKButton.click();
    });

    browser.wait(EC.visibilityOf(test.logbutton), 5000).then(function(){
        browser.sleep(1000);
        test.hostname.clear();
        test.user.clear();
        test.password.clear();
        //test.rememberButton.click();
    });

  });

});