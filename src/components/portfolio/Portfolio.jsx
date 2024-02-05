import React from 'react';
import IMG1 from '../../assets/goldcalculator.png';
import IMG2 from '../../assets/todolist.png';
import IMG3 from '../../assets/axios-crud.png';
import IMG4 from '../../assets/shopingcart.png';
import IMG5 from '../../assets/url-shortener.png';
import IMG6 from '../../assets/library.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Gold Rate Calulator',
      img: IMG1,
      description:
        'The Gold Rate Calculator simplifies tracking and checking current gold prices, catering to both investors and those curious about the market. Easy to use and navigate, it is your go-to tool for quick and convenient rate assessments.',
      technologies: 'ReactJs,NodeJs,MongoDB | CSS',
      link: 'https://gold-rate-calculator-frontend.vercel.app/',
      github: 'https://github.com/RamyaSanthi-27/gold-rate-calculator-frontend',
    },
    {
      id: 2,
      title: 'Shopping Cart',
      img: IMG4,
      description:
        'Shopping Cart app that provides information about available products and their details',
      technologies: 'React | Redux',
      link: 'https://react-redux-guvi.vercel.app/',
      github: 'https://github.com/RamyaSanthi-27/react-redux',
    },
    {
      id: 3,
      title: 'To-Do App',
      img: IMG2,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'React | NodeJs',
      link: 'https://todo-task-guvi.vercel.app/',
      github: 'https://github.com/RamyaSanthi-27/TodoTask',
    },
    {
      id: 4,
      title: 'Axios-Crud',
      img: IMG3,
      description:
        'The Axios CRUD in React empowers developers to seamlessly integrate Create, Read, Update, and Delete (CRUD) functionality into their applications. ',
      technologies: 'React | Axios',
      link: 'https://axios-crudtask.vercel.app/',
      github: 'https://github.com/RamyaSanthi-27/axios-crudtask',
    },
    {
      id: 5,
      title: 'URL-Shortener',
      img: IMG5,
      description:
        'The URL Shortener condenses lengthy links for simplicity and convenience, providing users with shortened, shareable URLs effortlessly.',
      technologies: 'React | Bootstrap',
      link: 'https://url-shortener-front-end-psi.vercel.app/',
      github: 'https://github.com/RamyaSanthi-27/url-shortener-front-end',
    },
    {
      id: 6,
      title: 'Books Library',
      img: IMG6,
      description:
        'The Books Library, enhanced with React Formik, seamlessly integrates a user-friendly form experience for efficient input and management of book-related data, offering a smooth and interactive interface.',
      technologies: 'React Js | Formik',
      link: 'https://library-formik.vercel.app/',
      github: 'https://github.com/RamyaSanthi-27/library-formik',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
