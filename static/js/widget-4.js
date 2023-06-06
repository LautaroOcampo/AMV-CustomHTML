(function() {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://iili.io/H8Vc5zX.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  })();
  function faviconIn(){
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';link.rel = 'shortcut icon';
    link.href = 'https://iili.io/H8Vc5zX.png';
    document.getElementsByTagName('head')[0].appendChild(link)
  };
  
  setTimeout(faviconIn,1000);

let subcategoriasMobile = document.getElementsByClassName('nav-default-list--vertical__item')
let arrowMobile = document.getElementsByClassName('arrow-mobile')
let categoriasMobileP = document.getElementsByClassName('categorias-mobile-p')

arrowMobile[0].addEventListener('click', (e) => {
    e.target.classList.toggle('rotated')

    categoriasMobileP[0].classList.toggle('subrayar')

    subcategoriasMobile[3].classList.toggle('invisible')
    subcategoriasMobile[4].classList.toggle('invisible')
    subcategoriasMobile[5].classList.toggle('invisible')
    subcategoriasMobile[6].classList.toggle('invisible')
    subcategoriasMobile[7].classList.toggle('invisible')

})
arrowMobile[1].addEventListener('click', (e) => {
    e.target.classList.toggle('rotated')

    categoriasMobileP[1].classList.toggle('subrayar')
    
    subcategoriasMobile[9].classList.toggle('invisible')
    subcategoriasMobile[10].classList.toggle('invisible')
    subcategoriasMobile[11].classList.toggle('invisible')
    subcategoriasMobile[12].classList.toggle('invisible')
})
arrowMobile[2].addEventListener('click', (e) => {
    e.target.classList.toggle('rotated')

    categoriasMobileP[2].classList.toggle('subrayar')

    subcategoriasMobile[14].classList.toggle('invisible')
    subcategoriasMobile[15].classList.toggle('invisible')
    subcategoriasMobile[16].classList.toggle('invisible')
    subcategoriasMobile[17].classList.toggle('invisible')
    subcategoriasMobile[18].classList.toggle('invisible')
})

let componentes = document.getElementsByClassName('component-wrapper')
let titulos = document.getElementsByClassName('categorias-destacadas')
let pagosSection = document.getElementsByClassName('pagos-icons-section')[0]

setTimeout(function() {
    componentes[0].parentNode.insertBefore(titulos[0], componentes[0].nextSibling);
    
    componentes[0].parentNode.insertBefore(pagosSection, componentes[0].nextSibling);
  
    componentes[1].parentNode.insertBefore(titulos[1], componentes[1].nextSibling);

  }, 500);

console.log('anda')

const URLActual = window.location.pathname

if(URLActual !== '/'){
  titulos[0].classList.add('invisible')
  titulos[1].classList.add('invisible')
  pagosSection.classList.add('invisible')
}
