import Model from '../models/contact';

export default Backbone.Collection.extend({
  url: 'http://tiny-lr.herokuapp.com/collections/contacts-exercise',

  model: Model,
});
