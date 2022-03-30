import React from "react";
import Card from "react-bootstrap/Card";
import { HiArrowRight } from "react-icons/hi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am Mugared Khalifa, and I live in Irvine, California
            <br />
            As much as I love coding, I also have a few hobbies I like to do!
          </p>
          <ul>
            <li className="about-activity">
              <HiArrowRight /> Making lattes at home( a little more about that to follow)
            </li>
            <li className="about-activity">
              <HiArrowRight /> Visiting the beach
            </li>
            <li className="about-activity">
              <HiArrowRight /> Playing tennis
            </li>
          </ul>
          <br />
          <br />
          <p style={{ textAlign: "justify" }}> Small Digression...
          <br /> I am a coffee fanatic, and recently I started making Espresso after finding a great deal on an Espresso machine.
          <br /> One of the lessons I learned when making Espresso is that the grinder is the most important part of it, and that I need one that allows me to the beans as fine as I can. At the time,
          <br /> I had a grinder that barely grinded at the fineness level I wanted, so I 'hacked' it by taking it apart and adjusting the grind sets to be able to grind fine enough then putting it back together.
          <br /> After getting great tasting Espresso, I started making lattes, and started practicing latte art. I found it challenging at first, but then I got the hang of it after more and more practice, and was able to draw nicer patters like the one below.
          <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
