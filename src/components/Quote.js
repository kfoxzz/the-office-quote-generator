import React, { useEffect } from "react";
import { Row, Container, Card, Col } from "react-bootstrap";
import { IMAGES } from "../store/store";
import Spinner from "./Spinner";

function Quote(props) {
  const { quote, loading } = props;

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
            {loading ? (
              <Spinner />
            ) : (
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
            )}
            {/* <Card className="p-4">
                  <Card.Title>"{quote.data.content}"</Card.Title>
                  <Card.Subtitle className="text-end pb-3">
                    <em>
                      - {quote.data.character.firstname}{" "}
                      {quote.data.character.lastname}
                    </em>
                  </Card.Subtitle>
                  {randomImage()}
                </Card> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Quote;
