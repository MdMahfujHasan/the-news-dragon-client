import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <div>
            <h6 className='fw-bold text-secondary'>Login with</h6>
            <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button variant="outline-dark"><FaGithub /> Login with GitHub</Button>

            <div className='my-4'>
                <h6 className='fw-bold text-secondary'>Find Us on</h6>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>

            <QZone></QZone>

            <div>
                <img src={bg} alt="Background image" />
            </div>
        </div>
    );
};

export default RightNav;