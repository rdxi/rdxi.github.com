define([
  'jquery',
  'underscore',
  'backbone',
  'views/allAlbumsView',
  'models/allAlbumsModel',
  'models/currentAlbumModel',
  'views/currentAlbumView',
  'views/toolbarView'
  ], function($, _, Backbone, AllAlbumsView, AllAlbumsModel, CurrentAlbumModel, CurrentAlbumView, ToolbarView) {

    var AppBody = Backbone.View.extend({
      el: 'body',
      initialize: function() {
        // current album
        var currentAlbumModel = new CurrentAlbumModel();
        var currentAlbumView = new CurrentAlbumView({model: currentAlbumModel});
        currentAlbumView.$el.appendTo(this.el);

        // all albums
        var allAlbumsModel = new AllAlbumsModel();
        var allAlbumsView = new AllAlbumsView({
          model: allAlbumsModel,
          currentAlbumModel: currentAlbumModel
        });
        allAlbumsView.$el.appendTo(this.el);
        // allAlbumsView.render().$el.appendTo(this.el);


        var toolbar = new ToolbarView({currentAlbumModel: currentAlbumModel});
        toolbar.$el.prependTo(this.el);

      }
    });

    return AppBody;
});