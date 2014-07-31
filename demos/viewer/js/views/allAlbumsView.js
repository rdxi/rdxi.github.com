define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

    var AlbumContents = Backbone.View.extend({

      tagName: 'section',
      className: 'all-albums',

      events: {
        'click .album': 'changeAlbum'
      },

      initialize: function(options) {
        var self = this;

        this.currentAlbumModel = options.currentAlbumModel;
        this.albumCovers = [];
        this.preloader = $('<figure class="preloader"></figure>');


        // get album covers
        this.model.fetch({
          success: function() {
            self.model.get('albums').forEach(function(el, index, array) {
              self.albumCovers.push({image: el.images[0], title: el.title, text: el.text});
            });
            self.render();
          }
        });

        // if no albums are open - show albumCovers
        this.listenTo(this.currentAlbumModel, 'change', this.currentCheck);

      },

      render: function() {
        var self = this;

        // self.$el.append(this.preloader);
        this.preloader.appendTo('body');


        this.albumCovers.forEach(function(el, index, array) {
          self.$el.append('<div data-index="'+index+'" class="album" style="background-image: url('+el.image+');">' +
                            // '<img data-index="'+index+'" src="'+ el.image +'">' +
                            '<div class="text-wrap">' +
                              '<div class="title">'+el.title+'</div>' +
                              '<div class="text">'+el.text+'</div>' +
                            '</div>' +
                          '</div>');
        });

        this.parallaxStart();



        // preloader check
        var image = new Image();
        image.onload = function () {
          console.info('Image loaded !');
          self.hidePreloader();
        };

        image.onerror = function () {
          console.error('Cannot load image');
        };

        image.src = this.albumCovers[0].image;
        //

        return this;
      },

      changeAlbum: function(e) {
        var self = this;
        var newIndex = e.target.dataset.index;
        var newAlbum = this.model.get('albums')[newIndex].images;

        // this.$el.addClass('hiding');
        this.currentAlbumModel.set({'images': newAlbum});

        // // hide with opacity transition?
        // this.$el.on('webkitAnimationEnd animationend', function() {
        //   self.$el.hide().removeClass('hiding');
        // });

      },

      parallaxStart: function() {
        var self = this;

        var images = self.$el.find('.album');

        var curPosX = 0;
        var width = $(window).width();

        $('body').on('mousemove', function(e){
          curPosX = width - e.pageX*0.2;
          images.css({'background-position': curPosX+'px, 0'});
        });
      },

      parallaxStop: function() {
        this.$el.off('mousemove');
      },

      hide: function() {
        this.$el.hide();
      },

      show: function() {
        this.$el.show();
      },

      currentCheck: function() {
        var currentIsEmpty = this.currentAlbumModel.get('images').length === 0;

        if (currentIsEmpty) {
          this.show();
        } else {
          this.hide();
        }
      },

      hidePreloader: function() {
        var self = this;
        // ***REMOVE THIS*** emulating load
        setTimeout(function() {
          self.preloader.addClass('paused');
          self.preloader.fadeOut(300);
        }, 1000);
      }


    });

    return AlbumContents;
});