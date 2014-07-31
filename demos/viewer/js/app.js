require.config({
  paths: {
    'jquery' : 'libs/jquery-2.1.1.min',
    'underscore' : 'libs/underscore-min',
    'backbone' : 'libs/backbone-min'
  }
});

require(['jquery', 'views/appBody'], function($, AppBody){

    $(function() {
      new AppBody();
    });

});
