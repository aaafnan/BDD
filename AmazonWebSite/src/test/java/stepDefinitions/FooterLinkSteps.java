package stepDefinitions;

import base.ApplicationPageBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import objects.FooterTopLinks;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class FooterLinkSteps extends ApplicationPageBase {

    FooterTopLinks objOfFooterLinK = PageFactory.initElements(driver,FooterTopLinks.class);

    @Given("^Check From Home Page$")
    public void check_From_Home_Page() {
        homePage();

    }

    @When("^Click on Let me Help You$")
    public void click_on_Let_me_Help_You() {
        objOfFooterLinK.letUsHelpYou();
    }

    @Then("^Land on help you Page$")
    public void land_on_help_you_Page() {
        Assert.assertTrue(objOfFooterLinK.getLetUsHelpYou().isDisplayed());
    }

    @Given("^Click on Let me help you on Home page$")
    public void click_on_Let_me_help_you_on_Home_page() {
        homePage();

    }

    @When("^Check for Language Tab$")
    public void check_for_Language_Tab() throws InterruptedException {
        objOfFooterLinK.laguageTab();
    }

    @Then("^verify Language Tab is Working$")
    public void verify_Language_Tab_is_Working() {

    }

}
