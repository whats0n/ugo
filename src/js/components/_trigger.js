import { SCROLL_TO } from '../_utils';
import { HIDDEN, HTMLBODY, WIN } from '../_constants';
;(function() {
  let $form = $('.js-footer-form');
  const $trigger = $('.js-trigger');

  $trigger.click(function() {
    const block = $(this).attr('href');
    const position = $(block).offset().top;
    SCROLL_TO(position);
    return false;
  });

  WIN.on('scroll', function() {
    let winOffset = HTMLBODY.scrollTop() + WIN.height();
    let blockOffset = $form.offset().top + $trigger.outerHeight();
    (winOffset >= blockOffset) 
    	? $trigger.addClass(HIDDEN)
    	: $trigger.removeClass(HIDDEN);
  });

})();
