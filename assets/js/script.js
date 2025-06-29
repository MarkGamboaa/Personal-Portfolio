// Hamburger menu toggle with smooth transition
const hamburgerBtn = document.getElementById("hamburger-button");
const mobileMenu = document.getElementById("mobile-menu");
if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener("click", () => {
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
      setTimeout(() => {
        mobileMenu.classList.remove("opacity-0", "scale-95");
        mobileMenu.classList.add("opacity-100", "scale-100");
      }, 10);
    } else {
      mobileMenu.classList.remove("opacity-100", "scale-100");
      mobileMenu.classList.add("opacity-0", "scale-95");
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
      }, 300);
    }
  });
}

// Mobile menu links close menu with transition
const menuLinks = document.querySelectorAll(".menu-link");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("opacity-100", "scale-100");
      mobileMenu.classList.add("opacity-0", "scale-95");
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
      }, 300);
    }
  });
});

// Social links
const linkedinBtn = document.getElementById("linkedin-btn");
if (linkedinBtn) {
  linkedinBtn.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/markgamboaa/", "_blank");
  });
}
const githubBtn = document.getElementById("github-btn");
if (githubBtn) {
  githubBtn.addEventListener("click", () => {
    window.open("https://github.com/MarkGamboaa", "_blank");
  });
}

// Modal open/close with smooth transition (no scroll lock)
function showModal(modal) {
  if (modal) {
    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.classList.remove("opacity-0", "scale-95");
      modal.classList.add("opacity-100", "scale-100");
    }, 10);
    // document.body.classList.add('overflow-hidden'); // removed
  }
}
function hideModal(modal) {
  if (modal) {
    modal.classList.remove("opacity-100", "scale-100");
    modal.classList.add("opacity-0", "scale-95");
    setTimeout(() => {
      modal.classList.add("hidden");
      // document.body.classList.remove('overflow-hidden'); // removed
    }, 300);
  }
}
const frontendShowAll = document.getElementById("frontend-showall");
const backendShowAll = document.getElementById("backend-showall");
const frontendModal = document.getElementById("frontend-modal");
const backendModal = document.getElementById("backend-modal");
const frontendClose = document.getElementById("frontend-close");
const backendClose = document.getElementById("backend-close");

if (frontendShowAll && frontendModal) {
  frontendShowAll.addEventListener("click", () => showModal(frontendModal));
}
if (backendShowAll && backendModal) {
  backendShowAll.addEventListener("click", () => showModal(backendModal));
}
if (frontendClose && frontendModal) {
  frontendClose.addEventListener("click", () => hideModal(frontendModal));
}
if (backendClose && backendModal) {
  backendClose.addEventListener("click", () => hideModal(backendModal));
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
      carousel.classList.add("opacity-0");
      setTimeout(() => {
        carousel.innerHTML = `
          <img src="${p.img}" alt="${p.alt}" class="rounded-lg mb-4 w-full h-48 object-cover bg-white mx-auto transition-transform duration-300 hover:scale-105" />
          <h3 class="text-xl font-semibold mb-2">${p.title}</h3>
          <div class="flex justify-center gap-4">
            <a href="${p.github}" target="_blank" class="border px-4 py-2 rounded hover:bg-gray-800 hover:text-white">Github</a>
            <a href="${p.live}" target="_blank" class="border px-4 py-2 rounded hover:bg-gray-800 hover:text-white">Live Demo</a>
          </div>
        `;
        carousel.classList.remove("opacity-0");
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

// Certifications Data and Rendering (all, no duplicates)
const certifications = [
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    issued: "Mar 2025",
    img: "assets/images/certifications/cisco.png",
    link: "https://www.credly.com/badges/d8e7db3c-3f60-417d-a78a-b0f6e977d864/linked_in_profile",
  },
  {
    title: "AWS Fundamentals",
    issuer: "Amazon Web Services (AWS)",
    issued: "Feb 2025",
    img: "assets/images/certifications/aws.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/B8RSQB52DKQP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
  },
  {
    title: "Adobe Graphic Designer",
    issuer: "Adobe",
    issued: "Feb 2025",
    img: "assets/images/certifications/adobe.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/QW91B5G7EYU2",
  },
  {
    title: "CSS (Basic)",
    issuer: "HackerRank",
    issued: "Feb 2025",
    img: "assets/images/certifications/hackerrank.png",
    link: "https://www.hackerrank.com/certificates/1bb29356d0a2",
  },
  {
    title: "Cisco Certified Support Technician Networking",
    issuer: "Cisco Networking Academy",
    issued: "Feb 2025",
    img: "assets/images/certifications/cisco.png",
    link: "https://www.credly.com/badges/f3fca5d4-c85d-4b7a-ba61-10860a931f22/public_url",
  },
  {
    title: "Data Science Foundations - Level 2 (V2)",
    issuer: "IBM",
    issued: "Feb 2025",
    img: "assets/images/certifications/ibm.png",
    link: "https://www.credly.com/badges/2ea0545d-b918-467b-9007-c9805ff46a22/linked_in_profile",
  },
  {
    title: "Data Science Methodologies",
    issuer: "IBM",
    issued: "Feb 2025",
    img: "assets/images/certifications/ibm.png",
    link: "https://www.credly.com/badges/3311e30a-6a0c-4863-9e81-f215d61e9f27/linked_in_profile",
  },
  {
    title: "Full-Stack Engineer Career Path",
    issuer: "Codecademy",
    issued: "Feb 2025",
    img: "assets/images/certifications/codecademy.png",
    link: "https://www.codecademy.com/profiles/css1412494123/certificates/ffd0f42cce1a44e9a0108b365047a0a6",
  },
  {
    title: "Google UX Design",
    issuer: "Google",
    issued: "Feb 2025",
    img: "assets/images/certifications/google.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/EPMIJRA2960W?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
  },
  {
    title: "Graphic Design Essentials",
    issuer: "Canva",
    issued: "Feb 2025",
    img: "assets/images/certifications/canva.png",
    link: "https://www.canva.com/design-school/certification-award/455520b3-f87e-482d-a470-3035d609e4ab",
  },
  {
    title: "IT Specialist - Python",
    issuer: "Certiport - A Pearson VUE Business",
    issued: "Feb 2025",
    img: "assets/images/certifications/certiport.png",
    link: "https://www.credly.com/badges/fcb18c09-0bef-4662-9c63-8b6493b98f9e/linked_in_profile",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    issued: "Feb 2025",
    img: "assets/images/certifications/freecodecamp.png",
    link: "https://www.freecodecamp.org/certification/fcc7b4e8976-3e02-4142-9b6d-6ad9c9d66a17/javascript-algorithms-and-data-structures-v8",
  },
  {
    title: "Learn JavaScript Course",
    issuer: "Codecademy",
    issued: "Feb 2025",
    img: "assets/images/certifications/codecademy.png",
    link: "https://www.codecademy.com/profiles/css1412494123/certificates/705dcb15de0da4dd9d9fc4f3274b430e",
  },
  {
    title: "Python 101 for Data Science",
    issuer: "IBM",
    issued: "Feb 2025",
    img: "assets/images/certifications/ibm.png",
    link: "https://courses.cognitiveclass.ai/certificates/27589ca69156415587a72161ac68ea08",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    issued: "Jan 2025",
    img: "assets/images/certifications/cisco.png",
    link: "https://www.credly.com/badges/12f3a4ec-d1a8-4e93-b939-e9a0c9ed9bd0/public_url",
  },
  {
    title: "IT Specialist - Databases",
    issuer: "Certiport - A Pearson VUE Business",
    issued: "Nov 2024",
    img: "assets/images/certifications/certiport.png",
    link: "https://www.credly.com/badges/b5c85a7d-8f29-4ef8-90e0-f3857953dc52/public_url",
  },
  {
    title: "Data Science Foundations - Level 1",
    issuer: "IBM",
    issued: "Jun 2023",
    img: "assets/images/certifications/ibm.png",
    link: "https://www.credly.com/badges/c812f270-0bc1-4658-9e5e-68a675f3ba9b/public_url",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issued: "Jan 2022",
    img: "assets/images/certifications/freecodecamp.png",
    link: "https://www.freecodecamp.org/certification/fcc7b4e8976-3e02-4142-9b6d-6ad9c9d66a17/responsive-web-design",
  },
];

function renderCertificationsCard() {
  const container = document.getElementById("certifications-card-container");
  if (!container) return;
  container.innerHTML = `
    <div class="border rounded-lg p-4 md:p-6 flex flex-col">
      <div class="grid grid-cols-2 gap-2 md:gap-6 mt-3 md:mt-6">
        ${certifications
          .slice(0, 4)
          .map(
            (cert) => `
          <div class="flex flex-col md:flex-row items-start gap-1 md:gap-4 bg-gray-50 rounded-lg p-2 md:p-4 shadow-sm">
            <img src="${cert.img}" alt="${cert.issuer} logo" class="w-8 h-8 md:w-16 md:h-16 object-contain rounded bg-white border border-gray-200 flex-shrink-0 mx-auto md:mx-0" />
            <div class="flex-1 min-w-0 text-center md:text-left">
              <h3 class="font-semibold text-xs md:text-base leading-tight mb-1">${cert.title}</h3>
              <p class="text-xs md:text-sm text-gray-600 mb-1">${cert.issuer}</p>
              <p class="text-xs md:text-sm text-gray-500 mb-1">Issued ${cert.issued}</p>
              <a class="text-xs md:text-sm text-blue-600 hover:text-blue-800 underline font-medium" href="${cert.link}" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
      <button id="certifications-showall" class="mt-4 md:mt-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-black transition text-sm md:text-base">Show All</button>
    </div>
  `;
}

function renderCertificationsModal() {
  const modalContent = document.getElementById("certifications-modal-content");
  if (!modalContent) return;
  modalContent.innerHTML = `
    <h2 class="text-lg md:text-2xl font-bold mb-4 md:mb-6">All Certifications</h2>
    <div class="cert-list">
      ${certifications
        .map(
          (cert) => `
        <div class="cert-item flex flex-col md:flex-row items-start gap-3 md:gap-4 bg-gray-50 rounded-lg p-3 md:p-4 shadow-sm">
          <img src="${cert.img}" alt="${cert.issuer} logo" class="cert-logo w-12 h-12 md:w-16 md:h-16 object-contain rounded-lg bg-white border border-gray-200 flex-shrink-0 mx-auto md:mx-0" />
          <div class="text-center md:text-left w-full">
            <strong class="text-sm md:text-base block mb-1">${cert.title}</strong>
            <div class="text-xs md:text-sm text-gray-600 mb-1">${cert.issuer}</div>
            <div class="text-xs md:text-sm text-gray-500 mb-2">Issued ${cert.issued}</div>
            <a class="cert-link text-xs md:text-sm text-blue-600 hover:text-blue-800 underline font-medium" href="${cert.link}" target="_blank" rel="noopener noreferrer">Show credential</a>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

function setupCertificationsModal() {
  const showAllBtn = document.getElementById("certifications-showall");
  const modal = document.getElementById("certifications-modal");
  const closeBtn = document.getElementById("certifications-close");
  if (showAllBtn && modal) {
    showAllBtn.addEventListener("click", () => {
      renderCertificationsModal();
      showModal(modal);
    });
  }
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => hideModal(modal));
  }
  // Close modal when clicking outside the modal box
  if (modal) {
    modal.addEventListener("mousedown", function (e) {
      if (e.target === modal) {
        hideModal(modal);
      }
    });
  }
}

// Scroll animations with bidirectional effects
function handleScrollAnimations() {
  const scrollEls = document.querySelectorAll(".scroll-animate");
  const triggerBottom = window.innerHeight * 0.92;
  const triggerTop = window.innerHeight * 0.1;

  scrollEls.forEach((el) => {
    const rect = el.getBoundingClientRect();

    // Element is in view (either scrolling down or up)
    if (rect.top < triggerBottom && rect.bottom > triggerTop) {
      el.classList.add("active");
    } else {
      // Element is out of view (either above or below viewport)
      el.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", handleScrollAnimations);
window.addEventListener("DOMContentLoaded", () => {
  renderProject();
  // Carousel navigation
  const prevBtn = document.getElementById("prev-project");
  const nextBtn = document.getElementById("next-project");
  if (prevBtn) prevBtn.addEventListener("click", prevProject);
  if (nextBtn) nextBtn.addEventListener("click", nextProject);
  handleScrollAnimations();
  // Certifications
  renderCertificationsCard();
  setupCertificationsModal();
});
