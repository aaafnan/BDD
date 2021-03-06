package objects;

import base.ApplicationPageBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class LogInPage extends ApplicationPageBase {
    @FindBy(xpath = "//*[@id='nav-link-accountList']/span")
    private WebElement signIn;

    @FindBy(xpath = "//*[@tabindex='1']")
    WebElement emailBox;

    @FindBy(id="ap_password")
    private WebElement passwordBox;

    @FindBy(xpath="//*[@id='signInSubmit']")
    private WebElement signInButton;

    @FindBy(className = "a-alert-heading")
    private WebElement siginFailureAlert;


    @FindBy(id = "auth-captcha-guess")
    private WebElement capchafail;

    public LogInPage getlogin(){

        clickButton(signIn,"From Home Page");

        return new LogInPage();
    }


    public LogInPage login(String  email, String password){
        //getlogin();
        sendKeys(emailBox, "email Adress", email);
        sendKeys(passwordBox, "password", password);
        if(siginFailureAlert.isDisplayed()) {
            sendKeys(capchafail,"Enter capcha values","5432222");
            clickButton(signInButton, "click sign In Buton");
            }
        else{
            clickButton(signInButton, "click sign In Buton");
            }
        return new LogInPage();
    }

    // using below method for assertion with assertTrue
    public boolean getErrorMeassage(){
        boolean displayed =siginFailureAlert.isDisplayed();
        testPassed("signinFailure is displayed");
        return displayed;
    }


    //for cumcumberframeWrok Login Method

    public void loginUsingFeatureFile(String username, String password){

        emailBox.clear();
        emailBox.sendKeys(username);
        passwordBox.clear();
        passwordBox.sendKeys(password);
        signInButton.click();
//        return new LogInPage();
    }




}
