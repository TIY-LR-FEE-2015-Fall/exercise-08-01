# Contact Manager

This project will use Backbone to manage contacts stored on the `http://tiny-lr.herokuapp.com` server.

Each contact will have
* firstName
* lastName
* email
* twitter

Pages/Routes:

* List of contacts
  - [X] Get all users from the server (Model & Collection)
  - [X] Need a template for all users (View)
  - [X] Need a template for a single user (View)
  - [X] User should see a list of all contacts
* Create New Contact
  - [X] Need a contact to save (Model)
  - [X] Need a template for what the user sees (View)
    * Inputs for all fields
    * Submit Button
  - [X] Listen for when user submits form
  - [X] After save user should
    - [X] Be redirected to home page
    - [ ] See new model in list
* Detail view
  set
  - [X] Find the contact from server by its id (Model)
  - [X] Show the full details for a contact (View)
  - [ ] Show link to edit page (View)
* Edit contact

Collection URL: `http://tiny-lr.herokuapp.com/collections/contacts-exercise`

JS Files

* Models
  * Contact
* Collections
  * ContactList
* Views
  * DetailView
  * ListView
  * FormView
