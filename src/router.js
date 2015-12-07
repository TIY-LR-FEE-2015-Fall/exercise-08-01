import Contact from './models/contact';
import ContactCollection from './collections/contact-list';
import ContactView from './views/contacts';
import ContactForm from './views/contact-form';

var Router = Backbone.Router.extend({
  routes: {
    '': 'contactsAll',
    new: 'contactsNew',
    ':id/edit': 'contactsEdit',
    ':id': 'contactsDetail',
  },

  initialize() {

  },

  contactsAll() {
    // Created a collection
    var allContacts = new ContactCollection();

    // Fetched from the server
    allContacts.fetch();

    var listView = new ContactView();

    $('#outlet').html(listView.el);
  },

  contactsNew() {
    // Create a blank contact
    var contact = new Contact();

    // Create a form and send it our blank contact
    var form = new ContactForm({model: contact});

    // Show the form in our outlet
    $('#outlet').html(form.el);
  },
});

export default Router;
