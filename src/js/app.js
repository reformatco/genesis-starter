import 'babel-polyfill';
import $ from 'jquery';
import MobileDetect from 'mobile-detect'; // https://www.npmjs.com/package/mobile-detect
import Flickity from 'flickity';
import 'flickity-fade';
import 'flickity-imagesloaded';
import fitVids from './plugins/jquery.fitvids';
import Stickyfill from './components/stickyfill.es6';

// Check for modern browser
if ('querySelector' in document && 'addEventListener' in window) {
  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');
}

//
let state = {
  flkty: {},
};

$(() => {

  const pageLoad = () => {

    // position:sticky support
    const stickyelem = $('.sticky');
    Stickyfill.add(stickyelem);

  }

  pageLoad();

});
