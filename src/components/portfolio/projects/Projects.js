import React from 'react'
import project1 from '../../../images/food-cost-io.png'
import project2 from '../../../images/order-io.png'
import project3 from '../../../images/static-web-combo.png'
import project4 from '../../../images/calorie-counter-react.png'
import ScrollAnimation from 'react-animate-on-scroll'
const projects = () => {
  return (
    <div className="projects">
      <br />
      <br />
      <div className="main-col-width ">
        <h1>Projects</h1>
        Below you can see some projects I've been working on lately.
      </div>

      <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
        <div className="project">
          <div className="project-title">
            <h2>React Calorie Counter</h2>
            <small>Assessment project</small>
          </div>
          <div className="project-details">
            <div className="project-image">
              <img
                className="react-calorie-image"
                src={project4}
                alt="react calorie calculator"
              />
            </div>

            <div className="description">
              <div className="project-type">
                <small>react / nutrition-ix API </small>
              </div>
              <br />
              <div className="project-text">
                <p>
                  A small calorie calculator using react, integrating with the
                  nutritionix api. <br />
                  <br />I Implemented: Search, Ingredient Nutrients look up ,add
                  ingredient to daily intake list and a selected meal time,
                  calculate calories vs daily calorie goal.
                </p>
              </div>
              <div className="toolbar">
                <a
                  className="button"
                  href="https://mark-mansfield.github.io/react-calorie-calculator/"
                  alt="link to project"
                  title="link to project"
                  target="_blank"
                >
                  View project
                </a>
                <a
                  className="button"
                  href="https://github.com/mark-mansfield/react-calorie-calculator"
                  alt="link to git hub"
                  title="link to git hub"
                  target="_blank"
                >
                  GIT HUB
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
        <div className="project">
          <div className="project-title">
            <h2>Food-costs.io</h2>
            <small>Personal Project</small>
          </div>
          <div className="project-details">
            <div className="project-image">
              <img src={project1} alt="food costing project image" />
            </div>

            <div className="description">
              <div className="project-type">
                <small>angular / node.js / express / mongodb / material</small>
              </div>
              <br />
              <div className="project-text">
                <p>
                  Web app delivering features for detailed data gathering, food
                  costing, menu management. <br />
                  <br />I implemented: custom authentication / authorization,
                  search, crud, data imports, list management, all css, html ,
                  backend
                </p>
              </div>
              <div className="toolbar">
                <a
                  className="button"
                  href="http://food.cost.io.s3-website-ap-southeast-2.amazonaws.com/login"
                  alt="link to project"
                  title="link to project"
                  target="_blank"
                >
                  View project
                </a>
                <a
                  className="button"
                  href="https://github.com/mark-mansfield/food-cost.io-v2/tree/develop"
                  alt="link to git hub"
                  title="link to git hub"
                  target="_blank"
                >
                  GIT HUB
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
        <div className="project">
          <div className="project-title">
            <h2>Gatsby React Restaurant Website</h2>
            <small>A fictitious static website project</small>
          </div>
          <div className="project-details">
            <div className="project-image">
              <img src={project3} alt="project image" />
            </div>

            <div className="description">
              <div className="project-type">
                <small>react / gatsby / graphQL / google maps </small>
              </div>
              <br />
              <div className="project-text">
                <p>
                  An example of a static website built for a restaurant.
                  <br />
                  <br />I implemented: lazy loading of images using graphQL
                  queries, css transforms, google maps , sticky nav, material
                  calendar component, modal windows, smooth window scroll
                  behavior, responsiveness
                </p>
              </div>
              <div className="toolbar">
                <a
                  className="button"
                  href="https://mark-mansfield.github.io/portfolio-static-website/"
                  alt="link to project"
                  title="link to project"
                  target="_blank"
                >
                  View project
                </a>
                <a
                  className="button"
                  href="https://github.com/mark-mansfield/portfolio-static-website/tree/develop"
                  alt="link to git hub"
                  title="link to git hub"
                  target="_blank"
                >
                  GIT HUB
                </a>
                <a
                  className="button"
                  href="https://trello.com/b/ZpzyzuFj/brown-sugar-website"
                  alt="link to trello board"
                  title="link to trello board"
                  target="_blank"
                >
                  Trello Board
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
        <div className="project">
          <div className="project-title">
            <h2>Orders.io</h2>
            <small>personal project</small>
          </div>
          <div className="project-details">
            <div className="project-image">
              <img src={project2} alt="orders project image" />
            </div>

            <div className="description">
              <div className="project-type">
                <small>
                  angular / node.js / express / mongodb / material design
                </small>
              </div>
              <br />
              <div className="project-text">
                <p>
                  Web app delivering features for order creation, and generating
                  production run-sheets. <br />
                  <br />I implemented: authentication/ authorization, CRUD ,
                  search with filters, data import, all css, html , backend
                </p>
              </div>
              <div className="toolbar">
                <a
                  className="button"
                  href="http://orders-project.s3-website-ap-southeast-2.amazonaws.com/login"
                  alt="link to project"
                  title="link to project"
                  target="_blank"
                >
                  View project
                </a>
                <a
                  className="button"
                  href="https://github.com/mark-mansfield/orders-io/tree/develop"
                  alt="link to git hub"
                  title="link to git hub"
                  target="_blank"
                >
                  GIT HUB
                </a>
                <a
                  className="button"
                  href="https://trello.com/b/uBxKUMdE/orders-project"
                  alt="link to git hub"
                  title="link to git hub"
                  target="_blank"
                >
                  Trello Board
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}
export default projects
