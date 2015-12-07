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
  - [ ] User should see a list of all contacts
* Create New Contact
  - [ ] Need a contact to save (Model)
  - [ ] Need a template for what the user sees (VIew)
    * Inputs for all fields
    * Submit Button
  - [ ] Listen for when user submits form
* Edit contact
* Detail view

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
