// DOM -> Document Object Model

//  abre e fecha o menu quando clicar no icone: hamburguer e X

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// quando clicar em um item do menu, esconder o menu

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*  Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */

const sr = ScrollReveal({
  distance: '-50px',
  duration: 700,
  reset: true
})

sr.reveal(
  `
#home .image, #home .text, 
#about .image, #about .text, #about .text
#services .header, #services .card, #services .title,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 50 }
)

/* CHANGE HEADER WHEN SCROLL */
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    //  scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //  menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Button back to top */
function backToTopButton() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (this.window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* When scroll */

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTopButton()
})
