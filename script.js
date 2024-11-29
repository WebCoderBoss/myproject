// Sidebar Toggle
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

let isOpen = false;
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  isOpen = !isOpen;
  if (isOpen) {
    menuToggle.innerHTML = "&#10006";
  } else {
    menuToggle.innerHTML = "&#9776";
  }
});

// Scroll Button
const scrollBtn = document.getElementById("scroll-btn");
scrollBtn.addEventListener("click", () => {
  document.querySelector(".footer").scrollIntoView({ behavior: "smooth" });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const searchIcon = document.querySelector(".search-icon");
//   const searchBox = document.getElementById("search-box");

//   if (searchIcon && searchBox) {
//     // Check if both elements exist
//     searchIcon.addEventListener("click", function () {
//       searchBox.classList.toggle("show"); // Toggle search box visibility with animation
//     });
//   } else {
//     console.error("Search icon or search box not found!");
//   }
// });
let number = 0;
let imgnum = 0;
// box model
const projectList = [
  {
    projectTitle: "HTML CSS JS Project 1",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "CSS JS Project 2",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
  },
];

const contentContainer = document.querySelector(".content");
const contentboxslide = document.querySelector(".content-boxslide");

function displayAllProjects() {
  // Clear any previous content
  contentContainer.innerHTML = "";

  projectList.forEach((project) => {
    const projectBox = document.createElement("div");
    projectBox.classList.add("project-box");

    const imageElement = document.createElement("img");
    imageElement.classList.add("project-image");
    imageElement.src = project.imageURL;

    const projectTitle = document.createElement("h3");
    projectTitle.classList.add("project-title");
    projectTitle.innerText = project.projectTitle;

    const projectLinkElement = document.createElement("a");
    projectLinkElement.classList.add("project-link");
    projectLinkElement.href = project.projectLink;
    projectLinkElement.innerText = "View Project";

    projectBox.append(imageElement, projectTitle, projectLinkElement);
    contentContainer.append(projectBox);
  });
}
displayAllProjects();

const projectData = [
  {
    projectTitle: "HTML CSS JS Project 1",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
    type: "html",
  },
  {
    projectTitle: "CSS JS Project 2",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
    type: "css",
  },
  {
    projectTitle: "HTML CSS JS Project 3",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
    type: "html",
  },
  {
    projectTitle: "JS Project 4",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
    type: "js",
  },
  {
    projectTitle: "HTML Project 5",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
    type: "html",
  },
  {
    projectTitle: "CSS Project 6",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
    type: "css",
  },
  {
    projectTitle: "CSS Project 6",
    imageURL: `./projecimg/Screenshot_${++imgnum}.png`,
    projectLink: `./${++number}/index.html`,
    type: "css",
  },
];

const projectSliderContent = document.querySelector(".projectSliderContent");
const projectFilterSelect = document.getElementById("projectFilterSelect");
let currentProjectIndex = 0;

function renderProjects(projectData) {
  projectSliderContent.innerHTML = ""; // Clear existing projects

  projectData.forEach((project) => {
    const projectBox = document.createElement("div");
    projectBox.classList.add("projectBox");

    const projectImage = document.createElement("img");
    projectImage.classList.add("projectImage");
    projectImage.src = project.imageURL;

    const projectTitle = document.createElement("h3");
    projectTitle.classList.add("projectTitle");
    projectTitle.innerText = project.projectTitle;

    const projectLink = document.createElement("a");
    projectLink.classList.add("projectLink");
    projectLink.href = project.projectLink;
    projectLink.innerText = "View Project";

    projectBox.append(projectImage, projectTitle, projectLink);
    projectSliderContent.append(projectBox);
  });
}

// Filter projects based on the selected type
projectFilterSelect.addEventListener("change", (event) => {
  const selectedType = event.target.value;
  const filteredProjects =
    selectedType === "all"
      ? projectData
      : projectData.filter((project) => project.type === selectedType);
  renderProjects(filteredProjects);
});

// Slider navigation functions
function goToNextProject() {
  currentProjectIndex = (currentProjectIndex + 1) % projectData.length;
  updateSliderPosition();
}

function goToPrevProject() {
  currentProjectIndex =
    (currentProjectIndex - 1 + projectData.length) % projectData.length;
  updateSliderPosition();
}

function updateSliderPosition() {
  const projectBoxWidth = document.querySelector(".projectBox").offsetWidth;
  projectSliderContent.style.transform = `translateX(-${
    currentProjectIndex * projectBoxWidth
  }px)`;
}

// Auto slider functionality (every 3 seconds)
setInterval(goToNextProject, 3000);

// Event listeners for manual navigation (Next and Prev buttons)
document
  .getElementById("nextProjectBtn")
  .addEventListener("click", goToNextProject);
document
  .getElementById("prevProjectBtn")
  .addEventListener("click", goToPrevProject);

// Initial display of all projects
renderProjects(projectData);

const projectLinks = document.querySelectorAll(".project-link");
projectLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    console.log("Project link clicked:", this.href);
    this.target = "_blank"; // Ensures the link opens in a new tab
  });
});
