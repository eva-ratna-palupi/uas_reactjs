import React from 'react'
import './CSS/Produk.css'
import { Button, Card, Col, CardTitle, Row, CardBody, CardImg } from 'reactstrap'


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
                <Row>
                    <Col sm="3">
                        <Card body>
                            <CardTitle>{this.props.nama}</CardTitle>
                        <img width="100%" src={this.props.img} alt="" />
                        <p><b>Rp. {this.props.harga} /kg</b></p>
                            <p>Stok : {this.state.stock}</p>
                            <p><Button outline color="success" className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</Button>        {this.state.status}</p>
                            </Card>
            </Col>
            </Row>
            </div >

        )
    }
}

export default Produk;