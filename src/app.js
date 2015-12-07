import ContactRouter from './router';

export default function() {
  var router = new ContactRouter();

  Backbone.history.start();
}
