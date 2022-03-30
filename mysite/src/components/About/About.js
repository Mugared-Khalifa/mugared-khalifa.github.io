import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import latte from '../../Assets/Latte.JPG';


function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Get to know me more...
            </h1>
            <Aboutcard />
          </Col>

          <Col
            md={8}
            style={{
              justifyContent: "right",
              paddingTop: "1px",
              paddingBottom: "50px",
            }}
          >
            <img
                src={latte}
                alt="home pic"
                className="latte-img"
                style={{ maxHeight: "350px",borderRadius: 10/ 2, alignSelf: 'right' }}
              />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional  Skillset
        </h1>

        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
