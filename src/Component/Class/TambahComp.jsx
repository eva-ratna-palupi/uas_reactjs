import React, { Component } from 'react';
import axios from "axios";
import { Container, Col, Row, FormGroup, Alert, Label, Input, Button, Form } from 'reactstrap';

const api = 'http://localhost:3001'

class TambahComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_produk: '',
            nama: '',
            jumlah: '',
            harga: '',
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    AddProduk = () => {
        axios.post(api + '/tambah', {
            id_produk: this.state.id_produk,
            nama: this.state.nama,
            jumlah: this.state.jumlah,
            harga: this.state.harga
        }).then(json => {
            if (json.data.status === 200) {
                console.log(json.data.value)
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
            else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }

    render() {
        return (
            <Container>
                <h4>Form Tambah Data Barang </h4>
                <Alert color="warning" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label>ID</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="id_produk" value={this.state.id_produk} onChange={this.handleChange} placeholder="Masukan ID" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Label>Nama</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Masukan Nama" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Stok</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="jumlah" value={this.state.jumlah} onChange={this.handleChange} placeholder="Masukan Stok" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Harga</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="harga" value={this.state.harga} onChange={this.handleChange} placeholder="Masukan Harga" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button type="button" color="warning" onClick={this.AddProduk}>Submit</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }
}

export default TambahComp;
