define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

    var CurrentAlbumModel = Backbone.Model.extend({
      images: []
    });

    return CurrentAlbumModel;
});