export default Backbone.Model.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/contacts-exercise',
  idAttribute: '_id',

  defaults: {
    firstName: '',
    lastName: '',
    email: '',
    twitter: '',
  },
});
