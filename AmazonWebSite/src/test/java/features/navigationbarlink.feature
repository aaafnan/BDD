@navigationbarliks
  Feature:  Navigation Bar links

    Scenario: Click Your Amazon Links
      Given User has be in Home Page
      When check the your amazon link is working
      Then user land on LogIN Page


    Scenario: Click Today's Deals Links
      Given User has be in Amazon Home Page
      When check the Todays Deal link
      Then user land on Today Deal Page
