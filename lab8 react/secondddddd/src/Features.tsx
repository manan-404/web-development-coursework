
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
      title: 'Lightning Edge Routing',
      desc: 'Sub-millisecond static and dynamic request routing powered by globally distributed serverless points of presence.'
    },
    {
      icon: '🛡️',
      title: 'Automated Hardening',
      desc: 'Native DDoS mitigation, role-based access management, and automated TLS certificate rotation.'
    },
    {
      icon: '📊',
      title: 'Granular Metrics',
      desc: 'Real-time telemetry, memory profiling, and query performance insights visualized in a unified dashboard.'
    },
    {
      icon: '🧩',
      title: 'Bootstrap UI Integration',
      desc: 'Consistent visual design system built with responsive React-Bootstrap components and flexible 12-column layouts.'
    }
  ];

  return (
    <section className="features-generic" id="features">
      <Container>
        <div className="text-center mb-5">
          <h2 style={{ fontSize: '2.4rem', fontWeight: 700 }}>Platform Services</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Core foundational modules designed for rapid application engineering.
          </p>
        </div>
        <Row className="g-4">
          {featureList.map((item, index) => (
            <Col key={index} md={6} lg={3}>
              <Card className="feature-card-generic">
                <Card.Body>
                  <div className="feature-icon-generic">{item.icon}</div>
                  <Card.Title style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>
                    {item.title}
                  </Card.Title>
                  <Card.Text style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                    {item.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}