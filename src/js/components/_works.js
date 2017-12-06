import noUiSlider from 'nouislider';
import slick from 'slick-carousel';
import { INIT_SLIDER } from '../_utils';
import { widthSM, widthXS } from '../_constants';

;(() => {
  
  const $works = $('.js-works');

  $works.each(function() {
    
    const $this = $(this);

    const $range = $this.find('.js-range');
    const range = $range.get(0);

    const $slider = $this.find('.js-slider');
    const $slide = $this.find('.js-slide');
    const length = $slide.length;

    INIT_SLIDER($slider);
    $slider.slick({
      fade: true,
      arrows: false,
      swipe: false,
      responsive: [
        {
          breakpoint: widthSM+1,
          settings: {
            swipe: true,
            fade: false,
            centerMode: true,
            centerPadding: '18.4%'
          }
        },
        {
          breakpoint: widthXS+1,
          settings: {
            centerPadding: '28px'
          }
        }
      ]
    });

    $slider.on('afterChange', (e, slick, current) => {
      if (!window.matchMedia(`(max-width: ${widthSM}px)`).matches) return;
      console.log(current);
      range.noUiSlider.set(current);
    });

    noUiSlider.create(range, {
      start: 0,
      connect: 'lower',
      step: 1,
      range: {
        min: 0,
        max: length - 1
      }
    });

    range.noUiSlider.on('change', (values) => {
      if (window.matchMedia(`(max-width: ${widthSM}px)`).matches) return;
      const current = parseInt(values[0]);
      $slider.slick && $slider.slick('slickGoTo', current);
    });

  });

})();
