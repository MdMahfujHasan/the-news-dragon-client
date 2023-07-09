import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';

const EditorsInsight = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src={first} />
                    <Card.Body>
                        <Card.Title>New Study Reveals Positive Impact of Family Education on Children's Cognitive Development</Card.Title>
                        <Card.Text>
                            A recent research study highlights the significant benefits of family education on children, showing improved cognitive skills, enhanced memory, and increased creativity, emphasizing the importance of incorporating family programs in schools and communities.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={second} />
                    <Card.Body>
                        <Card.Title>Survey Shows Strong and Supportive Friendships Boost Mental Health and Well-being</Card.Title>
                        <Card.Text>
                            A comprehensive survey involving diverse age groups indicates that nurturing strong and supportive friendships plays a crucial role in promoting mental health and overall well-being, underscoring the importance of cultivating meaningful connections.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={third} />
                    <Card.Body>
                        <Card.Title>Record-Breaking Performance: Young Athlete Shatters Sports Milestone, Inspiring a Generation</Card.Title>
                        <Card.Text>
                            Record-Breaking Performance: Young Athlete Shatters Sports Milestone, Inspiring a Generation - A remarkable young athlete has achieved an extraordinary sports milestone, breaking long-standing records and captivating the attention of sports enthusiasts worldwide.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default EditorsInsight;