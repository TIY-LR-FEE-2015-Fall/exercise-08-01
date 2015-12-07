export default Backbone.Model.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/contacts-exercise',

  defaults: {
    firstName: '',
    lastName: '',
    email: '',
    twitter: '',
  },
});
