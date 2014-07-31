define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

    var ToolbarView = Backbone.View.extend({

      tagName: 'section',
      className: 'toolbar',

      events: {
        'click .back': 'backToAlbums',
        'click .fullscreen': 'toggleFullscreen'
      },

      template: '<button class="back octicon octicon-arrow-small-left"></button>'+
                // '<span class="text">Hulu tribe</span>'+
                // '<button class="back">back</button>' +
                // '<button class="fullscreen">fullscreen</button>' +
                '<button class="fullscreen octicon octicon-screen-full"></button>'+
                '<button class="menu octicon octicon-three-bars"></button>',

      initialize: function(options) {
        this.currentAlbumModel = options.currentAlbumModel;
        this.$el.html(this.template);
      },

      render: function() {
        // this.$el.html( this.template(this.model.toJSON()) );
        return this;
      },

      backToAlbums: function() {
        // clear current album
        this.currentAlbumModel.set({'images': []});
      },

      toggleFullscreen: function(e) {

        // var el = $('body')[0];
        var isFullscreen = document.webkitFullscreenElement;
        var el = $('html')[0];
        var button = $(e.target);


        //
        if (isFullscreen) {
          document.webkitExitFullscreen();
          button.removeClass('octicon-screen-normal on');
        } else {
          el.webkitRequestFullscreen();
          button.addClass('octicon-screen-normal on');
          // document.documentElement.requestFullscreen();
        }

        // $('body')[0].requestFullscreen();

        // // are we fullscreen?
        // document.fullscreenElement ||
        // document.webkitFullscreenElement ||
        // document.mozFullScreenElement ||
        // document.msFullscreenElement


        // // bigger
        // if (document.fullscreenEnabled ||
        //   document.webkitFullscreenEnabled ||
        //   document.msFullscreenEnabled ||
        //   document.mozFullScreenEnabled) {

        //   var imgs = document.getElementsByTagName("figure");




          // for (var i = 0; i < imgs.length; i++) {
          //       imgs[i].addEventListener("click", function (event) {
          //       if (!document.fullscreenElement &&
          //           !document.webkitFullscreenElement &&
          //           !document.msFullscreenElement &&
          //           !document.mozFullScreenElement) {
          //             if (this.requestFullscreen) {
          //                 this.requestFullscreen();
          //             } else if (this.webkitRequestFullscreen) {
          //               this.webkitRequestFullscreen();
          //             } else if (this.msRequestFullscreen) {
          //               this.msRequestFullscreen();
          //             } else if (this.mozRequestFullScreen) {
          //               this.mozRequestFullScreen();
          //             }
          //         } else {
          //           if (document.exitFullscreen) {
          //             document.exitFullscreen();
          //           } else if (document.webkitExitFullscreen) {
          //             document.webkitExitFullscreen();
          //           } else if (document.msExitFullscreen) {
          //             document.msExitFullscreen();
          //           } else if (document.mozCancelFullScreen) {
          //             document.mozCancelFullScreen();
          //           }
          //         }
          //       }, false);
          //     }
          //   } else {
          //     // in reality you should use fallback code here
          //     alert("Your browser doesn’t support the fullscreen API");
          //   }
        //


        //

        // bigger
        // if (document.fullscreenEnabled ||
        //   document.webkitFullscreenEnabled ||
        //   document.msFullscreenEnabled ||
        //   document.mozFullScreenEnabled) {

        //   var imgs = document.getElementsByTagName("figure");

        //   for (var i = 0; i < imgs.length; i++) {
        //         imgs[i].addEventListener("click", function (event) {
        //         if (!document.fullscreenElement &&
        //             !document.webkitFullscreenElement &&
        //             !document.msFullscreenElement &&
        //             !document.mozFullScreenElement) {
        //               if (this.requestFullscreen) {
        //                   this.requestFullscreen();
        //               } else if (this.webkitRequestFullscreen) {
        //                 this.webkitRequestFullscreen();
        //               } else if (this.msRequestFullscreen) {
        //                 this.msRequestFullscreen();
        //               } else if (this.mozRequestFullScreen) {
        //                 this.mozRequestFullScreen();
        //               }
        //           } else {
        //             if (document.exitFullscreen) {
        //               document.exitFullscreen();
        //             } else if (document.webkitExitFullscreen) {
        //               document.webkitExitFullscreen();
        //             } else if (document.msExitFullscreen) {
        //               document.msExitFullscreen();
        //             } else if (document.mozCancelFullScreen) {
        //               document.mozCancelFullScreen();
        //             }
        //           }
        //         }, false);
        //       }
        //     } else {
        //       // in reality you should use fallback code here
        //       alert("Your browser doesn’t support the fullscreen API");
        //     }
        //


        // smaller
        // if (document.fullscreenEnabled ||
        //   document.webkitFullscreenEnabled ||
        //   document.msFullscreenEnabled ||
        //   document.mozFullScreenEnabled) {

        //   var img = document.getElementsByTagName("img")[0];

        //   img.addEventListener("click", function (event) {
        //     if (!document.fullscreenElement &&
        //       !document.webkitFullscreenElement &&
        //       !document.msFullscreenElement &&
        //       !document.mozFullScreenElement) {
        //         if (this.requestFullscreen) {
        //           this.requestFullscreen();
        //         } else if (this.webkitRequestFullscreen) {
        //           this.webkitRequestFullscreen();
        //         } else if (this.msRequestFullscreen) {
        //           this.msRequestFullscreen();
        //         } else if (this.mozRequestFullScreen) {
        //           this.mozRequestFullScreen();
        //         }
        //     } else {
        //       if (document.exitFullscreen) {
        //         document.exitFullscreen();
        //       } else if (document.webkitExitFullscreen) {
        //         document.webkitExitFullscreen();
        //       } else if (document.msExitFullscreen) {
        //         document.msExitFullscreen();
        //       } else if (document.mozCancelFullScreen) {
        //         document.mozCancelFullScreen();
        //       }
        //     }
        //   }, false);
        // } else {
        //   // in reality you should use fallback code here
        //   alert("Your browser doesn’t support the fullscreen API");
        // }
        //
      },

      prevImage: function() {
        // body...
      },

      nextImage: function() {
        // body...
      },

      openMenu: function() {
        // body...
      }



    });

    return ToolbarView;
});