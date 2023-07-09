import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container className='mt-2'>
            <div className="text-center">
                <img src={logo} alt="The Dragon News logo" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={60} pauseOnHover className='text-secondary h6 fw-bold'>
                    Breaking News: Record-breaking Heatwave Sweeps Across the Globe, Temperature Soars, Climate Crisis Intensifies: Drastic Temperature Increase Raises Alarm, Scorching Heat Sets New Temperature Records, Experts Warn of Dire Consequences.
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;