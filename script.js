

// DOM Elements
const navbar = document.getElementById('navbar')
const navToggle = document.getElementById('navToggle')
const navMenu = document.getElementById('navMenu')
const navLinks = document.querySelectorAll('.nav-link')
const themeToggle = document.getElementById('theme-toggle')
const themeIcon = document.querySelector('.theme-icon')

// Theme Toggle
const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'light') {
  document.body.classList.add('light-mode')
  themeIcon.innerHTML = '&#9728;'
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode')
  const isLight = document.body.classList.contains('light-mode')
  themeIcon.innerHTML = isLight ? '&#9728;' : '&#127769;'
  localStorage.setItem('theme', isLight ? 'light' : 'dark')
})

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active')
  navMenu.classList.toggle('active')
})

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active')
    navMenu.classList.remove('active')
  })
})

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navToggle.classList.remove('active')
    navMenu.classList.remove('active')
  }
})

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY

  if (currentScrollY > 50) {
    if (document.body.classList.contains('light-mode')) {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)'
    } else {
      navbar.style.background = 'rgba(5, 8, 22, 0.95)'
    }
    navbar.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.1)'
  } else {
    if (document.body.classList.contains('light-mode')) {
      navbar.style.background = 'rgba(255, 255, 255, 0.9)'
    } else {
      navbar.style.background = 'rgba(5, 8, 22, 0.85)'
    }
    navbar.style.boxShadow = 'none'
  }
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))

    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  })
})

// Scroll Reveal Animation System
const revealObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      revealObserver.unobserve(entry.target)
    }
  })
}, revealObserverOptions)

// Observe all reveal elements
document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(element => {
  revealObserver.observe(element)
})

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section[id]')

const highlightNavLink = () => {
  const scrollY = window.pageYOffset

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 120
    const sectionId = section.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active')
      })
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`)
      if (activeLink) {
        activeLink.classList.add('active')
      }
    }
  })
}

window.addEventListener('scroll', highlightNavLink)

// Typing animation
new Typed('#typed-text', {
  strings: [
    'Java Developer',
    'Spring Boot Developer',
    'Backend Engineer',
    'Problem Solver',
    'Building Real-World Applications',
    'AI Enthusiast',
    'Open to Opportunities',
  ],
  typeSpeed: 50,
  backSpeed: 35,
  loop: true,
  backDelay: 2000,
  showCursor: true,
  cursorChar: '|',
})
