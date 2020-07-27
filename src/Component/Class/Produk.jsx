import React from 'react'
import './CSS/Produk.css'
import { Button, Card, CardTitle, CardBody, CardImg, Col, Row, Container } from 'reactstrap'
import anggur from '../Gambar/anggur.jpg'
import apel from '../Gambar/apple.jpg'
import avocado from '../Gambar/avocado.jpg'
import banana from '../Gambar/banana.jpg'
import bery from '../Gambar/berry.jpg'
import dragon from '../Gambar/dragon-fruit.jpg'
import jeruk from '../Gambar/jeruk.jpg'
import kiwi from '../Gambar/kiwi.jpg'
import lemon from '../Gambar/lemon.jpg'
import mangga from '../Gambar/manggo.jpg'
import pepaya from '../Gambar/papaya.jpg'
import nanas from '../Gambar/pineapple.jpg'
import strawbery from '../Gambar/strawberries.jpg'
import semangka from '../Gambar/watermelon.jpg'


class Produk extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            stock: [10,20,30,15,17,18,19,22,23,24,25,15,35,37,23,15],
            sub: "Beli",
            status: "Tersedia",
            disabled: false

        }
    }
    ButtonBeli = () => {
        this.setState({
            stock: this.state.stock -1
        })

        if(this.state.stock ===1){
            this.setState({
                status: "Habis",
                disabled: true
            })
        }
    }

    render() {
        return (
            <div>
                <Container className="themed-container" fluid={true}>
                    <br />
                    <Row xs="3">
                        <Col>
                            <Card>
                                <CardImg top width="100%" src={anggur} />
                                <CardBody>
                                    <CardTitle>Anggur California</CardTitle>
                                    <p><b>Rp. 35.500 /kg</b></p>
                                    <p>Stok : {this.state.stock[0]}</p>
                                    <p><Button outline color="success" className="btn-click" onClick={this.ButtonBeli[0]} disabled={this.state.disabled}>Beli</Button>        {this.state.status}</p>
                                </CardBody>
                            </Card><br /><br />
                        </Col>

                        <Col>
                            <Card>
                                <CardImg top width="100%" src={apel} />
                                <CardBody>
                                    <CardTitle>Apel Hijau</CardTitle>
                                    <p><b>Rp. 20.000 /kg</b></p>
                                    <p>Stok : {this.state.stock[1]}</p>
                                    <p><Button outline color="success" className="btn-click" onClick={this.ButtonBeli[1]} disabled={this.state.disabled}>Beli</Button>        {this.state.status}</p>
                                </CardBody>
                            </Card><br /><br />
                        </Col>

                        <Col>
                            <Card>
                                <CardImg top width="100%" src={avocado} />
                                <CardBody>
                                    <CardTitle>Alpukat</CardTitle>
                                    <p><b>Rp. 28.000 /kg</b></p>
                                    <p>Stok : {this.state.stock[2]}</p>
                                    <p><Button outline color="success" className="btn-click" onClick={this.ButtonBeli[2]} disabled={this.state.disabled}>Beli</Button>        {this.state.status}</p>
                                </CardBody>
                            </Card><br /><br />
                        </Col>

                        <Col>
                            <Card>
                                <CardImg top width="100%" src={banana} />
                                <CardBody>
                                    <CardTitle>Pisang</CardTitle>
                                    <p><b>Rp. 15.500 /kg</b></p>
                                    <p>Stok : {this.state.stock[3]}</p>
                                    <p><Button outline color="success" className="btn-click" onClick={this.ButtonBeli[0]} disabled={this.state.disabled}>Beli</Button>        {this.state.status}</p>
                                </CardBody>
                            </Card><br /><br />
                        </Col>

                        <Col>
                            <Card>
                                <CardImg top width="100%" src={bery} />
                                <CardBody>
                                    <CardTitle>Berry Ungu</CardTitle>
                                    <p><b>Rp. 25.500 /kg</b></p>
                                    <p>Stok : {this.state.stock[4]}</p>
                                    <p><Button outline color="success" className="btn-click" onClick={this.ButtonBeli[0]} disabled={this.state.disabled}>Beli</Button>        {this.state.status}</p>
                                </CardBody>
                            </Card><br /><br />
                        </Col>

                        <Col>
                            <Card>
                                <CardImg top width="100%" src={dragon} />
                                <CardBody>
                                    <CardTitle>Buah Naga</CardTitle>
                                    <p><b>Rp. 18.500 /kg</b></p>
                                    <p>Stok : {this.state.stock[5]}</p>
                                    <p><Button outline color="success" className="btn-click" onClick={this.ButtonBeli[0]} disabled={this.state.disabled}>Beli</Button>        {this.state.status}</p>
                                </CardBody>
                            </Card><br /><br />
                        </Col>

                        <Col>
                            <Card>
                                <CardImg top width="100%" src={jeruk} />
                                <CardBody>
                                    <CardTitle>Jeruk</CardTitle>
                                    <p><b>Rp. 12.500 /kg</b></p>
                                    <p>Stok : {this.state.stock[6]}</p>
                                    <p><Button outline color="success" className="btn-click" onClick={this.ButtonBeli[0]} disabled={this.state.disabled}>Beli</Button>        {this.state.status}</p>
                                </CardBody>
                            </Card><br /><br />
                        </Col>

                        <Col>
                            <Card>
                                <CardImg top width="100%" src={kiwi} />
                                <CardBody>
                                    <CardTitle>Kiwi Hijau</CardTitle>
                                    <p><b>Rp. 20.000 /kg</b></p>
                                    <p>Stok : {this.state.stock[7]}</p>
                                    <p><Button outline color="success" className="btn-click" onClick={this.ButtonBeli[0]} disabled={this.state.disabled}>Beli</Button>        {this.state.status}</p>
                                </CardBody>
                            </Card><br /><br />
                        </Col>

                        <Col>
                            <Card>
                                <CardImg top width="100%" src={lemon} />
                                <CardBody>
                                    <CardTitle>Lemon</CardTitle>
                                    <p><b>Rp. 20.000 /kg</b></p>
                                    <p>Stok : {this.state.stock[8]}</p>
                                    <p><Button outline color="success" className="btn-click" onClick={this.ButtonBeli[0]} disabled={this.state.disabled}>Beli</Button>        {this.state.status}</p>
                                </CardBody>
                            </Card><br /><br />
                        </Col>

                        <Col>
                            <Card>
                                <CardImg top width="100%" src={mangga} />
                                <CardBody>
                                    <CardTitle>Mangga</CardTitle>
                                    <p><b>Rp. 17.500 /kg</b></p>
                                    <p>Stok : {this.state.stock[9]}</p>
                                    <p><Button outline color="success" className="btn-click" onClick={this.ButtonBeli[0]} disabled={this.state.disabled}>Beli</Button>        {this.state.status}</p>
                                </CardBody>
                            </Card><br /><br />
                        </Col>

                        <Col>
                            <Card>
                                <CardImg top width="100%" src={pepaya} />
                                <CardBody>
                                    <CardTitle>Pepaya</CardTitle>
                                    <p><b>Rp. 10.000 /kg</b></p>
                                    <p>Stok : {this.state.stock[10]}</p>
                                    <p><Button outline color="success" className="btn-click" onClick={this.ButtonBeli[0]} disabled={this.state.disabled}>Beli</Button>        {this.state.status}</p>
                                </CardBody>
                            </Card><br /><br />
                        </Col>

                        <Col>
                            <Card>
                                <CardImg top width="100%" src={nanas} />
                                <CardBody>
                                    <CardTitle>Nanas</CardTitle>
                                    <p><b>Rp. 18.500 /kg</b></p>
                                    <p>Stok : {this.state.stock[11]}</p>
                                    <p><Button outline color="success" className="btn-click" onClick={this.ButtonBeli[0]} disabled={this.state.disabled}>Beli</Button>        {this.state.status}</p>
                                </CardBody>
                            </Card><br /><br />
                        </Col>

                        <Col>
                            <Card>
                                <CardImg top width="100%" src={strawbery} />
                                <CardBody>
                                    <CardTitle>Strawberry</CardTitle>
                                    <p><b>Rp. 30.500 /kg</b></p>
                                    <p>Stok : {this.state.stock[12]}</p>
                                    <p><Button outline color="success" className="btn-click" onClick={this.ButtonBeli[0]} disabled={this.state.disabled}>Beli</Button>        {this.state.status}</p>
                                </CardBody>
                            </Card><br /><br />
                        </Col>

                        <Col>
                            <Card>
                                <CardImg top width="100%" src={semangka} />
                                <CardBody>
                                    <CardTitle>Semangka</CardTitle>
                                    <p><b>Rp. 8.500 /kg</b></p>
                                    <p>Stok : {this.state.stock[13]}</p>
                                    <p><Button outline color="success" className="btn-click" onClick={this.ButtonBeli[0]} disabled={this.state.disabled}>Beli</Button>        {this.state.status}</p>
                                </CardBody>
                            </Card><br /><br />
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default Produk;