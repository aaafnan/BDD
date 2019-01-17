package stepDefinitions;

import base.ApplicationPageBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import objects.NavigationBarLink;
import objects.SearchBox;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class SearchBoxSteps extends ApplicationPageBase {

    SearchBox objOfSearchBox = PageFactory.initElements(driver,SearchBox.class);
    NavigationBarLink objOfnav = PageFactory.initElements(driver,NavigationBarLink.class);

    @Given("^user start from home Page$")
    public void user_start_from_home_Page() {
        homePage();

    }

    @When("^Search one item first$")
    public void search_one_item_first() {
        objOfSearchBox.searchTextBox("Mac Book");
    }

    @Then("^relevant search product appear$")
    public void relevant_search_product_appear() {
        Assert.assertTrue(objOfnav.getRegistry().isDisplayed());
    }


}
