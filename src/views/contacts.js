export default Backbone.View.extend({
  tagName: 'ul',

  attributes: {
    class: 'all-contacts',
  },

  initialize() {
    this.render();

    this.listenTo(this.collection, 'sync', this.render);
  },

  render() {
    this.$el.html(this.template(this.collection));
  },

  template(collection) {
    var createListItem = (model) => {
      return `<li>${model.get('lastName')}, ${model.get('firstName')} - <a href="#${model.id}">Detail</a></li>`;
    };

    return collection.map(createListItem);
  },
});
