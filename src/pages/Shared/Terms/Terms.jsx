import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quo nobis praesentium cum earum voluptatem recusandae quae nemo animi fugit quos non tempora optio, labore fuga atque natus! Facere, aliquid.</p>
            <p>Go Back to <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;