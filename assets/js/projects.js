const projects = [
  {
    title: "Portfolio",
    summary:
      "The complete portfolio website hosted using github pages (gh-pages). Visit the website here",
    date: "2020-03-06",
    technology: ["html5", "css3", "js", "sass"],
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
