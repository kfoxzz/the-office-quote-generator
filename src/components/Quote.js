import React from "react";
import { Row, Container, Card, Col } from "react-bootstrap";
import { IMAGES } from "../store/store";
import { Animated } from "react-animated-css";

function Quote(props) {
  const { quote } = props;

  function randomImage() {
    const imageIndex = Math.floor(Math.random() * 15);
    return <Card.Img src={IMAGES[imageIndex].src} alt="The Office" />;
  }

  if (!quote) {
    return <div></div>;
  } else {
    return (
        <Container key={quote} className="my-4">
          <Row className="justify-content-center">
            <Col xs={12} lg={8}>
              <Card className="p-4">
                <Card.Title>"{quote.data.content}"</Card.Title>
                <Card.Subtitle className="text-end pb-3">
                  <em>
                    - {quote.data.character.firstname}{" "}
                    {quote.data.character.lastname}
                  </em>
                </Card.Subtitle>
                {randomImage()}
              </Card>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default Quote;
