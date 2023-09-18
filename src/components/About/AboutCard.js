import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">KHALID GADUUDOW </span>
            from <span className="purple"> MOGADISHU, SOMALI.</span>
            <br />I am a final year Student at Jamhuriya University ()
            For iT.
            <br />
            Additionally, I am currently employed by Odoo as a Trainer at Softprime.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating Videos
            </li>
            <li className="about-activity">
              <ImPointRight /> joking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "don't compare yourself to others there is no comparison Between the sun and moon they shine when its their time Allah already know what,s gonna happen just do your work put you trush in Allah and be patient !"{" "}
          </p>
          <footer className="blockquote-footer">GADUUDOW</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
