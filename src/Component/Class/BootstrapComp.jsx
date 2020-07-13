import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import './CSS/BootstrapComp.css'
import logo from '../Gambar/be.png';
import apel from '../Gambar/apple.jpg';
import banana from '../Gambar/banana.jpg';
import bery from '../Gambar/berry.jpg';
import strawberry from '../Gambar/strawberries.jpg';
import anggur from '../Gambar/anggur.jpg';
import mangga from '../Gambar/manggo.jpg';

class BootstrapComp extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="display-4"><img src={logo} className="App-logo" alt="logo" /></h1>
                    <p className="text-info">Created by: Eva Ratna Palupi</p>
                </header>
                <br /><br /><br />
                <div className="card-body">
                    <h5 className="card-title">Hallo kamu sudah punya akun belum?</h5>
                    <p className="card-text">Kalau sudah klik Login dan kalau belum Daftar dulu yuk</p>
                    <a href="#" className="btn btn-primary">Login</a> <a href="#" className="btn btn-success">Daftar</a>
                </div>
                <Container>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={apel} className="d-block w-100" alt="" />
                            </div>
                            <div className="carousel-item">
                                <img src={banana} className="d-block w-100" alt="" />
                            </div>
                            <div className="carousel-item">
                                <img src={bery} className="d-block w-100" alt="" />
                            </div>
                            <div className="carousel-item active">
                                <img src={strawberry} className="d-block w-100" alt="" />
                            </div>
                            <div className="carousel-item">
                                <img src={anggur} className="d-block w-100" alt="" />
                            </div>
                            <div className="carousel-item">
                                <img src={mangga} className="d-block w-100" alt="" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href={} role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href={} role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </Container>
            </div>

        )
    }

}

export default BootstrapComp