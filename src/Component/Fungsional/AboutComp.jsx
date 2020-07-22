import React from 'react';
import {Jumbotron, Container, Row, Col} from 'reactstrap';
import CardComp from './CardComp';

const AboutComp = () => {
    return (
        <div>
            <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">About!</h1>
                            <p className="lead">Aplikasi Bengkel Online</p>
                            <p className="text-info">Created by: Eva Ratna Palupi</p>
                        </Container>
            </Jumbotron>
        
        </div>
    );
}

export default AboutComp;
