import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
        <Row>
          {/* <Col md={8} className="home-about-description"> */}
            <h1 style={{ fontSize: "2.6em" }}>
              A little bit about me... 
            </h1>
            <p className="home-about-body">
              I am currently a graduate student pursuing an MS in CS at UC Irvine, specializing in Machine Learning.
              <br /> At the same time, I am a Software Engineer Co-Op at Skyworks Inc., where I work on developing cloud services on Azure.
              <br /> Before pursuing my MS, I graduated from UC Irvine with a major in Computer Science and Engineering and worked with Embedded Systems
              <br /> I have a passion for working on Machine Learning projects, and I dabble with Kaggle.
              <br /> I also have a passion for working with Embedded Systems, especially in the field of Biology/Medicine.

            </p>
          {/* </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to connect with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mogokhalifa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mugared-khalifa/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
    </Container>
  );
}
export default Home2;
