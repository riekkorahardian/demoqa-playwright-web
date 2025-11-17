@registerUser
Feature: To Register on Demo Book QA Website

Scenario: As QA, I can check register without captcha verification
Given I am prepared register process on Demo Book QA Website
When I am on Demo Book QA Homepage #register
When I click login button on Demo Book QA Homepage #register
When I am on Demo Book QA Login Page #register
When I click on new user button
When I am on Demo Book QA Register Page
When I input first name 'Riekko'
When I input last name 'Rahardian'
When I input username 'riekko123'
When I input password 'test'
When I tap register button
Then I can see error message 'Please verify reCaptcha to' on Demo Book QA Register Page
