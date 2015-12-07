import Contact from './models/contact';
import ContactCollection from './collections/contact-list';
import ContactsAllView from './views/contacts';
import ContactForm from './views/contact-form';
import DetailView from './views/contact-details';

var Router = Backbone.Router.extend({
  routes: {
    '': 'contactsAll',
    new: 'contactsNew',
    ':id': 'contactsDetail',
    ':id/edit': 'contactsEdit',
  },

  initialize() {
    // Created a collection
    this.contacts = new ContactCollection();

    // Fetched from the server
    this.contacts.fetch();
  },

  contactsAll() {
    var listView = new ContactsAllView({collection: this.contacts});

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

  contactsDetail(id) {
    var showEditForm = () => {
      // Grab a contact by its id from the collection
      var contact = this.contacts.get(id);

      // Only create view if contact is found
      if (contact) {
        // Create detailView
        var detailView = new DetailView({model: contact});

        // Put detailView into outlet
        $('#outlet').html(detailView.el);
      }
    };

    // Try to show edit form immediately
    showEditForm();

    // Try to show edit form on collection sync
    this.contacts.on('sync', showEditForm);
  },

  contactsEdit(id) {
    var showEditForm = () => {
      // Grab a contact by its id from the collection
      var contact = this.contacts.get(id);

      // Only create view if contact is found
      if (contact) {
        // Create detailView
        var detailView = new ContactForm({model: contact});

        // Put detailView into outlet
        $('#outlet').html(detailView.el);
      }
    };

    // Try to show edit form immediately
    showEditForm();

    // Try to show edit form on collection sync
    this.contacts.on('sync', showEditForm);
  },
});

export default Router;
