import React from 'react';
import {Jumbotron, Container, Row, Col} from 'reactstrap';
import { useContext } from 'react';
import { AuthContext } from '../../App';

const AboutComp = () => {

    return (
        <div>
            <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">BECERIN</h1>
                            <p className="lead">Adalah aplikasi penjualan inventory Buah Online</p>
                            <p className="text-info">Created by: Eva Ratna Palupi</p>
                        </Container>
            </Jumbotron>
        
        </div>
    );
}

export default AboutComp;
