import React from 'react';
import {Jumbotron, Container, Row, Col} from 'reactstrap';

const DetailComp = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">{props.location.state.judul}</h1>
                            <p className="lead">{props.location.state.tanggal}</p>
                            <p className="text-info">Created by: Eva Ratna Palupi</p>
                        </Container>
            </Jumbotron>
        </div>
    );
}

export default DetailComp;
