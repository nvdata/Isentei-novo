// import vemBootstrap from './modules/botstrapimport.js';
// import * as animacao from './modules/animation.js';
// import * as carouselClick from './modules/carousel-change.js';
// import * as config from './modules/swiper__props.js'; //Configs do Swiper
import Dom from './modules/constructors.js'; //selecionar elementos
import menu from './modules/menu.js'; //js do menu

menu();


// ★ PAGES ★ 
const pageHome = new Dom().el("#page__home")
const pageBlogSingle = document.querySelector('#page__blog-single');

if (pageHome) { // ★ HOME 
    new Dom().bodyClass("body__home")

} else if (pageBlogSingle) {
    new Dom().bodyClass("body__blog-single");
}