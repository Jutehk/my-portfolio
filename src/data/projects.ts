// src/data/projects.ts
import dashboardImg from '../assets/admindashboard.png';
import netflixImg from '../assets/netflixclone.jpeg';
import ecommerceImg from '../assets/ecommerce.png';

export const projects = [
  {
    title: "Admin Dashboard",
    description: "Responsive dashboard with analytics, charts and user roles",
    image: dashboardImg,
    link: "https://github.com/Jutehk/Admin-Dashboard.git",
    demo: "https://jutehk.github.io/Admin-Dashboard/",
  },
  {
    title: "Netflix Clone",
    description: " Netflix UI clone with Firebase auth and movie streaming via TMDB API.",
    image: netflixImg,
    link: "https://github.com/Jutehk/netflixclone.git",
    demo: "https://zetflixfront.netlify.app/",
  },
  {
    title: "E-commerce Website",
    description: "Modern e-commerce store with cart, checkout, product filters, and Stripe integration.",
    image: ecommerceImg,
    link: "https://github.com/Jutehk/E-commerce-website.git",
    demo: "https://jutehk.github.io/E-commerce-website/",
  },
];
