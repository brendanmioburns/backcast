var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.videos = new Videos(); 
    this.videoPlayerView = new VideoPlayerView();
    this.searchView = new SearchView();
    this.videoListView = new VideoListView({collection: exampleVideoData});
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
