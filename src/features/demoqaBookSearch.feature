@searchBooks
Feature: To Search Book on Demo Book QA Website

Scenario: as User, I can search book on website using scrolling
Given I open the Demo Book QA Website
When I am on Demo Book QA Homepage
When I search for a book with title 'Understanding ECMAScript' by scrolling down the page
Then I can found the book 'Understanding ECMAScript' on the page

Scenario: as User, I can search book on website by title using search feature
Given I open the Demo Book QA Website
When I am on Demo Book QA Homepage
When I search for a book with text 'Understanding ECMAScript' using search feature
Then I can found the book with title 'Understanding ECMAScript' author 'Nicholas C. Zakas' publisher 'No Starch Press' on the page

Scenario: as User, I can search book on website by author using search feature
Given I open the Demo Book QA Website
When I am on Demo Book QA Homepage
When I search for a book with text 'Addy Osmani' using search feature
Then I can found the book with title 'Learning JavaScript Design' author 'Addy Osmani' publisher 'O\'Reilly Media' on the page

Scenario: as User, I can search book on website by publisher using search feature
Given I open the Demo Book QA Website
When I am on Demo Book QA Homepage
When I search for a book with text 'No Starch Press' using search feature
Then I can found the book with title 'Eloquent JavaScript, Second' author 'Marijn Haverbeke' on the page

Scenario: as User, I can see total amount of books on website by publisher using search feature
Given I open the Demo Book QA Website
When I am on Demo Book QA Homepage
When I search for a book with text 'No Starch Press' using search feature
Then I should see exactly 2 books with publisher 'No Starch Press' on the page

Scenario: as User, I will not see other book author when I search book on website by publisher using search feature
Given I open the Demo Book QA Website
When I am on Demo Book QA Homepage
When I search for a book with text 'No Starch Press' using search feature
Then I will not see the book with publisher 'O\'Reilly Media' on the page