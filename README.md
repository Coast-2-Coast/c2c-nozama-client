[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# c2c-nozami-client

## DESCRIPTION

An application that allows a current user to buy fruit from the Nozami e-commerce
online store.  It uses a custom Express API to create, read, update and delete
user orders.  This implementation supports multiple users one at a time but
only the current user's orders are displayed and are able to be updated and/or deleted.  This application is deployed online at the URL found below.

## FEATURES

1.  Single page application (SPA) using a custom back end API Express
    implementation written in JavaScript.

2.  Full user sign up, sign in, change password and sign out authentication
     with custom back end Express server.

3.  Complete user authentication error handling for user sign up, sign in,
     change password and sign out to promote user experience.

4.  Full support of orders API AJAX events with custom back end Express
     server that can create, read, update and delete orders data in
     a SQL database using custom GET, POST, PUT/PATCH, and DELETE RESTful
     requests.  All actions which change data are authenticated and the changed
     data is "owned" by the current user performing the change.

5.  Use of a Express ORM to create an orders database table structure and
     interact with the data.

6.  Use of jQuery and Handlebars templates for DOM manipulation and event
     handling.

7.  Use of Stripe 3rd party Checkout API for payment processing.

8. Bootstrap Modals, Drop-down menus and Navbar


# Front-End Client Application URL

https://github.com/Coast-2-Coast/c2c-nozama-client


## GitHub Application Repositories

-   [`Front-End Client`](https://github.com/Coast-2-Coast/c2c-nozama-client)
-   [`Back-End API`](https://github.com/Coast-2-Coast/c2c-nozama-api/)


## Heroku API URL

-   [`Heroku API URL`](https://protected-cliffs-21162.herokuapp.com/)

## Project Requirements

-   [`team-project`](https://github.com/ga-wdi-boston/team-project)


## Project Dependencies

-   [`browser-template`](https://github.com/ga-wdi-boston/browser-template)


## Installation

Start with `grunt serve`.

## List of Technologies Used

1.  HTML, CSS, JavaScript
2.  jQuery, SASS
3.  Bootstrap modals and drop-down menus
4.  Handlebars templates
5.  Express Model/Controller
6.  AJAX
7.  Mongoose
8.  MongoDB

## List of Servers Used

Front-end:
  GRUNT server (http://localhost:7165/)

Back-end EXPRESS server:
  [c2c-nozama-api]  (http://localhost:4741/)

## Dependencies

Install with `npm install`.

-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)

## Planning and Software Design - Development Process

The team first created a simple UI and turned our attention to the the backend to focus on building out the schema. There was a lot of back and forth on how many collections we would have and what would be contained in each. We struggled with the “flexibility” of a non-relational database and once we had one collection schema defined, we then moved to the front end to make progress on displaying our products. From there it was a parallel work track with some teammates working on the client side while another worked on the api side.

We worked in a blend of silos and pair/trio programming. For more challenging efforts the team would work as a group with one laptop projected and everyone working on the same task. This proved to be beneficial as it was a learning experience for all.

## Planning - Problem Solving Strategy

1.  Using Google Chrome Development Tools (Inspect).
2.  Add console.log messages to code.
3.  Add debugger and step through code examining variables and logic.
4.  Review WDI class notes and previous trainings, labs, and/or studies.
5.  Google issue (i.e. handlebars)
6.  Open issue in GitHub team-product repository.

## Coding Standards

1.  Used git source code control and GitHub repositories.
2.  Commented code to describe use of functions and variables as well as authorization and client/API logic.
3.  Used semantic naming for functions, variables and parameters.
4.  Used semantic naming for HTML tags, classes and IDs.
5.  Followed all linter suggestions including proper spacing and indentations.
6.  Frequent and small commits to git hub repository.
7.  Followed separation of concerns as often as possible.


## Links to ERD Used

http://i.imgur.com/ffIPYtA.jpg

## Links to Wireframes Used

http://i.imgur.com/XJEgvba.jpg
http://i.imgur.com/iiV0M5H.jpg


## User Stories Used

1.	Original client will show all available products before signing up or signing in.
2.	As a user, I want to sign up and create an account.
3.	As a user, I want to sign in so I can make orders.
4.	As a user, I want to be able to change my password.
5.	As a user, I want to be able to sign out of the application.
6.	As a user, I want to create an order selecting products with quantities for each
selected product.
7.	As a user, I want to only have one active order at a time.
8.	As a user, I want to view products so I can add to my order.
9.	As a user, I want to add additional items to a shopping cart before submitting order
for payment.
10.	As a user, I want to be able to update the quantity for an item in my shopping cart /order.
11.	As a user I want to be able to cancel my order, which clears out my shopping cart.
12.	As a user, I want to add credit card information so I can make a purchase.
13.	As a user, I want to view my orders so I can see my previous purchases.
14.	As a user, I want to remove a product from my shopping cart.
15.	As a user, I want to submit my order, which clears out the shopping cart.
16.	As a user, I want to be able to delete all items in my shopping cart.


## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
