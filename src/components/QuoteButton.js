import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

function QuoteButton(props) {

  function generateQuote() {
    props.updateLoading();
    fetch("https://gentle-bar-e17d.kfoxz.workers.dev")
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request failed!");
        },
        (networkError) => {
          console.log(networkError.message);
        }
      )
      .then((jsonResponse) => {
        props.updateQuote(jsonResponse);
        return jsonResponse;
      });
  }

  return (
    <Container>
      <Row className="justify-content-center py-3">
        <Col xs={12} sm={8} md={6}>
          <div className="d-grid gap-2">
            <Button variant="dark" size="lg" onClick={generateQuote}>
              Click Me
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default QuoteButton;
