// import vemBootstrap from './modules/botstrapimport.js';
// import * as animacao from './modules/animation.js';
// import * as carouselClick from './modules/carousel-change.js';
import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
import * as config from './modules/swiper__props.js'; //Configs do Swiper
import Dom from './modules/constructors.js'; //selecionar elementos
import menu from './modules/menu.js'; //js do menu

menu();

const mediaQuebra = window.matchMedia('(max-width: 1024px)').matches

// ★ PAGES ★ 
const pageHome = new Dom().el("#page__home")
const pageBlogSingle = document.querySelector('#page__blog-single');

if (pageHome) { // ★ HOME 
    new Dom().bodyClass("body__home")
    new Swiper(".swiper__container-depo", config.propsComent)

    if (mediaQuebra)
        new Swiper(".swiper__container-quebra", config.props2)


} else if (pageBlogSingle) {// ★ Page BLOG SINGLE
    new Dom().bodyClass("body__blog-single");
}