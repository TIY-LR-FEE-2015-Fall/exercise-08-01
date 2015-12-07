export default Backbone.View.extend({
  tagName: 'form',

  attributes: {
    class: 'contact-form',
  },

  events: {
    submit(ev) {
      ev.preventDefault();

      // Get our input
      var firstName = this.$el.find('#firstName').val();
      var lastName = this.$el.find('#lastName').val();
      var email = this.$el.find('#email').val();
      var twitter = this.$el.find('#twitter').val();

      // Save our model
      this.model.save({firstName, lastName, email, twitter})
        .then(() => {
          // Adds new model to collection
          this.collection.add(this.model);

          // Go to the home page
          Backbone.history.navigate('', {trigger: true});
        });
    },
  },

  initialize() {
    this.render();
  },

  render() {
    this.$el.html(this.template(this.model));
  },

  template(model) {
    return `
      <input id="firstName" value="${model.get('firstName')}" placeholder="First Name">
      <input id="lastName" value="${model.get('lastName')}" placeholder="Last Name">
      <input id="email" value="${model.get('email')}" placeholder="Email">
      <input id="twitter" value="${model.get('twitter')}" placeholder="Twitter">

      <button>Submit</button>
    `;
  },
});
