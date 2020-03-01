import 'babel-polyfill';
import WebFont from 'webfontloader';
import $ from 'jquery';
import Flickity from 'flickity';
import 'flickity-fade';
import 'flickity-imagesloaded';
// import Headroom from 'headroom.js';
import 'lazysizes';
import fancybox from '@fancyapps/fancybox';
import fitVids from './plugins/jquery.fitvids';
// import './components/aria-menu';
import './plugins/mmenu';
import Stickyfill from './components/stickyfill.es6';

const isPhone = () => {
  return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

// Check for modern browser

if ('querySelector' in document && 'addEventListener' in window) {
  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');
}

document.addEventListener(
  'DOMContentLoaded', () => {
    new Mmenu( '#menu', {
        'navbar': {
          'title': 'VCF'
        },
        "navbars": [
          {
             "position": "bottom",
             "content": [
                "searchfield"
             ]
          }
       ],
        "extensions": [
          "position-right"
        ],
    });
  }
);

let state = {
  // navOpen from aria-menu
  navOpen: true,
  searchOpen: false,
  flkty: {},
};

$(() => {

  const pageLoad = () => {

    // if (!isPhone()) {
    //   const headerElem = document.querySelector('.headroom');
    //   const headroom = new Headroom(headerElem, { offset : 200 });
    //   headroom.init();
    // }

    WebFont.load({
      timeout: 3000,
      google: {
        families: ['Montserrat:300,400,500,700,800', 'Merriweather:300,400,700']
      },
      active: () => {
        sessionStorage.setItem('fonts', true);
        // document.querySelector('.modal-nav').classList.remove('hidden');
      },
    });

    $('.arrow[aria-role="button"]').on('click', () => {
      const movealong = document.querySelector('#proceed');
      if (movealong) {
        const yCoordinate = movealong.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = document.getElementById('site-header').offsetHeight;

        window.scrollTo({
          top: yCoordinate - yOffset,
          behavior: 'smooth',
        });
      }
    });

    if ($('.m--video .video').length) {
      $('.m--video .video').fitVids();
    }

    const stickyelem = $('.sticky');
    Stickyfill.add(stickyelem);

    // let disabledHandle;
    // const navbar = document.querySelector('#modal-nav');

    // $('.navbar-burger').on('click', () => {
    //   if (!state.navOpen) {
    //     if (state.searchOpen) {
    //       $('#searchtoggle').attr('aria-expanded','false');
    //       document.getElementById("site-search").blur();
    //       state.searchOpen = false;
    //       $('body').removeClass('search-active');
    //     }
    //   }
    //   state.navOpen = !state.navOpen;
    // });

    $('.mega-item-link').hover(function(){
      if( $(this).attr('aria-haspopup') == 'true' ){
        state.navOpen = true;
        $('.mega-item-link').attr('aria-expanded', 'false');
        $(this).attr('aria-expanded', 'true');
      }else{
        state.navOpen = false;
        $('.mega-item-link').attr('aria-expanded', 'false');
      }
    });

    $('.megadrop').hover(function(){},function(){
      if(state.navOpen){
        state.navOpen = false;
        $('.mega-item-link').attr('aria-expanded', 'false');
      }
    });

    // $('#searchtoggle').on('click', () => {
    //   $('body').toggleClass('search-active');
    //   if (!state.searchOpen) {
    //     $('#searchtoggle').attr('aria-expanded','true');
    //     document.getElementById('site-search').focus();
    //   } else {
    //     $('#searchtoggle').attr('aria-expanded','false');
    //     document.getElementById('site-search').blur();
    //   }
    //   state.searchOpen = !state.searchOpen;
    // });

    const changeDotColor = (slider, index) => {
      if (!isPhone()) {
        const textcolor = $(slider).find(`.slide:eq(${index})`).data('textcolor');
        const pageDots = slider.querySelector('.flickity-page-dots');
        $(pageDots).attr('class', 'flickity-page-dots');
        $(pageDots).addClass(textcolor);
      // console.log(textcolor);
      }
    }

    const sliders = document.querySelectorAll('.slider');
    if (sliders) {
      sliders.forEach((slider, index) => {
        if (slider.querySelectorAll('.slide').length > 1) {
          const options = {
            cellSelector: '.slide',
            resize: true,
            imagesLoaded: true,
            prevNextButtons: false,
            pageDots: true,
            autoPlay: 5000,
            draggable: true,
            wrapAround: true,
            setGallerySize: false,
            on: {
              ready: () => {
                changeDotColor(slider, 0);
              },
              change: (index) => {
                changeDotColor(slider, index);
              }
            },
            // pauseAutoPlayOnHover: true,
          };
          const flkty = new Flickity(slider, options);
        }
        slider.classList.add('loaded');
      });

    }

    const picslider = document.querySelectorAll('.m--slider');
    if (picslider) {
      picslider.forEach((slider, index) => {
        if (slider.querySelectorAll('.slide').length > 1) {
          const options = {
            cellSelector: '.slide',
            resize: true,
            imagesLoaded: true,
            prevNextButtons: true,
            pageDots: true,
            draggable: true,
            wrapAround: true,
            on: {
              ready: () => {
                changeDotColor(slider, 0);
              },
              change: (index) => {
                changeDotColor(slider, index);
              }
            },
            // pauseAutoPlayOnHover: true,
          };
          const flkty = new Flickity(slider, options);
        }
        slider.classList.add('loaded');
      });

    }

    const facts = document.querySelectorAll('.m--facts-inner');
    if (facts) {
      facts.forEach((slider, index) => {
        if (slider.querySelectorAll('.slide').length > 1) {
          const options = {
            cellSelector: '.slide',
            resize: true,
            imagesLoaded: true,
            prevNextButtons: false,
            pageDots: true,
            draggable: true,
            wrapAround: true,
            on: {
              ready: () => {
                changeDotColor(slider, 0);
              },
              change: (index) => {
                changeDotColor(slider, index);
              }
            },
          };
          const flkty = new Flickity(slider, options);
        }
        slider.classList.add('loaded');
      });

    }

    const pullout = document.querySelectorAll('.m--aside .pullout');
    if (pullout) {
      pullout.forEach((slider, index) => {
        if (slider.querySelectorAll('.slide').length > 1) {
          const options = {
            cellSelector: '.slide',
            resize: true,
            prevNextButtons: false,
            pageDots: true,
            draggable: true,
            wrapAround: true,
            on: {
              ready: () => {
                changeDotColor(slider, 0);
              },
              change: (index) => {
                changeDotColor(slider, index);
              }
            },
            // pauseAutoPlayOnHover: true,
          };
          const flkty = new Flickity(slider, options);
        }
        slider.classList.add('loaded');
      });

    }

  }



  pageLoad();

});
