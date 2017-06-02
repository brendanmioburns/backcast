var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.videos = new Videos(); 
  },

  render: function() {
    this.$el.html(this.template());

    new VideoPlayerView({
      collection: this.videos,
      el: this.$('.player')
    }).render();

    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();

    new VideoListView({
      collection: exampleVideoData,
      el: this.$('.list')
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
