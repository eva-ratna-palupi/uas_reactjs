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
            <Container>
                <Row>
                    <Col><CardComp id="1" judul="Belajar web" tanggal = "11 Juni 2020"/></Col>
                
               
                    <Col><CardComp id="2" judul="Belajar Tutorial" tanggal = "12 Juni 2020"/></Col>
                
               
                    <Col><CardComp id="3" judul="Belajar Apa aja" tanggal = "13 Juni 2020"/></Col>
                
                </Row>
            </Container>
        
        </div>
    );
}

export default AboutComp;
