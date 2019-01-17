package stepDefinitions;

import base.ApplicationPageBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import objects.LogInManual;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class LogInSteps extends ApplicationPageBase {

    LogInManual objOfLogIn = PageFactory.initElements(driver,LogInManual.class);

    @Given("^User enter from home page$")
    public void user_enter_from_home_page()  {

        homePage();

    }

    @When("^user eneter username and password and then sign in button$")
    public void user_eneter_username_and_password_and_then_sign_in_button()  {

        objOfLogIn.signInComplete("afnan@ghjk.com ","Pakistan");

    }

    @Then("^Wrong password alert display$")
    public void wrong_password_alert_display()  {
        Assert.assertTrue(objOfLogIn.signInFailure());

    }





}
