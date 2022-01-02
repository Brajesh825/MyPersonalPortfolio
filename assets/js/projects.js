const projects = [
  {
    title: "My Personal Portfolio",
    summary:
      "The complete portfolio website hosted using github pages (gh-pages). Visit the website here",
    date: "2020-03-06",
    technology: ["html5", "css3", "js", "sass"],
    link: "https://github.com/Brajesh825/MyPersonalPortfolio",
  },
  {
    title: "Mern Ecommerce",
    summary:
      "Ecommerce website made using Mern stack . Backend is completed ,Frontend in development",
    date: "ongoing",
    technology: ["html5", "css3", "js", "node", "react"],
    link: "https://github.com/Brajesh825/MERN-Ecommerce",
  },
  {
    title: "Node Projects",
    summary:
      "Cluster of projects made using node js like ecommerce api,task manager,store api and jobs api",
    date: "2020-03-06",
    technology: ["html5", "css3", "js", "node"],
    link: "https://github.com/Brajesh825/NodeProjects",
  },
  {
    title: "Frontend Projects",
    summary: "A repository containing various of my front end works",
    date: "2020-03-06",
    technology: ["html5", "css3", "js", "sass"],
    link: "https://github.com/Brajesh825/FrontendProjects",
  },
];

const projectContainer = document.querySelector(".project__container");

function render() {
  projects.forEach((project) => {
    let technology = "";
    project.technology.forEach((tech) => {
      technology += `<i class="fab fa-${tech}" title="${tech}"></i>`;
    });
    projectContainer.innerHTML += `
    <a href="${project.link}" target="_blank">
        <div class="project__item" style="background-color:  ${
          randomColor() + "33"
        } ">
        <div class="project__details">
          <h3>${project.title}</h2>
          <h4>
           ${project.summary}
          </h4>
        </div>  
        <div class="project__footer">
          <h5>${project.date}</h5>
          <div class="tech__used">
                ${technology}
          </div>
        </div>
      </div>
      </a>
      `;
  });
}

render();

function randomColor() {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber(hex)];
  }
  return hexColor;
}

function getRandomNumber(hex) {
  return Math.floor(Math.random() * hex.length);
}
