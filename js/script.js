
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/*FUNCION PARA CERRAR EL MENU CUANDO SE CLICKE ELEMENTO */
var links = document.getElementsByClassName('nav-link');
var element = document.getElementById('navbarTogglerDemo02');
for (i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    element.classList.remove('show');
  })
};



/*var logo = document.getElementById("logo");
console.log(logo);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
console.log(h);

window.onscroll = function () {
  console.log('hola');
  console.log(document.body.scrollTop);

    if  (document.documentElement.scrollTop || document.body.scrollTop >= 2000 ) {

        logo.classList.add("navbar-brand-blue");
        logo.classList.remove("navbar-brand-black");
    }
    else if( document.documentElement.scrollTop || document.body.scrollTop >= 600 ) {
        logo.classList.add("navbar-brand-orange");
        logo.classList.remove("navbar-brand-blue");
    } else{logo.classList.add("navbar-brand-black");console.log('negro');}
};
*/
