// Header
let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function (e) {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  this.classList.toggle('fa-xmark');
});

// Type Effect
let typed = new Typed('.auto-input', {
  strings: [
    'Front-End Developer',
    'Web Designer!',
    'Backend Developer!',
  ],
  typedSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});

// Active Link State on Scroll

// Get All Links
let navLinks = document.querySelectorAll('nav ul li a');

let sections = document.querySelectorAll('section');

window.addEventListener('scroll', function () {
  const scrollPos = this.window.scrollY + 20;
  sections.forEach((section) => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (
          section.getAttribute('id') === link.getAttribute('href').substring(1)
        ) {
          link.classList.add('active');
        }
      });
    }
  });
});


// Function to animate the progress bars with a given class
function animateProgressBar(percentageElement, progressBarElement, targetPercentage) {
  let currentProgress = 0;
  const animationDuration = 1000; 
  const frameRate = 30; 

  const increment = (targetPercentage - currentProgress) / (animationDuration / (1000 / frameRate));

  const animationInterval = setInterval(() => {
    currentProgress += increment;
    progressBarElement.style.width = currentProgress + '%';

    if (currentProgress >= targetPercentage) {
      currentProgress = targetPercentage; 
      progressBarElement.style.width = currentProgress + '%'; 
      clearInterval(animationInterval);
    }

    percentageElement.textContent = currentProgress.toFixed(0) + '%'; 
  }, 1000 / frameRate);
}

// Function to start the progress animation for a specific skill
function startSkillAnimation(targetId) {
  const targetSkill = document.getElementById(targetId);
  const targetPercentage = parseFloat(targetSkill.querySelector('.skill-percentage').textContent);
  animateProgressBar(targetSkill.querySelector('.skill-percentage'), targetSkill.querySelector('.skill-inner-line'), targetPercentage);
}

// Animate progress bars when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const percentageElements = document.querySelectorAll('.skill-percentage');
  const progressBarElements = document.querySelectorAll('.skill-inner-line');

  for (let i = 0; i < percentageElements.length; i++) {
    const targetPercentage = parseFloat(percentageElements[i].textContent);
    animateProgressBar(percentageElements[i], progressBarElements[i], targetPercentage);
  }

  const skillsLink = document.querySelector('.skills-button a');
  skillsLink.addEventListener('click', function (event) {
    event.preventDefault(); 
    startSkillAnimation('skill'); 
  });
});


// Function to handle the scroll event
  function handleScroll(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }

  // Create an Intersection Observer
  const observer = new IntersectionObserver(handleScroll, {
    root: null, 
    rootMargin: "0px", 
    threshold: 0.3, 
  });

  // Observe all elements with the class "reveal-on-scroll"
  document.querySelectorAll(".reveal-on-scroll").forEach((element) => {
    observer.observe(element);
  });