@logoutUser
Feature: to Logout from Demo Book QA Website

Scenario: As QA, I can logout user profile
Given I am prepared login process on Demo Book QA Website
When I am on Demo Book QA Homepage #login
When I click login button on Demo Book QA Homepage
When I am on Demo Book QA Login Page
When I input username 'admin14' and password 'Test_1234@'
When I tap login button
Then I can redirect to Demo Book QA Profile Page as 'admin14'
When I click Log out button on Demo Book QA Profile Page
Then I am on Demo Book QA Login Page after logout
