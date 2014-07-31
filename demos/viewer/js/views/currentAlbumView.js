define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

    var CurrentAlbumView = Backbone.View.extend({

      tagName: 'section',
      className: 'current-album',

      initialize: function() {
        this.listenTo(this.model, 'change', this.render);
      },

      render: function() {
        var self = this;
        this.images = this.model.get('images');

        // on 'back to albums' click hide this el
        if (this.images.length < 1) {
          this.$el.hide();
          return;
        } else {
          this.$el.show();
        }


        self.$el.html('');
        this.images.forEach(function(el, index, array) {
          self.$el.append('<img src="'+ el +'">');
        });

        return this;

      },


    });

    return CurrentAlbumView;
});