define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

    var AllAlbumsModel = Backbone.Model.extend({
      // defaults: {
      //   albums: [
      //     [
      //       'img/albums/karo/01.jpg',
      //       'img/albums/karo/02.jpg',
      //       'img/albums/karo/03.jpg',
      //       'img/albums/karo/04.jpg'
      //     ],
      //     [
      //       'img/albums/hulu/01.jpg',
      //       'img/albums/hulu/02.jpg',
      //       'img/albums/hulu/03.jpg',
      //       'img/albums/hulu/04.jpg'
      //     ]
      //   ]
      // },
      url: 'js/albums.json'
    });

    return AllAlbumsModel;
});