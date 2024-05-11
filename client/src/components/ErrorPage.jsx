import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ErrorPage = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">404 - Page Not Found</Card.Title>
              <Card.Text className="text-center">
                The page you are looking for does not exist.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
