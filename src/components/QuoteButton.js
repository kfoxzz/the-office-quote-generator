import axios from "axios";
import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";

function QuoteButton(props) {
  function generateQuote() {
    axios
      .get("https://officeapi.dev/api/quotes/random/")
      .then((res) => {
        props.updateQuote(res.data);
      })
      .catch((err) => console.log(err));
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
