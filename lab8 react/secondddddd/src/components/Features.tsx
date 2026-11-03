import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export default function Features(): React.JSX.Element {
  const featureList: Feature[] = [
    {
      icon: '⚡',
      title: 'Fast UI Delivery',
      desc: 'Clean, responsive interfaces built for speed, clarity, and seamless user journeys.'
    },
    {
      icon: '🎨',
      title: 'Polished Design',
      desc: 'Modern visual systems that balance aesthetics with usability across every screen.'
    },
    {
      icon: '🧠',
      title: 'Strong Problem Solving',
      desc: 'Thoughtful frontend decisions rooted in usability, accessibility, and scalable architecture.'
    },
    {
      icon: '📈',
      title: 'Growth-Focused Builds',
      desc: 'Landing pages and product experiences designed to engage users and drive action.'
    }
  ];

  return (
    <section className="features-generic" id="features">
      <Container>
        <div className="text-center mb-5">
          <h2>Why work with me</h2>
          <p>Modern solutions shaped for performance, clarity, and impact.</p>
        </div>

        <Row className="g-4">
          {featureList.map((item) => (
            <Col key={item.title} md={6} lg={3}>
              <Card className="feature-card-generic h-100">
                <Card.Body>
                  <div className="feature-icon-generic">{item.icon}</div>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
