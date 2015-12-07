export default Backbone.View.extend({
  attributes: {
    class: 'contact-details',
  },

  initialize() {
    this.render();
  },

  render() {
    this.$el.html(this.template(this.model));
  },

  template(model) {
    return `
      <p>${model.get('firstName')}</p>
      <p>${model.get('lastName')}</p>
      <p>${model.get('email')}</p>
      <p>@${model.get('twitter')}</p>

      <p><a href="#">Back</a></p>
      <p><a href="#${model.id}/edit">Edit</a></p>
    `;
  },
});
