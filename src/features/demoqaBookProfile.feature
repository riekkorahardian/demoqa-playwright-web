@profileUser
Feature: To test demoqa bookstore profile page

Scenario: As QA, I can add books to user profile and see book detail
Given I am prepared login process on Demo Book QA Website
When I am on Demo Book QA Homepage #login
When I click login button on Demo Book QA Homepage
When I am on Demo Book QA Login Page
When I input username 'admin14' and password 'Test_1234@'
When I tap login button
Then I can redirect to Demo Book QA Profile Page as 'admin14'
When I am on Demo Book QA Homepage #login
When I search for a book with text 'Understanding ECMAScript' using search feature
Then I can found the book with title 'Understanding ECMAScript' author 'Nicholas C. Zakas' publisher 'No Starch Press' on the page
When I click book with title 'Understanding ECMAScript'
Then I can see book detail with title 'Understanding ECMAScript' author 'Nicholas C. Zakas' publisher 'No Starch Press' on Demo Book QA Book Detail Page

@profileUser02
Scenario: As QA, I can delete books from user profile
Given I am prepared login process directly to login page
When I am on Demo Book QA Login Page
When I input username 'admin14' and password 'Test_1234@'
When I tap login button
Then I can redirect to Demo Book QA Profile Page as 'admin14'
When I click delete all boooks button on Demo Book QA Profile Page
Then I should see no books in user profile on Demo Book QA Profile Page

