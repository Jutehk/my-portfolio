// src/data/projects.ts
import dashboardImg from "../assets/admindashboard.png";
import weatherimg from "../assets/weather.png";
import ecommerceImg1 from "../assets/ecommerce1.png";
import ecommerceImg2 from "../assets/ecommerce2.png";
import noteappimg from "../assets/noteapp.png";

export const projects = [
  {
    title: "Dashboard with Data Visualization",
    description:
      "React-based admin dashboard with responsive layout, real-time charts (Chart.js), and styled components for modern UI.",
    image: dashboardImg,
    link: "https://github.com/Jutehk/dashboard-with-data-visualization.git",
    demo: "https://dashvisualize.netlify.app/",
  },
  {
    title: "Weather App",
    description:
      "Built with React and OpenWeather API, displays live weather data with icons, temperature, wind, and humidity using REST fetch.",
    image: weatherimg,
    link: "https://github.com/Jutehk/weather-a.git",
    demo: "https://climet.netlify.app/",
  },
  {
    title: "E-commerce Website",
    description:
      "Responsive e-commerce site using React + TypeScript. Features product listing, filters, cart, and styled UI/UX design.",
    image: ecommerceImg1,
    link: "https://github.com/Jutehk/project.git",
    demo: "https://buynes.netlify.app/",
  },
  {
    title: "E-commerce Filter App",
    description:
      "React + TypeScript product filter app. Tested with **Jest** (unit/integration) and **Cypress** (E2E). Covers black-box, white-box, and decision-based testing.",
    image: ecommerceImg2,
    link: "https://github.com/Jutehk/ecommerce--App.git",
    demo: "https://ecommercefilterapp.netlify.app/",
  },
  {
    title: "Note Taking App",
    description:
      "JavaScript-based CRUD notes app with local storage. Tested with **Jest**, GitHub issues, and functional test reporting.",
    image: noteappimg,
    link: "https://github.com/Jutehk/Note-Taking-App.git",
    demo: "https://notetakingap.netlify.app/",
  },
];
