import React from "react";
import { Container, Row } from "react-bootstrap";
import homePicture from "../../Assets/Formal_Pic.JPG";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">

          <Row>
            <Row md={7} className="home-header-greeting">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
              </h1>
            </Row>

        <Row className="home-header-image" >
          <div style={{ padding: 50, textAlign: "center", justifyContent:"center", alignItems:"center" }}>
            <img
                    src={homePicture}
                    alt="home pic"
                    className="my-image"
                    style={{ maxHeight: "650px",borderRadius: 100/ 2}}
            />
          </div>
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
