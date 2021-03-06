/*!
 * TNCPanel 0.0.2 by @mavisland (https://github.com/mavisland/tncpanel)
 * A dashboard template based on Twitter Bootstrap
 *
 * Copyright (c) 2016 Tanju Yıldız <ben@tanjuyildiz.com> (http://tanjuyildiz.com)
 * Licensed under MIT License (https://github.com/mavisland/tncpanel/blob/master/LICENSE)
 */
(function ($) {
  'use strict';

  $('.app-aside .nav .has-child > a').on('click',function(e) {
    e.preventDefault();
    $(this).next('.nav-sub').slideToggle(300, function() {
      $(this).parent().toggleClass('active');
    });
  });

})(jQuery);
