const certificates = [
  {
    logo: "./assets/images/companyLogo/nptel-logo.png",
    name: "Programming in C++",
    instructor: "Prof. Partha Pratham",
    institute: "IIT KHARAGPUR",
    link: "https://nptel.ac.in/noc/Ecertificate/?q=NPTEL20CS57S42110290046255",
  },
  {
    logo: "./assets/images/companyLogo/nptel-logo.png",
    name: "Programming in Java",
    instructor: "Prof. Debasis Samanta",
    institute: "IIT KHARAGPUR",
    link: "https://nptel.ac.in/noc/Ecertificate/?q=NPTEL21CS03S24152626107442",
  },
  {
    logo: "./assets/images/companyLogo/nptel-logo.png",
    name: "Database Management System",
    instructor: "Prof. Partha Pratham",
    institute: "IIT KHARAGPUR",
    link: "https://nptel.ac.in/noc/Ecertificate/?q=NPTEL21CS58S2408070003014693",
  },
  {
    logo: "./assets/images/companyLogo/nptel-logo.png",
    name: "Design And Analysis Of Algorithm",
    instructor: "Prof. Madhavan Mukund",
    institute: "Chennai Mathematical Institute",
    link: "https://nptel.ac.in/noc/Ecertificate/?q=NPTEL21CS68S3416020803114985",
  },
  {
    logo: "./assets/images/companyLogo/nptel-logo.png",
    name: "Operating System Fundamentals",
    instructor: "Prof. Santanu Chattopadhyay",
    institute: "IIT KHARAGPUR",
    link: "https://nptel.ac.in/noc/Ecertificate/?q=NPTEL21CS88S4416095103114985",
  },
  {
    logo: "./assets/images/companyLogo/uc-davis2.png",
    name: "Introduction To Web Development",
    instructor: "Daniel Randall",
    institute: "University of California, Davis",
    link: "https://www.coursera.org/account/accomplishments/certificate/XSY2FKXGNTT9",
  },
  {
    logo: "./assets/images/companyLogo/free-code-camp.png",
    name: "Responsive Web Design",
    instructor: "Self-Paced",
    institute: "FreeCodeCamp",
    link: "https://www.freecodecamp.org/certification/fcc505c63a5-ba83-4e98-b891-a6fd81eee7f1/responsive-web-design",
  },
  {
    logo: "./assets/images/companyLogo/linkedin.png",
    name: "Javascript Essential Training",
    instructor: "Morten Rand Hendriksen",
    institute: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning/certificates/42bf77ca6b369aef02258b118f9cf4823a9397ed287e3f6cc7f5415ad2c11dca?trk=share_certificate",
  },
  {
    logo: "./assets/images/companyLogo/Udemy_logo.png",
    name: "NodeJS Project Course",
    instructor: "John Smilga",
    institute: "Udemy",
    link: "https://www.udemy.com/certificate/UC-eacd43bb-b9c8-4b49-b1fe-dc8ba1447564/",
  },
  {
    logo: "./assets/images/companyLogo/cisco-networking-academy.png",
    name: "IT Essentials",
    instructor: "Self-Paced",
    institute: "Cisco Networking Academy",
    link: "https://www.credly.com/earner/earned/badge/f290dfd8-a812-432f-96aa-80c0ff35de9f",
  },
  {
    logo: "./assets/images/companyLogo/cisco-networking-academy.png",
    name: "CCNA: Introduction to Network",
    instructor: "Self-Paced",
    institute: "Cisco Networking Academy",
    link: "https://www.credly.com/earner/earned/badge/5b38f1f6-b502-401f-aa28-6c0613eaafbf",
  },
  {
    logo: "./assets/images/companyLogo/ict-Academy.jpeg",
    name: "Core Java",
    instructor: "Mukesh Kumar",
    institute: "E & ICT Academy, IIT Kanpur",
    link: "https://ict-certificates.s3.ap-south-1.amazonaws.com/34962-417388-5ea1ccf45cc909fc.pdf",
    bg: "white",
  },
  {
    logo: "./assets/images/companyLogo/ict-Academy.jpeg",
    name: "Android with Core Java",
    instructor: "Mukesh Kumar",
    institute: "E & ICT Academy, IIT Kanpur",
    link: "https://ict-certificates.s3.ap-south-1.amazonaws.com/34962-417386-222a12f7eab182f8.pdf",
    bg: "white",
  },
];

const certificationList = document.querySelector(".certification__list");

function populate() {
  certificates.forEach((certificate) => {
    certificationList.innerHTML += `
    <a href=${certificate.link} target="_blank">
      <div class="certification__item">
          <div class="certification__logo" style="background-color:  ${
            certificate.bg ? certificate.bg : randomColor() + "99"
          }">
            <img src=${certificate.logo} alt=${certificate.name} />
          </div>
          <div class="certification__text">
            <h3>${certificate.name}</h3>
            <h4>${certificate.instructor}</h4>
            <h5>${certificate.institute}</h5>
          </div>
        </div>
    </a>
    `;
  });
}
populate();

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
