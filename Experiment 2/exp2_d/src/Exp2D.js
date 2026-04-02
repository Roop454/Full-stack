import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';

const Exp2D = () => {
  const [output, setOutput] = useState(''); // To show output
  const [clickCount, setClickCount] = useState(0); // Count clicks

  const handleClick = () => {
    setClickCount(clickCount + 1);
    setOutput(`🎉 You clicked the button ${clickCount + 1} times!`);
  };

  return (
    <Container className="mt-4">
      <Row>
        {/* Left Card */}
        <Col md={6} className="mb-3">
          <Card border="primary" className="shadow-sm hover-scale">
            <Card.Body>
              <Card.Title>Experiment 2D</Card.Title>
              <Card.Text>
                Click the button to see some magic happen!
              </Card.Text>
              <Button variant="primary" onClick={handleClick}>
                Click Me
              </Button>
              {output && <Alert variant="success" className="mt-3">{output}</Alert>}
            </Card.Body>
          </Card>
        </Col>

        {/* Right Card */}
        <Col md={6} className="mb-3">
          <Card bg="info" text="white" className="shadow-sm hover-scale">
            <Card.Body>
              <Card.Title>Creative Card</Card.Title>
              <Card.Text>
                This card can have fun interactive elements too!
              </Card.Text>
              <Button variant="light" onClick={() => alert('Hello! 👋')}>
                Say Hello
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Exp2D;
