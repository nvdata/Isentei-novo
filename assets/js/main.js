// import vemBootstrap from './modules/botstrapimport.js';
// import * as animacao from './modules/animation.js';
// import * as carouselClick from './modules/carousel-change.js';
import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
import * as config from './modules/swiper__props.js'; //Configs do Swiper
import Dom from './modules/constructors.js'; //selecionar elementos
import menu from './modules/menu.js'; //js do menu
import zoomFont from './modules/zoomFont.js'; //js do menu
import linkDentroLink from './modules/a-dentro-a.js'; //js do menu

linkDentroLink()
menu();
zoomFont()
linkDentroLink()

const mediaQuebra = window.matchMedia('(max-width: 1024px)').matches

// ★ PAGES ★ 
const pageHome = new Dom().el("#page__home")
const pageIsento = new Dom().el("#page__isento")
const pageQuemSomos = new Dom().el("#page__quem-somos")

const pageBlogSingle = document.querySelector('#page__blog-single');
const pageBlog = document.querySelector('#page__blog');
const pageContato = document.querySelector('#page__contato');

if (pageHome) { // ★ HOME 
    new Dom().bodyClass("body__home")
    new Swiper(".swiper__container-depo", config.propsComent)

    if (mediaQuebra) {
        new Swiper(".swiper__container-quebra", config.props2)
        new Swiper(".swiper__container", config.props)
    }



} else if (pageBlogSingle) { // ★ Page BLOG SINGLE
    new Dom().bodyClass("body__blog-single");


    if (mediaQuebra)
        new Swiper(".swiper__container", config.props)


} else if (pageBlog) { // ★ BLOG
    new Dom().bodyClass("body__blog");
} else if (pageIsento) { // ★ Page Isento
    new Dom().bodyClass("body__isento");
} else if (pageQuemSomos) { // ★ Page Quem Somos
    new Dom().bodyClass("body__quem-somos");
} else if (pageContato) {
    new Dom().bodyClass("body__contato");
}