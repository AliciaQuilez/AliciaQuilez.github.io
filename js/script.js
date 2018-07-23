
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

var links = document.getElementsByClassName('nav-link');
var element = document.getElementById('navbarTogglerDemo02');
for (i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    element.classList.remove('show');
  })
};

var logo = document.getElementById('logo');
window.addEventListener('scroll', function(){
  if(window.innerHeight > document.documentElement.clientHeight)
  logo.classList.add('navbar-brand-white');
})
