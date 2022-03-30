import React from "react";
import { Container, Row } from "react-bootstrap";
import homeLogo from "../../Assets/Formal_Pic.JPG";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">

        <Row md={5} className="home-header-image" style={{ paddingBottom: 20, alignSelf: 'center'}}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "850px",borderRadius: 100/ 2, alignSelf: 'center' }}
              />
            </Row>

          <Row>
            <Row md={7} className="home-header-greeting">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
              </h1>
            </Row>

            

            <Row md={7} className="home-header-name">
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Mugared Khalifa</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "center" }}>
                <Type />
              </div>
            </Row>

            
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
