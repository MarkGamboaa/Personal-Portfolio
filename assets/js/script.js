// Hamburger menu toggle with smooth transition
const hamburgerBtn = document.getElementById('hamburger-button');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
      setTimeout(() => {
        mobileMenu.classList.remove('opacity-0', 'scale-95');
        mobileMenu.classList.add('opacity-100', 'scale-100');
      }, 10);
    } else {
      mobileMenu.classList.remove('opacity-100', 'scale-100');
      mobileMenu.classList.add('opacity-0', 'scale-95');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
    }
  });
}

// Mobile menu links close menu with transition
const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('opacity-100', 'scale-100');
      mobileMenu.classList.add('opacity-0', 'scale-95');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
    }
  });
});

// Social links
const linkedinBtn = document.getElementById('linkedin-btn');
if (linkedinBtn) {
  linkedinBtn.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/markgamboaa/', '_blank');
  });
}
const githubBtn = document.getElementById('github-btn');
if (githubBtn) {
  githubBtn.addEventListener('click', () => {
    window.open('https://github.com/MarkGamboaa', '_blank');
  });
}

// Modal open/close with smooth transition
function showModal(modal) {
  if (modal) {
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.remove('opacity-0', 'scale-95');
      modal.classList.add('opacity-100', 'scale-100');
    }, 10);
  }
}
function hideModal(modal) {
  if (modal) {
    modal.classList.remove('opacity-100', 'scale-100');
    modal.classList.add('opacity-0', 'scale-95');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
  }
}
const frontendShowAll = document.getElementById('frontend-showall');
const backendShowAll = document.getElementById('backend-showall');
const frontendModal = document.getElementById('frontend-modal');
const backendModal = document.getElementById('backend-modal');
const frontendClose = document.getElementById('frontend-close');
const backendClose = document.getElementById('backend-close');

if (frontendShowAll && frontendModal) {
  frontendShowAll.addEventListener('click', () => showModal(frontendModal));
}
if (backendShowAll && backendModal) {
  backendShowAll.addEventListener('click', () => showModal(backendModal));
}
if (frontendClose && frontendModal) {
  frontendClose.addEventListener('click', () => hideModal(frontendModal));
}
if (backendClose && backendModal) {
  backendClose.addEventListener('click', () => hideModal(backendModal));
}

// Project Carousel with fade animation
const projects = [
  {
    img: "assets/images/SolarSoil.png",
    alt: "SolarSoil",
    title: "SolarSoil (On progress)",
    github: "https://github.com/MarkGamboaa",
    live: "https://github.com/MarkGamboaa",
  },
  {
    img: "assets/images/QuizQuest.png",
    alt: "Quiz Quest",
    title: "Quiz Quest",
    github: "https://github.com/MarkGamboaa/AWD-Finals_Gamboa",
    live: "https://markgamboaa.github.io/AWD-Finals_Gamboa/",
  },
  {
    img: "assets/images/MidtermProject.png",
    alt: "Midterm Project",
    title: "Midterm Project",
    github: "https://github.com/MarkGamboaa/AWD-Midterms",
    live: "https://markgamboaa.github.io/AWD-Midterms/",
  },
];

let currentProject = 0;

function renderProject(fade = false) {
  const p = projects[currentProject];
  const carousel = document.getElementById("project-carousel");
  if (carousel) {
    if (fade) {
      carousel.classList.add('opacity-0');
      setTimeout(() => {
        carousel.innerHTML = `
          <img src="${p.img}" alt="${p.alt}" class="rounded-lg mb-4 w-full h-48 object-cover bg-white mx-auto transition-transform duration-300 hover:scale-105" />
          <h3 class="text-xl font-semibold mb-2">${p.title}</h3>
          <div class="flex justify-center gap-4">
            <a href="${p.github}" target="_blank" class="border px-4 py-2 rounded hover:bg-gray-800 hover:text-white">Github</a>
            <a href="${p.live}" target="_blank" class="border px-4 py-2 rounded hover:bg-gray-800 hover:text-white">Live Demo</a>
          </div>
        `;
        carousel.classList.remove('opacity-0');
      }, 200);
    } else {
      carousel.innerHTML = `
        <img src="${p.img}" alt="${p.alt}" class="rounded-lg mb-4 w-full h-48 object-cover bg-white mx-auto transition-transform duration-300 hover:scale-105" />
        <h3 class="text-xl font-semibold mb-2">${p.title}</h3>
        <div class="flex justify-center gap-4">
          <a href="${p.github}" target="_blank" class="border px-4 py-2 rounded hover:bg-gray-800 hover:text-white">Github</a>
          <a href="${p.live}" target="_blank" class="border px-4 py-2 rounded hover:bg-gray-800 hover:text-white">Live Demo</a>
        </div>
      `;
    }
  }
}

function prevProject() {
  currentProject = (currentProject - 1 + projects.length) % projects.length;
  renderProject(true);
}

function nextProject() {
  currentProject = (currentProject + 1) % projects.length;
  renderProject(true);
}

// Scroll animations
function handleScrollAnimations() {
  const scrollEls = document.querySelectorAll('.scroll-animate');
  const triggerBottom = window.innerHeight * 0.92;
  scrollEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('DOMContentLoaded', () => {
  renderProject();
  // Carousel navigation
  const prevBtn = document.getElementById('prev-project');
  const nextBtn = document.getElementById('next-project');
  if (prevBtn) prevBtn.addEventListener('click', prevProject);
  if (nextBtn) nextBtn.addEventListener('click', nextProject);
  handleScrollAnimations();
});
