package stepDefinitions;

import base.ApplicationPageBase;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import objects.LogInManual;
import objects.LogInPage;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import java.util.List;
import java.util.Map;

public class LogInPageSteps extends ApplicationPageBase {

    LogInPage  objOfLoginPage = PageFactory.initElements(driver,LogInPage.class);
    LogInManual objOfLogIn = PageFactory.initElements(driver,LogInManual.class);


    @Given("^Land on Login Page From home Page$")
    public void land_on_Login_Page_From_home_Page(){
        objOfLoginPage.getlogin();
    }

    @When("^Try multiple \"([^\"]*)\" and \"([^\"]*)\"$")
    public void try_multiple_and(String arg1, String arg2){

        objOfLoginPage.loginUsingFeatureFile(arg1,arg2);

    }

    @Then("^Invalid message appear$")
    public void invalid_message_appear(){

        Assert.assertTrue(objOfLoginPage.getErrorMeassage());

    }




    @Given("^Land on lOginPage from HomePage$")
    public void land_on_lOginPage_from_HomePage() {
        objOfLoginPage.getlogin();
    }

    @When("^read data from data table$")
    public void read_data_from_data_table(DataTable arg1) {

        List<Map<String,String>> table = arg1.asMaps(String.class,String.class);
        objOfLoginPage.loginUsingFeatureFile(table.get(0).get("username"),table.get(0).get("password"));
        objOfLoginPage.loginUsingFeatureFile(table.get(1).get("username"),table.get(1).get("password"));
        objOfLoginPage.loginUsingFeatureFile(table.get(2).get("username"),table.get(2).get("password"));



    }

    @Then("^Invalid alert box should appear$")
    public void invalid_alert_box_should_appear() throws InterruptedException {

        Assert.assertTrue(objOfLogIn.signInFailure());
    }






}
