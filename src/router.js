import ContactCollection from './collections/contact-list';
import ContactView from './views/contacts';

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
});

export default Router;
