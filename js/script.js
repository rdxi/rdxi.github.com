$(function() {
  mainFunc.init();
});

var mainFunc = {
  init: function() {
    this.masonryInit();
    this.sidebarGoto();
    this.filter();
    this.sidebarCounter();
    this.about();
  },

  masonryInit: function() {
    var self = this;
    $(window).load(function(){
      $('.content .works ul').masonry({
        columnWidth : 300,
        gutter: 20
      });
    });
  },

  sidebarGoto: function() {
    $('.works .controls > div').on('click', function() {
      var currProject = $(this).parent().parent().parent(),
          siblings = currProject.siblings(':visible'),
          currIdx = siblings.addBack().index(currProject),
          nextOffset,
          prevOffset;

      if ($(this).hasClass('next')) {
        if (currIdx >= siblings.addBack().length - 1) { return false; }

        nextOffset = siblings.addBack().eq(currIdx + 1).offset().top;
        $('html, body').animate({scrollTop: nextOffset}, 500);

      } else if ($(this).hasClass('prev')) {
        if (currIdx === 0) { return false; }

        prevOffset = siblings.addBack().eq(currIdx - 1).offset().top;
        $('html, body').animate({scrollTop: prevOffset}, 500);
      }
    });
  },

  sidebarCounter: function() {
    var total = $('.works > div:visible').length,
        current;

    $('.works > div:visible').each(function(arrIdx) {
      current = arrIdx + 1;
      var tpl = $('<span class="counter">' + current   + ' of ' + total + '</span>');

      $(this).find('.controls .counter').remove();
      $(this).find('.controls').append(tpl);
    });

    // grey out first prev button and last next button
    var projects = $('.works > div:visible');
    projects.find('.prev, .next').removeClass('disabled');
    projects.eq(0).find('.info .prev').addClass('disabled');
    projects.eq(projects.length - 1).find('.info .next').addClass('disabled');
  },

  filter: function() {
    var self = this;
    $('.filter li').on('click', function() {
      $(this).addClass('active').siblings().removeClass('active');

      var main = $('.works > div');

      if ($(this).hasClass('studies')) {
        main.not('.studies').slideUp(300);
        main.filter('.studies').slideDown(300);
      } else if ($(this).hasClass('work')) {
        main.not('.studies').slideDown(300);
        main.filter('.studies').slideUp(300);
      } else {
        main.slideDown(300);
      }

      setTimeout(function() {
        self.sidebarCounter();
      }, 300);
    });
  },

  about: function() {
    $('.header .about span').on('click', function(e) {
      $(this).parent().find('.text').toggle(200);
      e.stopPropagation();
    });

    $('body, .header .about .close').on('click', function() {
      $('.header .about .text').hide(200);
    });

    $('.header .about .text').on('click', function(e) {
      e.stopPropagation();
    });
  }
};