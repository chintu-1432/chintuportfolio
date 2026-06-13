

// DOM Elements
const navbar = document.getElementById('navbar')
const navToggle = document.getElementById('navToggle')
const navMenu = document.getElementById('navMenu')
const navLinks = document.querySelectorAll('.nav-link')

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

// Navbar background change on scroll
let lastScrollY = window.scrollY

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY

  if (currentScrollY > 50) {
    navbar.style.background = 'rgba(15, 23, 42, 0.95)'
  } else {
    navbar.style.background = 'rgba(15, 23, 42, 0.85)'
  }

  lastScrollY = currentScrollY
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

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element)
})

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section[id]')

const highlightNavLink = () => {
  const scrollY = window.pageYOffset

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 100
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

// Add CSS for active nav link
const style = document.createElement('style')
style.textContent = `
  .nav-link.active {
    color: var(--text-primary);
    background: rgba(59, 130, 246, 0.15);
  }
`
document.head.appendChild(style)

// Typing animation
new Typed('#typed-text', {
  strings: [
    'Java Developer ☕',
    'Spring Boot Developer 🚀',
    'Backend Developer ⚙️',
    'Building Real-World Applications 💡',
    'AI Enthusiast 🤖',
    'Open to Opportunities 💼',
    'Always Learning 🌱',
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
  backDelay: 1500,
  showCursor: true,
  cursorChar: '|',
})
