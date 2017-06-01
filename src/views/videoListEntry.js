var VideoListEntryView = Backbone.View.extend({
  
  el: '.video',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

//   template: _.template(
//   `<li class="video-list-entry media">
//     <div class="media-left">
//       <img class="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" />
//     </div>
//     <div class="media-body">
//       <div class="video-list-entry-title"><%= Video Title %></div>
//       <div class="video-list-entry-detail"><%= Video Description %></div>
//     </div>
//   </li>`
// )
  template: templateURL('src/templates/videoListEntry.html')

});
