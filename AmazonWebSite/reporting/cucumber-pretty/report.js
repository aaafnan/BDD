$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginpage.feature");
formatter.feature({
  "line": 3,
  "name": "Multiple creditial check",
  "description": "",
  "id": "multiple-creditial-check",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@loginpage"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Check a list of creditials using username and password",
  "description": "",
  "id": "multiple-creditial-check;check-a-list-of-creditials-using-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Land on Login Page From home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Try multiple \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Invalid message appear",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "multiple-creditial-check;check-a-list-of-creditials-using-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "multiple-creditial-check;check-a-list-of-creditials-using-username-and-password;;1"
    },
    {
      "cells": [
        "dassa@hotmail.com",
        "45678fgh"
      ],
      "line": 11,
      "id": "multiple-creditial-check;check-a-list-of-creditials-using-username-and-password;;2"
    },
    {
      "cells": [
        "adsafa@yahoo.com",
        "456780"
      ],
      "line": 12,
      "id": "multiple-creditial-check;check-a-list-of-creditials-using-username-and-password;;3"
    },
    {
      "cells": [
        "ghjkl@gmail.com",
        "45678"
      ],
      "line": 13,
      "id": "multiple-creditial-check;check-a-list-of-creditials-using-username-and-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 19540997777,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Check a list of creditials using username and password",
  "description": "",
  "id": "multiple-creditial-check;check-a-list-of-creditials-using-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@loginpage"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Land on Login Page From home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Try multiple \"dassa@hotmail.com\" and \"45678fgh\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Invalid message appear",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInPageSteps.land_on_Login_Page_From_home_Page()"
});
formatter.result({
  "duration": 3188399236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dassa@hotmail.com",
      "offset": 14
    },
    {
      "val": "45678fgh",
      "offset": 38
    }
  ],
  "location": "LogInPageSteps.try_multiple_and(String,String)"
});
formatter.result({
  "duration": 2127294571,
  "status": "passed"
});
formatter.match({
  "location": "LogInPageSteps.invalid_message_appear()"
});
formatter.result({
  "duration": 67478204,
  "status": "passed"
});
formatter.after({
  "duration": 2658621225,
  "status": "passed"
});
formatter.before({
  "duration": 11086740646,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Check a list of creditials using username and password",
  "description": "",
  "id": "multiple-creditial-check;check-a-list-of-creditials-using-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@loginpage"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Land on Login Page From home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Try multiple \"adsafa@yahoo.com\" and \"456780\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Invalid message appear",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInPageSteps.land_on_Login_Page_From_home_Page()"
});
formatter.result({
  "duration": 4243528190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adsafa@yahoo.com",
      "offset": 14
    },
    {
      "val": "456780",
      "offset": 37
    }
  ],
  "location": "LogInPageSteps.try_multiple_and(String,String)"
});
formatter.result({
  "duration": 2213639759,
  "status": "passed"
});
formatter.match({
  "location": "LogInPageSteps.invalid_message_appear()"
});
formatter.result({
  "duration": 50739813,
  "status": "passed"
});
formatter.after({
  "duration": 1524664325,
  "status": "passed"
});
formatter.before({
  "duration": 13763985103,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Check a list of creditials using username and password",
  "description": "",
  "id": "multiple-creditial-check;check-a-list-of-creditials-using-username-and-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@loginpage"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Land on Login Page From home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Try multiple \"ghjkl@gmail.com\" and \"45678\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Invalid message appear",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInPageSteps.land_on_Login_Page_From_home_Page()"
});
formatter.result({
  "duration": 1929580559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ghjkl@gmail.com",
      "offset": 14
    },
    {
      "val": "45678",
      "offset": 36
    }
  ],
  "location": "LogInPageSteps.try_multiple_and(String,String)"
});
formatter.result({
  "duration": 2035516092,
  "status": "passed"
});
formatter.match({
  "location": "LogInPageSteps.invalid_message_appear()"
});
formatter.result({
  "duration": 63591582,
  "status": "passed"
});
formatter.after({
  "duration": 1753504103,
  "status": "passed"
});
formatter.before({
  "duration": 8647301113,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "reading data from data table",
  "description": "",
  "id": "multiple-creditial-check;reading-data-from-data-table",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "Land on lOginPage from HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "read data from data table",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22
    },
    {
      "cells": [
        "dassa@hotmail.com",
        "45678fgh"
      ],
      "line": 23
    },
    {
      "cells": [
        "adsafa@yahoo.com",
        "456780"
      ],
      "line": 24
    },
    {
      "cells": [
        "ghjkl@gmail.com",
        "45678"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Invalid alert box should appear",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInPageSteps.land_on_lOginPage_from_HomePage()"
});
formatter.result({
  "duration": 2236779342,
  "status": "passed"
});
formatter.match({
  "location": "LogInPageSteps.read_data_from_data_table(DataTable)"
});
formatter.result({
  "duration": 4213514525,
  "status": "passed"
});
formatter.match({
  "location": "LogInPageSteps.invalid_alert_box_should_appear()"
});
formatter.result({
  "duration": 144567085,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat stepDefinitions.LogInPageSteps.invalid_alert_box_should_appear(LogInPageSteps.java:64)\r\n\tat ✽.Then Invalid alert box should appear(loginpage.feature:27)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1948105815,
  "status": "passed"
});
});