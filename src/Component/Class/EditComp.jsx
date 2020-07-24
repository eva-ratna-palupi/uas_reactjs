import React, { Component } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'

const api = 'http://localhost:3001'

class EditComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_produk: this.props.location.state.id_produk,
            nama: this.props.location.state.nama,
            jumlah: this.props.location.state.jumlah,
            harga: this.props.location.state.harga,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    ubahProduk = (id_produk) => {
        const data = qs.stringify({
            id_produk: id_produk,
            nama: this.state.nama,
            jumlah: this.state.jumlah,
            harga: this.state.harga,

        });
        axios.put(api + '/api/v1/ubah-produk', data)
            .then(json => {
                if (json === 200) {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                } else {
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
                <h4>Form Ubah Data</h4>
                <Alert color="primary" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form classname="form">
                    <Col>
                        <Label>Nama</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Masukan Nama" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Jumlah</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="jumlah" value={this.state.jumlah} onChange={this.handleChange} placeholder="Masukan Jumlah" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Jurusan</Label>
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
                                    <Button type="button" onClick={() => this.ubahProduk(this.state.id_produk)}>Update</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        )
    }
}

export default EditComp