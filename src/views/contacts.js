export default Backbone.View.extend({
  tagName: 'ul',

  attributes: {
    class: 'all-contacts',
  },

  initialize() {
    this.render();
  },

  render() {
    this.$el.html(this.template(this.collection));
  },

  template(collection) {
    return `
      <li>Last, First</li>
    `;
  },
});
