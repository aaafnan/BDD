package stepDefinitions;

import base.ApplicationPageBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import objects.LogInManual;
import objects.NavigationBarLink;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class NavigationBarLinksSteps  extends ApplicationPageBase {

    NavigationBarLink objOfNavbar = PageFactory.initElements(driver,NavigationBarLink.class);
    LogInManual objOfLogIn = PageFactory.initElements(driver,LogInManual.class);

    @Given("^User has be in Home Page$")
    public void user_has_be_in_Home_Page() {
        homePage();

    }

    @When("^check the your amazon link is working$")
    public void check_the_your_amazon_link_is_working() {
        objOfNavbar.yourAmazon();
    }

    @Then("^user land on LogIN Page$")
    public void user_land_on_Your_Amazon_Page() {
        Assert.assertTrue(objOfLogIn.verifyLogin());

    }

    //Today's Deal

    @Given("^User has be in Amazon Home Page$")
    public void user_has_be_in_Amazon_Home_Page() {
       objOfNavbar.homePage();
    }

    @When("^check the Todays Deal link$")
    public void check_the_Todays_Deal_link() {
        objOfNavbar.todayDeal();
    }

    @Then("^user land on Today Deal Page$")
    public void user_land_on_Today_Deal_Page() {

       Assert.assertTrue(objOfNavbar.getVerifyTodayDeals().isDisplayed());
    }








}
