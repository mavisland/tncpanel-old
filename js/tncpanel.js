(function ($) {
  'use strict';

  $('.app-aside .nav .has-child > a').on('click',function(e) {
    e.preventDefault();
    $(this).next('.nav-sub').slideToggle(300, function() {
      $(this).parent().toggleClass('active');
    });
  });

})(jQuery);
