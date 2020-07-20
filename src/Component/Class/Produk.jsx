import React from 'react'
import './CSS/Produk.css'
import { Button, Card, CardDeck, CardTitle,  CardBody, CardImg, Col, Row } from 'reactstrap'


class Produk extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stok,
            sub: "Beli",
            status: "Tersedia",
            disabled: false

        }
    }
    ButtonBeli = () => {
        this.setState({
            stock: this.state.stock - 1
        })

        if (this.state.stock === 1) {
            this.setState({
                status: "Habis",
                disabled: true
            })
        }
    }

    render() {
        return (
            <div>
                <Row xs="3">
                <Col>
                    <Card>
                        
                        <CardImg top width="100%" src={this.props.img}/>
                        <CardBody>
                        <CardTitle>{this.props.nama}</CardTitle>
                        <p><b>Rp. {this.props.harga} /kg</b></p>
                        <p>Stok : {this.state.stock}</p>
                        <p><Button outline color="success" className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</Button>        {this.state.status}</p>
                        </CardBody>
                        
                    </Card><br/><br/>
            
            </Col>
            <Col>
                    <Card>
                        
                        <CardImg top width="100%" src={this.props.img}/>
                        <CardBody>
                        <CardTitle>{this.props.nama}</CardTitle>
                        <p><b>Rp. {this.props.harga} /kg</b></p>
                        <p>Stok : {this.state.stock}</p>
                        <p><Button outline color="success" className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</Button>        {this.state.status}</p>
                        </CardBody>
                        
                    </Card><br/><br/>
            
            </Col>
            <Col>
                    <Card>
                        
                        <CardImg top width="100%" src={this.props.img}/>
                        <CardBody>
                        <CardTitle>{this.props.nama}</CardTitle>
                        <p><b>Rp. {this.props.harga} /kg</b></p>
                        <p>Stok : {this.state.stock}</p>
                        <p><Button outline color="success" className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</Button>        {this.state.status}</p>
                        </CardBody>
                        
                    </Card><br/><br/>
            
            </Col>
            </Row>
            </div>

        )
    }
}

export default Produk;