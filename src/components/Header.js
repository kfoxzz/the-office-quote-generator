import React from "react";
import { Image, Col, Jumbotron } from "react-bootstrap";

function Header(props) {
  return (
    <Jumbotron className="header bg-white d-flex align-items-center pt-2 px-2 border border-2 m-2">
      <Col className="flex-shrink-0 px-3 mx-auto">
        <Image
          fluid
          src="assets/TheOffice-59.svg"
          alt="The Office"
          style={{ width: "150px" }}
        />
      {/* </Col>
      <Col xs={6} sm={3} className="flex-shrink-0 px-3"> */}
        <Image
          fluid
          src="assets/the-office-logo.jpeg"
          alt="The Office"
          style={{ width: "150px" }}
        />
      </Col>
      <Col className="flex-grow-1 text-center">
        <h1>Keep It Simple, Stupid.</h1>
      </Col>
    </Jumbotron>
  );
}

export default Header;
