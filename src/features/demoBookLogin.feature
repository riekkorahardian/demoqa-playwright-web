@login
Feature: Login Feature on Demo Book QA Website Testing

Scenario: aAs QA, I can successfully login with valid user credential
Given I am prepared login process on Demo Book QA Website
When I am on Demo Book QA Homepage #login
When I click login button on Demo Book QA Homepage
When I am on Demo Book QA Login Page
When I input username 'admin14' and password 'Test_1234@'
When I tap login button
Then I can verify login success
Then I can redirect to Demo Book QA Profile Page as 'admin14'

Scenario: As QA, I can failed to login with invalid user credential
Given I am prepared login process on Demo Book QA Website
When I am on Demo Book QA Homepage #login
When I click login button on Demo Book QA Homepage
When I am on Demo Book QA Login Page
When I input username 'dummy' and password 'dummy1234'
When I tap login button
Then I can verify login success
Then I can see error message failed to login on Demo Book QA Login Page

