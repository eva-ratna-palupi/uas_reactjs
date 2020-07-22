import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import {Link} from 'react-router-dom'

const api = 'http://localhost:3001'

class ListComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            tb_produk: [],
            response: '',
            display: 'none'

        }
    }
    componentDidMount() {
        axios.get(api + '/tampilproduk').then(res => {
            this.setState({
                tb_produk: res.data.values
            })
        })
    }

    DeleteProduk = (id_produk) => {
        const { tb_produk } = this.state
        const data = qs.stringify({
            id_produk: id_produk

        })

        axios.delete(api + '/hapus',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    tb_produk: tb_produk.filter(tb_produk => tb_produk.id_produk !== id_produk),
                    display: 'block'
                })
                this.props.history.push('/produk')
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
                <h2>Data Produk</h2>
                <NavLink href="/barang/tambah"><Button color="primary">Tambah Data</Button></NavLink>
                <Alert color="primary" style={{display: this.state.display}}>{this.state.response}</Alert>
                <hr />
                <Table className="table=bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nama</th>
                            <th>Stok</th>
                            <th>Harga</th>
                            <th>Aksi</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.tb_produk.map(tb_produk =>
                            <tr key={tb_produk.id_produk}>
                                <td>{tb_produk.id_produk}</td>
                                <td>{tb_produk.nama}</td>
                                <td>{tb_produk.jumlah}</td>
                                <td>{tb_produk.harga}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/barang/edit',
                                                state: {
                                                    id_produk: tb_produk.id_produk,
                                                    nama: tb_produk.nama,
                                                    jumlah: tb_produk.jumlah,
                                                    harga: tb_produk.harga
                                                }
                                            }
                                        }>
                                        <Button> Edit </Button>
                                        </Link>
                                        <span> </span>
                                        <Button onClick={() => this.DeleteProduk(tb_produk.id_produk)} color="danger"> Hapus </Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        )

    }
}

export default ListComp