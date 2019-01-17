$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "LogIn Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 7492508833,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login with Invalid credential and warning alert appear",
  "description": "",
  "id": "login-feature;login-with-invalid-credential-and-warning-alert-appear",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User enter from home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user eneter username and password and then sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Wrong password alert display",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInSteps.user_enter_from_home_page()"
});
formatter.result({
  "duration": 2547612482,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.user_eneter_username_and_password_and_then_sign_in_button()"
});
formatter.result({
  "duration": 4351830796,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.wrong_password_alert_display()"
});
formatter.result({
  "duration": 53061178,
  "status": "passed"
});
formatter.after({
  "duration": 1275206933,
  "status": "passed"
});
});