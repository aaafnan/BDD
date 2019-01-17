@loginpage

  Feature: Multiple creditial check
    Scenario Outline: Check a list of creditials using username and password

      Given Land on Login Page From home Page
      When Try multiple "<username>" and "<password>"
      Then Invalid message appear
      Examples:
        | username          | password |
        | dassa@hotmail.com | 45678fgh |
        | adsafa@yahoo.com  | 456780   |
        | ghjkl@gmail.com   | 45678    |





    Scenario: reading data from data table
        Given Land on lOginPage from HomePage
        When  read data from data table
          | username          | password |
          | dassa@hotmail.com | 45678fgh |
          | adsafa@yahoo.com  | 456780   |
          | ghjkl@gmail.com   | 45678    |

        Then  Invalid alert box should appear