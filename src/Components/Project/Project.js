/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Project.css";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import transition from "../../transition";

import ProjectImg from "../../Images/project-1.png";

const Project = () => {
  return (
    <>
      <div className="bg"></div>

      <Link to="/">
        <motion.div
          className="backButton"
          initial={{
            scale: 0,
            transition: { duration: 1, ease: [0.83, 0, 0.17, 1], delay: 1.5 },
          }}
          animate={{
            scale: 1,
            transition: {
              duration: 1.5,
              ease: [0.83, 0, 0.17, 1],
              delay: 0.5,
            },
          }}
        >
          <div className="back">
            <p>&#8592;</p>
          </div>
        </motion.div>
      </Link>
      <div className="project-container">
        <div className="project-info">
          <motion.div
            className="project-img"
            initial={{
              clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              transition: {
                duration: 0.15,
                ease: [0.83, 0, 0.17, 1],
                delay: -0.1,
              },
            }}
            animate={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              transition: {
                duration: 1.75,
                ease: [0.83, 0, 0.17, 1],
                delay: -0.1,
              },
            }}
          >
            <motion.img
              src={ProjectImg}
              alt=""
              initial={{
                scale: 1.5,
                transition: {
                  duration: 0.15,
                  ease: [0.83, 0, 0.17, 1],
                  delay: 0,
                },
              }}
              animate={{
                scale: 1,
                transition: {
                  duration: 1.75,
                  ease: [0.83, 0, 0.17, 1],
                  delay: 0,
                },
              }}
            />
          </motion.div>
          <motion.div
            className="project-description"
            initial={{
              x: -40,
              opacity: 0,
              transition: {
                duration: 1,
                ease: [0.83, 0, 0.17, 1],
                delay: 0.25,
              },
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.5,
                ease: [0.83, 0, 0.17, 1],
                delay: 0.25,
              },
            }}
          >
            <p>
              <b>Project-1</b>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              nobis itaque laboriosam! Temporibus esse eius iusto voluptatum
              maiores at asperiores, quo quos omnis delectus cumque consequuntur
              provident dolores minus tenetur quisquam rem odit. Aut unde velit
              sint natus recusandae eos! Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </motion.div>
        </div>
        <div className="footer">
          <motion.div
            className="divider"
            initial={{
              width: 0,
              transition: {
                duration: 1,
                ease: [0.83, 0, 0.17, 1],
                delay: 1,
              },
            }}
            animate={{
              width: "100%",
              transition: {
                duration: 1.5,
                ease: [0.83, 0, 0.17, 1],
                delay: 1,
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
                delay: 0.5,
              },
            }}
          >
            <div className="footer-col">
              <div className="arrow">
                <p>&darr;</p>
              </div>
              <div className="arrow">
                <p>&darr;</p>
              </div>
            </div>
            <div className="footer-col">
              <p>
                (category)
                <br /> portfolio design
              </p>
            </div>
            <div className="footer-col">
              <p>
                (Project) <br />{" "}
                <a href="#" target="_blank" rel="noreferrer">
                  project link
                </a>
              </p>
            </div>
            <div className="footer-col">
              <p>
                (next) <br /> <a href="/project-2">project-2</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default transition(Project);
