import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';

function InfoCard() {
    return (
      <Container>
        <Row className="py-3">
          <Card className="text-center py-3">
            <Card.Title>
              Take a coffee break and get some inspiration.
            </Card.Title>
            <Card.Subtitle>
              Browse your favorite quotes from The Office, courtesy of{" "}
              <a href="https://www.officeapi.dev/" target="_blank">
                The Office API
              </a>
              .
            </Card.Subtitle>
          </Card>
        </Row>
      </Container>
    );
}

export default InfoCard;