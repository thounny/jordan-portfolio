/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import transition from "../../transition";

import Project1Img from "../../Images/project-1.png";
import Project2Img from "../../Images/project-2.png";
import Project3Img from "../../Images/project-3.png";
import Project4Img from "../../Images/project-4.png";
import Project5Img from "../../Images/project-5.png";

const Home = () => {
  // Function to scroll down one viewport height
  const scrollToDown = () => {
    const container = document.querySelector(".Home");
    container.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  // Function to scroll up one viewport height
  const scrollToUp = () => {
    const container = document.querySelector(".Home");
    container.scrollBy({
      top: -window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.div className="Home">
      <div className="bg"></div>
      <section className="hero">
        <div className="headers">
          <div className="header header-1">
            <h1>
              <motion.div
                initial={{
                  top: "7rem",
                  transition: {
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.25,
                  },
                }}
                animate={{
                  top: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.25,
                  },
                }}
                className="h1"
              >
                jordan smith
              </motion.div>
              <div className="h1-revealer"></div>
            </h1>
            <h1>
              <motion.div
                className="h1"
                initial={{
                  top: "7rem",
                  transition: {
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.1,
                  },
                }}
                animate={{
                  top: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.1,
                  },
                }}
              >
                &nbsp;full stack
              </motion.div>
              <div className="h1-revealer"></div>
            </h1>
            <h1>
              <motion.div
                className="h1"
                initial={{
                  top: "7rem",
                  transition: {
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    delay: 0.05,
                  },
                }}
                animate={{
                  top: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.83, 0, 0.17, 1],
                    delay: 0.05,
                  },
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dev.
              </motion.div>
              <div className="h1-revealer"></div>
            </h1>
          </div>
          <div className="header header-2">
            <h1>
              <motion.div
                className="h1"
                initial={{
                  top: "7rem",
                  transition: {
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.25,
                  },
                }}
                animate={{
                  top: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.25,
                  },
                }}
              >
                portfolio
              </motion.div>
              <div className="h1-revealer"></div>
            </h1>
            <h1>
              <motion.div
                className="h1"
                initial={{
                  top: "7rem",
                  transition: {
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.1,
                  },
                }}
                animate={{
                  top: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.1,
                  },
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2024&
              </motion.div>
              <div className="h1-revealer"></div>
            </h1>
            <h1>
              <motion.div
                className="h1"
                initial={{
                  top: "7rem",
                  transition: {
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    delay: 0.05,
                  },
                }}
                animate={{
                  top: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.83, 0, 0.17, 1],
                    delay: 0.05,
                  },
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2025.
              </motion.div>
              <div className="h1-revealer"></div>
            </h1>
          </div>
        </div>
        <div className="footer">
          <motion.div
            className="divider"
            initial={{
              width: 0,
              transition: {
                duration: 1,
                ease: [0.83, 0, 0.17, 1],
              },
            }}
            animate={{
              width: "100%",
              transition: {
                duration: 1.5,
                ease: [0.83, 0, 0.17, 1],
              },
            }}
          ></motion.div>
          <motion.div
            className="footer-content"
            initial={{
              y: 200,
              opacity: 0,
              transition: { duration: 1, ease: [0.83, 0, 0.17, 1], delay: 2 },
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 2,
                ease: [0.83, 0, 0.17, 1],
              },
            }}
          >
            <div className="footer-col">
              <div className="arrow" onClick={scrollToDown}>
                <p>&darr;</p>
              </div>
              <div className="arrow" onClick={scrollToDown}>
                <p>&darr;</p>
              </div>
            </div>
            <div className="footer-col">
              <p>
                application development student at <br /> Year Up United
              </p>
            </div>
            <div className="footer-col">
              <p>
                Developer Intern at <br /> Morgan Stanley
              </p>
            </div>
            <div className="footer-col">
              <p>
                2025 <br /> Jordan Smith
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="projects-nav">
        <div className="projects-nav-container">
          <div className="project-item">
            <Link to="/project">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src={Project1Img} alt="" />
                  </div>
                  <div className="project-name">
                    <h2>Project-1</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p>experience</p>
                  <p>/2022</p>
                </div>
                <div className="project-dir">
                  <p>&#8599;</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-item">
            <Link to="/project-2">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src={Project2Img} alt="" />
                  </div>
                  <div className="project-name">
                    <h2>Project-2</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p>development</p>
                  <p>/2023</p>
                </div>
                <div className="project-dir">
                  <p>&#8599;</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-item">
            <Link to="/project-3">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src={Project3Img} alt="" />
                  </div>
                  <div className="project-name">
                    <h2>Project-3</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p>portfolio</p>
                  <p>/2019</p>
                </div>
                <div className="project-dir">
                  <p>&#8599;</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-item">
            <Link to="/project-4">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src={Project4Img} alt="" />
                  </div>
                  <div className="project-name">
                    <h2>Project-4</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p>experience</p>
                  <p>/2021</p>
                </div>
                <div className="project-dir">
                  <p>&#8599;</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-item">
            <Link to="/project-5">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src={Project5Img} alt="" />
                  </div>
                  <div className="project-name">
                    <h2>Project-5</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p>development</p>
                  <p>/2018</p>
                </div>
                <div className="project-dir">
                  <p>&#8599;</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <section className="about">
        <div className="about-container">
          <div className="about-col">
            <p>(about me)</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              adipisci impedit harum, quia tenetur nulla minima illum
              consequuntur amet incidunt corrupti asperiores dicta fuga
              voluptatum ullam hic delectus ipsa autem quidem voluptate. Ipsum
              ratione nostrum facilis error, facere odit enim? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Consectetur, ab. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. A, fugit?
            </p>
          </div>
          <div className="about-col">
            <div className="socials">
              <a href="#">email &#8599;</a>
              <a href="#">github &#8599;</a>
              <a href="#">linkedin &#8599;</a>
            </div>
          </div>
        </div>
      </section>

      <div className="footer">
        <div className="divider"></div>
        <div className="footer-content">
          <div className="footer-col">
            <div className="arrow" onClick={scrollToUp}>
              <p>&#8593;</p>
            </div>
            <div className="arrow" onClick={scrollToUp}>
              <p>&#8593;</p>
            </div>
          </div>
          <div className="footer-col">
            <p>
              &copy; by <br />{" "}
              <a
                href="https://www.thounny.com"
                target="_blank"
                rel="noreferrer"
              >
                thounny
              </a>
            </p>
          </div>
          <div className="footer-col">
            <p>
              full stack <br /> developer
            </p>
          </div>
          <div className="footer-col">
            <p>
              2025 <br /> jordan smith
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default transition(Home);
