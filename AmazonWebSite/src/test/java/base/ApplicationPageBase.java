package base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ApplicationPageBase{
    public static WebDriver driver = null;

    //Common method for inserting data into searchBox
    //making static method so we dont need to create object

    public static void searchProduct(WebElement webElementName, String productName){

        webElementName.sendKeys(productName);
    }

    public static void clickButton(WebElement webElementName, String nameOfEleement){
       beforeClickLog(nameOfEleement);
        webElementName.click();
        afterClicking(nameOfEleement);
    }

    public static String getText(WebElement webElementName){
        return webElementName.getText();

    }

    public static void beforeClickLog(String nameOfElement){

    }

    public static void afterClicking(String nameOfElement){

    }



    public static void testPassed(String nameOfElement){
        System.out.println("Confirming Passed :"+ nameOfElement);
    }

    public static Properties loadProperties() throws IOException {
        Properties prop = new Properties();
        File filepath = new File(System.getProperty("user.dir") +  "/src/test/resources/secret.properties");
        InputStream ism = new FileInputStream(filepath.getAbsoluteFile());
        prop.load(ism);
        ism.close();
        return prop;
    }


    public static String getText(WebElement webElement, String webElementName){

        String actualText =  webElement.getText();

        return actualText;
        /**
         * Added comment
         * This is from afnan
         * */

    }


    //for dataProvider method

    public static void sendKeys(WebElement webElement, String nameOfElement, String keys){

        webElement.clear();
        webElement.sendKeys(keys);
    }


    // test for reading different department name on amazon
    public static String getDepartmentName(WebElement webElement){

        String departmentName = webElement.getText();

        return departmentName;
    }


    public static void homePage(){
        driver.get("https://www.amazon.com");

    }
}
