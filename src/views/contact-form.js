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
          // Go to the home page
          Backbone.history.navigate('', {trigger: true});
        });
    },
  },

  initialize() {
    this.render();
  },

  render() {
    this.$el.html(this.template());
  },

  template() {
    return `
      <input id="firstName" placeholder="First Name">
      <input id="lastName" placeholder="Last Name">
      <input id="email" placeholder="Email">
      <input id="twitter" placeholder="Twitter">

      <button>Submit</button>
    `;
  },
});
