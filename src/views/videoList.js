var VideoListView = Backbone.View.extend({

  initialize() {
    this.render();
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(function(video) {
      new VideoListEntryView({
        model: video,
        el: this.$('.video-list')
      });
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
